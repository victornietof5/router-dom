import { Link } from "react-router-dom"

export default function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    {/*el link reemplaza a un href */}
                    <Link to = {'/'}>Home</Link>
                </li>
                <li>
                    <Link to = {'/About'}>About</Link>
                </li>
                </ul>
        </nav>

    )
}