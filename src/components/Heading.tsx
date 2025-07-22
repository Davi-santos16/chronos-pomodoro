import styles from "./Heading.module.css"

type Headingprops ={
    children:string
}

export default function Heading(props:Headingprops){
    return(
        <h1 className={styles.heading}>{props.children}</h1>
    )
}