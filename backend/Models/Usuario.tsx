const express = require('express');
const router = express.Router();
const connection_db = require('../Conexao'); // Substitua pelo caminho correto para o arquivo de configuração de conexão

router.get('/listarUsuarios', (req, res) => {
    const tableName = req.query.usuarios; // Parâmetro da query para receber o nome da tabela
    const sql = `SELECT * FROM ${tableName}`;

    connection_db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }
        res.status(200).json(results);
    });
});

module.exports = router;
