import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/PokeList.module.css'
import Pokedex from 'pokedex-promise-v2';
import React, { useState, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';





export default function PokeList() {

  const P = new Pokedex();
  const interval = {
    limit: 150,
    offset: 0
  }


  const [pokemonList, setPokemonList] = useState();

  function updatePokemonList(data) {
    setPokemonList(data);
  }


  const init = () => {
    if(!pokemonList){
      P.getPokemonsList(interval)
      .then(response => {
      // console.log(response);
      const urls = response.results.map(result => result.url);
      Promise.all(urls.map(u => fetch(u)))
      .then(responses => Promise.all(responses.map( res => res.json())))
      .then(monsters => {
        updatePokemonList(monsters);
        console.log(pokemonList);
        });
      });
    }
  }


  

	return (
        <div>
          <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
              {(pokemonList ? pokemonList.map((pokemon,i) => {
                return (
                  <Card sx={{ maxWidth:150, maxHeight:250}}>
                    <CardMedia
                    component="img"
                    height="300"
                    image="https://cdn.dribbble.com/users/622356/screenshots/2214760/media/a42d4d091aa3f6b9faeafe22e22448fe.jpg"
                    alt="pokedex icon"
                  />
                  </Card>
                )  
              }) : <p className={styles.loading}>Loading...</p>)}
            </div>
            <Footer/>
          </div>
        </div>
    )
}