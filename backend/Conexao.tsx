const  mysql =  require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:2324,
    database:'react_db'
});

connection.connect((err)=>{
    if(err){
        console.error("Erro ao conectar ao banco de dados: ", err);
        return;
    }

    console.log("Conexão ao banco de dados MYSQL bem sucedida");
});

module.exports= connection;