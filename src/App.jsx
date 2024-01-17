import { useState, useEffect } from "react";
import { SimpleForm } from "./components/Form";
import Axios from "axios";
import { Table } from "./components/Table";
import Swal from "sweetalert2";

const initialForm = {
  nombre: "",
  edad: "",
  pais: "",
  puesto: "",
};
function App() {
  const [form, setForm] = useState(initialForm);
  const [empleados, setEmpleados] = useState([]);
  const emptyForm = (e) => {
    setForm(initialForm);
  };

  //GET
  const getEmpleados = () => {
    Axios.get("http://localhost:4001/empleados").then((response) => {
      setEmpleados(response.data);
    });
  };

  //POST
  const add = (form) => {
    Axios.post("http://localhost:4001/create", {
      nombre: form.nombre,
      edad: form.edad,
      pais: form.pais,
      puesto: form.puesto,
    }).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario creado!",
        showConfirmButton: false,
        timer: 1500,
      });
      setForm(initialForm);
      getEmpleados();
    }) .catch(function (error) {
      console.log("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo crear el usuario...",
      });
    });;
  };

  //PUT
  const edit = (form) => {
    Axios.put("http://localhost:4001/update", {
      id: form.id,
      nombre: form.nombre,
      edad: form.edad,
      pais: form.pais,
      puesto: form.puesto,
    })
      .then(() => {
        getEmpleados();
        alert("usuario actualizado");
        setForm(initialForm);
      })
      .catch(function (error) {
        console.log("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo actulizar el usuario.",
        });
      });
  };

  //DELETE
  const eliminar = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:4001/delete/${id}`)
          .then(() => {
            getEmpleados();
            setForm(initialForm);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch(function (error) {
            console.log("Error:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "An error occurred while deleting the file.",
            });
          });
      }
    });
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  return (
    <>
      <div className="flex m-[3rem] gap-[5rem]">
        <div className="">
          <SimpleForm
            setForm={setForm}
            form={form}
            add={add}
            edit={edit}
            emptyForm={emptyForm}
          />
        </div>
        <div className="mt-[4rem]">
          {empleados.length > 0 ? (
            <Table
              empleados={empleados}
              setForm={setForm}
              eliminar={eliminar}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
