

import styles from "./Styles.module.css"
import { useTaskContext } from "../../contexts/TaskContext"


export  function CountDown(){
  const {state} = useTaskContext()

    return(
        <div className={styles.container}>
          {state.formattedSecondsRemaining}
        </div>
    )
}   