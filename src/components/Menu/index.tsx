import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./Styles.module.css"
import { useState, useEffect } from "react"

type AvailableThemes = 'dark' | 'light'

export  function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>("dark")

    
    function handleThemeChange(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault()
        console.log('clicado', Date.now())


        setTheme(prevTheme =>{
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
            
        })
    }
    
    useEffect(()=>{
        
        document.documentElement.setAttribute('data-theme', theme)

        return () => {
            console.log('olha, este componente sera atualizado')
        }
    },[theme])

   

    return(
        <nav className={styles.menu}>
            <h1>{theme}</h1>
            <a className={styles.menulink} href="#" aria-label="ver Home" title="Ver home" >
                <HouseIcon/>
            </a>
            <a className={styles.menulink} href="#" aria-label="ver Historico" title="Ver historico" >
                <HistoryIcon/>
            </a>
             <a className={styles.menulink} href="#" aria-label="ver consfiguraçaoes" title="Ver configuraçoes" >
                <SettingsIcon/>
            </a>
             <a className={styles.menulink} href="#" aria-label="mudar tema" title="mudar tema" 
             onClick={handleThemeChange} >
                <SunIcon/>
            </a>
           
        </nav>
    )
}   