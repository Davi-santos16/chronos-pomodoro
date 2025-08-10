// Components
import { Container } from "../../Container"
import { Logo } from "../../Logo"
import { Menu } from "../../Menu"
import { Footer } from "../../Footer"


type MainTemplateProps = {
   children: React.ReactNode
}


export default function MainTemplate ({children}:MainTemplateProps){

    
    return(
        <>
        
         <Container>
            <Logo/>
         </Container>

         <Container>
            <Menu/>
         </Container>

         {children}        

          <Container>
            <Footer/>
         </Container>



        
        </>
    )
}