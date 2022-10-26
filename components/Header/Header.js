import style from "../../styles/Header.module.css";

export default function Header({title}) {
    return(
        <div className={style.container}>
            <div></div>
            <h1 className={style.h1}>{title}</h1>
            <div className={style.navBar}>
                {/* <p>avatar</p>
                <p>logout</p> */}
            </div>
        </div>
    )
}