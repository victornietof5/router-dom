

export const users = [
    { id: '0', name: 'Andres', telephone: '6666666', favorite: false },
    { id: '1', name: 'Luis', telephone: '67777777', favorite: true },
    { id: '2', name: 'Marcos', telephone: '6688855', favorite: false },
];
//getContact que recibe un id como parametro 
export function getContact(id) {
    //esta funcion users.find( itera sobre users y va a buscar un elemento basado en el id 
    return users.find((users) => users.id === id);
}