import style from "../../styles/Login.module.css";

export default function Footer() {
    return(
        <div className={style.footerContainer}>
            <a href="https://pokeapi.co/">
                <footer className={style.footer}>
                Powered by PokeAPI/
                <a href="https://github.com/dagonderik">Created by @dagonderik</a>
                </footer>
            </a>
        </div>
    )
}