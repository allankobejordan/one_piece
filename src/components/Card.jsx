import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../assets/bootstrap/css/bootstrap-grid.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import { yellow } from '@mui/material/colors';


export default function MediaCard({ nome, profissao, recompensa, bandeira }) {
  const color = yellow[600];
  return (
    <Card  sx={{  bgcolor: color }}>
        <Typography gutterBottom variant="h5" component="div">
          <h2 className='d-flex justify-content-center'>Wanted</h2>
        </Typography>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          <h6 className='d-flex justify-content-center'>Dead Or Alive</h6>
          <span className='d-flex justify-content-center'>{nome}</span>
        </Typography>
        <Typography  className='d-flex justify-content-center' gutterBottom variant="h6" component="div">
          {recompensa}
        </Typography>
        <Typography  className='d-flex justify-content-center' variant="body2" color="text.secondary">
          {profissao} 
          {bandeira}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Informação</Button>
        <Button size="small">Teste</Button>
      </CardActions>
    </Card>
  );
}
