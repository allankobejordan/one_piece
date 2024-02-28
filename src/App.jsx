import React, { useEffect, useState } from 'react';
import api from "./services/api";
import Header from './components/Header/Header';
import Card from "./components/Card";
import Table from './components/Table';
import { Box } from '@mui/material';
import {Grid} from '@mui/material';

export default function App() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        api.get("/characters/en")
            .then((response) => setPersonagens(response.data))
            .catch((err) => {
                console.error("Erro fatal" + err);
            });
    }, []);
console.log(personagens)
    return (
        <div className='container-fluid'>
            <Header/>
            <Grid container spacing={2}>
                {/* Mapeando os personagens e renderizando um Card para cada um */}
                {personagens.map((personagem) => (
                    <Grid item  xs={12} sm={6} md={3}>
                        <Card
                            key={personagem.id}
                            nome={personagem.name}
                            profissao={personagem.job}
                            recompensa={personagem.bounty}
                        />
                    </Grid>
                ))}
            </Grid>  
        </div>
    )
}
