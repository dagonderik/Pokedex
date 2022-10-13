import style from "../../styles/Login.module.css";

export default function Header() {
    return(
        <div >
            <a href="https://pokeapi.co/">
                <footer className={style.footer}>
                Powered by PokeAPI
                </footer>
            </a>
        </div>
    )
}