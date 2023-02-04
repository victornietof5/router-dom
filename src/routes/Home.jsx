import { Link, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import { users } from "../data/users";


export default function Home() {
    return (
        <div>
            <Menu />

            <div className="mainContainer">
                <div className="sidebar">
                    {/*aca se imprimen los elementos */}
                    {users.map((user) => (
                        <div>
                            {/*usando Link y su componente to y despues la ruta a la cual se va a dirijir al hacer click y mostrar la informacion del contacto*/}
                            <Link to={`/contact/${user.id}`}>{user.name}</Link>{''}
                        </div>
                    ))}
                </div>
                {/*al utilizar rutas hijas y al momento de expecificar donde se va a cargar ese componente a traves del componente de 
            outlet literalmente de inyecta ese componente dentro del componente principal que es home*/}
                <Outlet />
            </div>
        </div>

    );
}