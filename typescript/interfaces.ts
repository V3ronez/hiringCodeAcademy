interface Usuario {
    nome: string;
    email: string;
    addres?: string; //opcional
}

function getUser(): Usuario {
    return{
        nome: 'Henrique',
        email: 'Henrique@gmail.com'
    }
}

function setUser(user: Usuario) {
    //...
}