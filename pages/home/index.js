import { Link, Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Style from "../../styles/Home.module.css"
import Head from "next/head";
import Pokedex from 'pokedex-promise-v2';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';


const P = new Pokedex();
const interval = {
  limit: 100,
  offset: 1
}

P.getBerriesList()
  .then((response) => {
    const urlList = response.results.map(results => results.url);
    // Promise.all(urlList.map(u => fetch(u)))
    // .then(responses => Promise.all(responses.map(res => res.json())))
    // .then(monsters => {
    //   console.log(monsters);
    // })
    console.log(urlList[0]);
    
  })
    
    



export default function Home() {
	return (
    <div className={Style.container}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex project" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header/>
      
      <div className={Style.main}>
        <div className={Style.card}>
          <Card sx={{ maxWidth: 350, maxHeight: 450 }}>
            <CardActionArea component={Link} href='/PokeList'>
              <CardMedia
                component="img"
                height="300"
                image="https://cdn.dribbble.com/users/622356/screenshots/2214760/media/a42d4d091aa3f6b9faeafe22e22448fe.jpg"
                alt="pokedex icon"
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

        <div className={Style.card}>
          <Card sx={{ maxWidth: 350, maxHeight: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/Berry.jpg"
                alt="Berry icon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Berrydex
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search Berries by name 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Style.card}>
          <Card sx={{ maxWidth: 350, maxHeight: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="Types.jpg"
                alt="Pokemon type icon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Typedex
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search pokemon by type
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Style.card}>
          <Card sx={{ maxWidth: 350, maxHeight: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="Attack.jpg"
                alt="Pokemon attack icon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movedex
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search moves 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </div>

    
  )
}