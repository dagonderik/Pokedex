import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/PokeList.module.css'
import Pokedex from 'pokedex-promise-v2';
import React, { useState, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';


export const getStaticProps = async () => {

  let returnValue = null;

  const P = new Pokedex();
  const interval = {
    limit: 50,
    offset: 0
  }


  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${interval.limit}&offset=${interval.offset}`);
  const rawData = await response.json();
  const urls = await rawData.results.map(u => u.url);
  const pokemonRawData = await urls.map(u => fetch(u));
  console.log(pokemonRawData);

  // P.getPokemonsList(interval)
  // .then(response => {
  //   const urls = response.results.map(result => result.url);
  //   Promise.all(urls.map(u => fetch(u)))
  //   .then(response =>  Promise.all(response.map( res => res.json() )))
  //   .then(monsters => {
  //     returnValue = monsters;
  //     // console.log(returnValue[0].id);
  //   })
  // })
  // console.log(returnValue);
  // return {
  //   props: { pokemons: returnValue }
  // }
  return {
    props: { pokemons: returnValue }
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