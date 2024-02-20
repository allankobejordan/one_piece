export default function Data(){
    let nome ='Allan';
    let cliente = {
        nome: 'Allan barbosa Santos',
        email: 'allankobe@hotmail.com'
    }

    let a = 1000;
    let b = 2000;

    function add(a,b){
        return a + b;
    }
    return(
        <>
            <p>Nome do cliente: {cliente.nome}</p>
            <p>Email do cliente: {cliente.email}</p>
            <p>A soma A+B = {add(a,b)}</p>
        </>
    )
}