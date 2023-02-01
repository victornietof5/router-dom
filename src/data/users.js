

export const users = [
    { id: '0', name: 'Andres', telephone: '6666666', favorite: false },
    { id: '1', name: 'Luis', telephone: '67777777', favorite: true },
    { id: '2', name: 'Marcos', telephone: '6688855', favorite: false },
];

export function getContact(id) {
    return users.find((users) => users.id === id);
}