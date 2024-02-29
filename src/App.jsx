import React, { useEffect, useState } from 'react';
import api from "./services/api";
import Header from './components/Header/Header';
import Card from "./components/Card";
import { Grid } from '@mui/material';
import ReactPaginate from 'react-paginate';
import "./assets/css/Paginacao.css";
import axios from 'axios';

export default function App() {

    // CONEXAO COM BANCO DE DADOS
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/backend/Conexao') // Rota que você configurou no servidor back-end
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);
    console.log("conexao aqui: ", data);
    // 
    const [personagens, setPersonagens] = useState([]);
    const [pageNumber, setPageNumber] = useState(0); // Definindo e gerenciando o estado da página atual

    useEffect(() => {
        api.get("/characters/en")
            .then((response) => setPersonagens(response.data))
            .catch((err) => {
                console.error("Erro fatal" + err);
            });
    }, []);

    // Lógica para calcular as páginas e exibir os cards correspondentes
    const cardsPerPage = 4;
    const pagesVisited = pageNumber * cardsPerPage;
    const pageCount = Math.ceil(personagens.length / cardsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className='container-fluid'>
            <Header />
            <Grid container spacing={2}>
                {personagens
                    .slice(pagesVisited, pagesVisited + cardsPerPage)
                    .map((personagem) => (
                        <Grid item xs={12} sm={6} md={3} key={personagem.id}>
                            <Card
                                nome={personagem.name}
                                profissao={personagem.job}
                                recompensa={personagem.bounty}
                                bandeira={personagem.flag}
                            />
                        </Grid>
                    ))}
            </Grid>
            {/* Componente de paginação estilizado com Tailwind CSS */}
            <div className="flex justify-center mt-4">
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
        </div>
    )
}
