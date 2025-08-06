import { Logo } from "./components/Logo"
import { Container } from "./components/Container"
import { Menu } from "./components/Menu"
import { CountDown } from "./components/CountDown"



import "./styles/theme.css"
import "./styles/global.css"


export default function App (){
    return(
        <>
         <Container>
            <Logo/>
         </Container>

         <Container>
            <Menu/>
         </Container>

         <Container>
            <CountDown/>
         </Container>

        
        </>
    )
}