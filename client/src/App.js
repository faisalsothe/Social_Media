import React, { useEffect } from "react"
import { Container} from "@material-ui/core";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import PostDetails from "./components/PostDetails/PostDetails.jsx";
import dotenv from "dotenv"
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer.jsx";
dotenv.config();

const App=()=>{
    const user=JSON.parse(localStorage.getItem("user_info"));
    
    useEffect(() => {
        document.title = "FZ's Memories";
      }, []);

    return(
        <GoogleOAuthProvider clientId="373906926522-ogubk0mtojdan8ogdmauvcidjoljmn8j.apps.googleusercontent.com">
        <BrowserRouter>
        <Container maxWidth="lg">
        <NavBar/>
        <Routes>
            <Route path="/" exact element={<Navigate to="/posts"/>}></Route>
            <Route path="/posts" exact element={<Home/>}/>
            <Route path="/posts/search" exact element={<Home/>}/>
            <Route path="/posts/:id" element={<PostDetails/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Auth" element={!user ? <Auth/> : <Navigate to="/posts"/> }> </Route>
        </Routes>
        </Container>
        <Footer/>
        </BrowserRouter>
        </GoogleOAuthProvider>
        
    )
}

export default App;
