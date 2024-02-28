


function databaseConnection (){
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'2324',
        database:'react_db',
    });
    
    connection.connect((err)=>{
        if(err){
            console.log("erro ao conectar ao banco de dados:", err.stack);
            return;
        }
        
        console.log('Conectado ao banco de dados Mysql com ID', connection.threadId);
    })
    
};
export default databaseConnection;
// Fechar a conexão com o banco de dados quando não for mais necessária
// connection.end();