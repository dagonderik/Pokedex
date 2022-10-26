import { Button, Link, TextField } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>PokeSearch</title>
        <meta name="description" content="Pokedex project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            PokeBag
          </h1>
          <h4 className={styles.description}>Login to enjoy a personal Pokemon experience</h4>
        </div>
        <div className={styles.login}>
          <div className={styles.loginInput}>
            <TextField id='email' type="email" label='Email' variant='outlined'/>
          </div>
          <div className={styles.loginInput}>
            <TextField id='password' type="password" label='Password' variant='outlined' />
          </div>
          <div className={styles.loginButton}>
            <Link href='/home'>
              <Button color='success' variant='contained'>Log in</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by PokeAPI
      </footer>
    </div>
  )
}
