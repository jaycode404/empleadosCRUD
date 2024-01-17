import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Nombre", "Edad", "Pais", "Puesto", "Opciones"];

export function Table({ empleados, setForm, eliminar }) {
  return (
    <Card className="h-full w-full ">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => {
            return (
              <tr key={empleado.id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {empleado.nombre}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {empleado.edad}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {empleado.pais}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {empleado.puesto}
                  </Typography>
                </td>
                <td className="p-4 flex gap-3">
                  <Button
                    size="sm"
                    onClick={() => {
                      console.log(empleado);
                      setForm(empleado);
                    }}
                  >
                    Editar
                  </Button>
                  <Button color="red" size="sm" onClick={() => {
                    console.log(empleado.id)
                    eliminar(empleado.id)}}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
