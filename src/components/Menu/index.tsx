import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./Styles.module.css"
import { useState, useEffect } from "react"

type AvailableThemes = 'dark' | 'light'

export  function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>(()=>{
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'

        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }

    
    function handleThemeChange(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault()

          setTheme(prevTheme =>{
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
            
        })
    }
    
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    },[theme])

   

    return(
        <nav className={styles.menu}>
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
                {nextThemeIcon[theme]}
            </a>
           
        </nav>
    )
}   