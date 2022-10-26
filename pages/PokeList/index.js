import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import styles from "../../styles/PokeList.module.css";
import { Card, CardContent, Tooltip, Typography } from "@mui/material";

export const getStaticProps = async () => {
  const interval = {
    limit: 151,
    offset: 0,
  };

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${interval.limit}&offset=${interval.offset}`
  );
  const rawData = await response.json();
  const urls = await rawData.results.map((u) => u.url);
  const pokeList = await Promise.all(urls.map((u) => fetch(u)));
  const pokemonList = await Promise.all(pokeList.map((res) => res.json()));
  console.log(pokemonList[0].sprites.versions['generation-v']['black-white'].animated.front_default);


  return {
    props: { pokemons: pokemonList },
  };
};

export default function PokeList({ pokemons }) {
  return (
    <div>
      <div className={styles.container}>
        <Header title="PokeSearch"/>
        <div className={styles.main}>
          {pokemons ? (
            pokemons.map((pokemon, i) => {
              return (
                <div className={styles.card} key={pokemon.id}>
                  <Card
                    className={styles.MuiCardMediaimg}
                  >
                    <div className={styles.imgcontainer}>
                      <h3 className={styles.pokemonNumber}>{pokemon.id}</h3>
                      <img
                        className={styles.pokeimg}
                        src={pokemon.sprites.front_default}
                        height="150px"
                      />
                    </div>
                    <CardContent style={{ padding: "0" }}>
                      <div className={styles.cardBody}>
                        <Typography
                          className={styles.pokemonName}
                          noWrap
                          variant="h5"
                          component="div"
                          align="center"
                        >
                          {pokemon.name}
                        </Typography>
                        <div
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          {pokemon.types.map((type, i) => {
                            return (
                              <p
                                key={type.type.name}
                                className={styles.types}
                                style={{
                                  backgroundImage: `var(--${type.type.name})`,
                                }}
                              >
                                {type.type.name}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })
          ) : (
            <p className={styles.loading}>Loading...</p>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
