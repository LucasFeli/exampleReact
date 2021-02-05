import { data } from "..//data/data";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Body } from "../components/Body";
import {Footer} from "../components/Footer"


export function Main() {
  return (
    <main>
      <Navbar> Navbar {navbarLinks(data)}</Navbar>
      <Hero> Hero {heroLinks(data)}</Hero>
      <Body> body {bodyLinks(data)}</Body>
      <Footer> footer {footer(data)}</Footer>
     
    </main>
  );
}

function navbarLinks({ navbar }) {
    
    
    return (
    <>
      <h1>{navbar.title}</h1>
     
    </>
  );
}

function heroLinks({ hero }) {
  return (
      
    <>
      <h1>{hero.title}</h1>
      <h1>{hero.subtitle}</h1>
    </>
  );
}

function bodyLinks({ body }) {
  return <>
    <h1>{body.utilsSection.sectionTitle}</h1>
    <h1>{body.developersSection.sectionTitle}</h1>
    <h1>{body.developersSection.desctionDescription}</h1>

    
  </>;
}

function footer({ footer }) {
    return <>
        <h1>{footer.contact.email}</h1>
        <h1>{footer.contact.phone}</h1>
        <h1>{footer.contact.address.country}</h1>
        <h1>{footer.contact.address.street}</h1>
        <h1>{footer.contact.address.state}</h1>
    </>;
  }
  
  
