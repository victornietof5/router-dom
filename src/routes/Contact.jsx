import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/users";

export default function Contact() {
    //hub params 
    const params = useParams();
    //useMeno se usa para memorizar el asceso a la informacion y le proporcionar el codigo q se quiere que regrese con getContact
    //se llama al getContact y pide un id, por eso se usa (params.contactid)
    //el segundo parametro de useMeno es una lista de dependencias [params.contactid]
    //cade vez que cambie el id del contacto quiero que se actualice el valor que estoy memorizando y se lo asigne a contact 
    const contact = useMemo(() => getContact(params.contactid), [params.contactid]);
    
    //si no existe contact
    if(!contact){
        //entonces , ir al componente de Error y poner el mensaje de error
        throw new Error('Contact does not exist');
    }
    return (
        <div className="contactContainer">
            <h1>{contact.name}</h1>
            <p>{contact.telephone} </p>
            <p>{contact.favorite ? 'favorite': 'Regular Contact' } </p>
        </div>
    );
}
