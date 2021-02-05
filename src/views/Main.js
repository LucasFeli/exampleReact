import {data} from "..//data/data"
import {Navbar} from "../components/Navbar"
import {Hero} from "../components/Hero"
import { Body } from "../components/Body";

export function Main(){
    return(
        <main>
            <Navbar>
                {navbarLinks(data)}
            </Navbar> 
            <Hero>
                 {heroLinks(data)}
            </Hero>
            <Body>
                {BodyLinks(data)}
            </Body>

        </main>
    )
}


function navbarLinks({navbar}){
    return(
        <>
           <h1>{ navbar.title}</h1> 
         
        </>
        )

}

function heroLinks({hero}){
    return(
        <>
           <h1>{ hero.title}</h1> 
           <h1>{ hero.subtitle}</h1> 
         
        </>
        )

}

function BodyLinks({body}){
    return(
        <>
           
          
         
        </>
        )

}

