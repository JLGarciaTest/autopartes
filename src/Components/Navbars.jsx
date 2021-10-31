import React,{useState,useEffect} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

const Navbars = () => {
    const {loginWithRedirect,isAutheticated,user}=userAuth0();
    const [textButton,setTextButton] = useState('Login');
    const LoginButton =()=>{
        if (!isAutheticated){
            setTextButton('Login')
            return()=>loginWithRedirect()
        }else{
            setTextButton('Logout');
            return logout({returnTo:window.location.origin})

        }
    }
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="me-auto">
                    <link to='/'> <nav.link>Home</nav.link></link>
                    <link to='/'> <nav.link>Home</nav.link></link>
                </Nav>

            </Container>
            <button
            onClick={}
             className='btn btn-primary'>{textButton}</button>
        </Navbar>
    )
}

export default Navbars