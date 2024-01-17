import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SimpleForm({ form, setForm, add, edit, emptyForm }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviadno", form);
    if (form.id) {
      console.log("editando");
      edit(form);
    } else {
      add(form);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Informacion
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Llena los campos...
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nombre
          </Typography>
          <Input
            type="text"
            value={form.nombre}
            name="nombre"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Edad
          </Typography>
          <Input
            type="number"
            value={form.edad}
            name="edad"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Pais
          </Typography>
          <Input
            type="text"
            value={form.pais}
            name="pais"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Puesto
          </Typography>
          <Input
            type="text"
            value={form.puesto}
            name="puesto"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="flex gap-4">
          <Button
            color={form.id && "yellow"}
            type="submit"
            className="mt-6"
            fullWidth
          >
            {form.id ? "Editar" : "Enviar"}
          </Button>
          {form.id && (
            <Button
              fullWidth
              className="mt-6"
              color="red"
              onClick={(e) => {
                emptyForm(e);
              }}
            >
              Cancelar
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}
