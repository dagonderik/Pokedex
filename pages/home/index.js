import { Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Style from "../../styles/Home.module.css"
import Head from "next/head";
import Pokedex from 'pokedex-promise-v2';
import Header from '../../components/Header/Header.js';

const P = new Pokedex();
const interval = {
  limit: 100,
  offset: 1
}

P.getPokemonsList(interval)
.then(response => {
  console.log(response.results)
})

export default function Home() {
	return (
    <div className={Style.container}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex project" />
        <link rel="icon" href="/favicon.ico" />
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Header/>
      
      <div className={Style.main}>
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://cdn.dribbble.com/users/622356/screenshots/2214760/media/a42d4d091aa3f6b9faeafe22e22448fe.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pokedex
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Search pokemons by name 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

    </div>

    
  )
}