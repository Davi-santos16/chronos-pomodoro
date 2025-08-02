import styles from "./Styles.module.css"

type Headingprops ={
    children:React.ReactNode
}

export  function Heading(props:Headingprops){
    return(
        <h1 className={styles.heading}>{props.children}</h1>
    )
}