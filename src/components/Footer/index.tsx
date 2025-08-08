import styles from "./Styles.module.css"


export  function Footer(){
    return(
        <footer className={styles.footer}>
            <a href="">Entenda como Funciona a Técnica Pomodoro</a>
            <a href="">Chronos Pomodoro &copy  {new Date().getFullYear()} -Feito Por Davi</a>
        </footer>
    )
}