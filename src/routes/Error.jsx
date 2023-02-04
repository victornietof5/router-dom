import { useRouteError } from "react-router-dom"

export default function Error() {
    //se debe importar el componente Error a index.jsx
    //error es un hub que almcena los errores si los hubiese
    const error = useRouteError();
    return (<div>
        <h1>Error</h1>
       { /*este componente imprime un error de estatus 404 o un mensaje de error  */}
        <p>{error.statustext || error.message}</p>
    </div>
    );
}