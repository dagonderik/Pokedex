import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/PokeList.module.css';
import Pokedex from 'pokedex-promise-v2';
import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';



export const getStaticProps = async () => {

  const interval = {
    limit: 950,
    offset: 0
  }
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${interval.limit}&offset=${interval.offset}`);
  const rawData = await response.json();
  const urls = await rawData.results.map(u => u.url);
  const pokeList = await Promise.all(urls.map(u => fetch(u)));
  const pokemonList = await Promise.all(pokeList.map( res => res.json()));
  console.log(pokemonList[0]);
  

  return {
    props: { pokemons: pokemonList }
  }

}


export default function PokeList({ pokemons }) {


  const [pokemonList, setPokemonList] = useState();

 

	return (
        <div>
          <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
              {(pokemons ? pokemons.map((pokemon,i) => {
                return (
                  <div className={styles.card}>
                    <Card sx={{ maxWidth:250, maxHeight:450}}>
                      <CardMedia
                      component="img"
                      height="250"
                      image={pokemon.sprites.front_default}
                      alt="pokedex icon"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {`${pokemon.id} - ${pokemon.name}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Search pokemons by name 
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                )  
              }) : <p className={styles.loading}>Loading...</p>)}
            </div>
            <Footer/>
          </div>
        </div>
    )
}