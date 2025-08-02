import { TimerIcon } from "lucide-react"
import styles from "./Styles.module.css"

export  function Logo(){
    return(
        <div className={styles.logo}>
            <a className={styles.logolink} href="#">
                <TimerIcon/>
                <span>Chronos</span>
            </a>
        </div>
    )
}   