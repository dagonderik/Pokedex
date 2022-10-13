import { Button, Link, TextField } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex project" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login to your personal Pokedex
        </h1>
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
          Powered by
      </footer>
    </div>
  )
}