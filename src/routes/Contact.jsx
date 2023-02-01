import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/users";

export default function Contact() {

    const params = useParams();
    const contact = useMemo(() => getContact(params.contactid), [params.contactid]);

    if(!contact){
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
