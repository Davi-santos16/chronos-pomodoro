// Components
import { Logo } from "./components/Logo"
import { Container } from "./components/Container"
import { Menu } from "./components/Menu"
import { CountDown } from "./components/CountDown"
import { DefautInput } from "./components/DefautInput"
import { DefautButton } from "./components/DefautButton"
import { Cycles } from "./components/Cycles"
import { Footer } from "./components/Footer"


// Lucide
import { PlayCircleIcon} from "lucide-react"

// css
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

          <Container>
            <form className="form" action="">
                <div className="formRow">
                   <DefautInput labelText="Task" placeholder="Ex.: estudar para a prova"  id="meuInput" type="text" />
                </div>
                <div className="formRow">
                    <p>Nesse ciclo foque por 25min</p>
                </div>
                <div className="formRow">
                    <Cycles/>
                </div>
                <div className="formRow">
                    <DefautButton  icon={<PlayCircleIcon size={22}/>} ></DefautButton>
        
                </div>
            </form>
         </Container>

          <Container>
            <Footer/>
         </Container>



        
        </>
    )
}