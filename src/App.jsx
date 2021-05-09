import React,{useEffect,useState} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./signup";
import Login from "./login";
import Dash from "./dashboard";
import Dash2 from "./dashboard2";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import {auth} from "./firebase/firebase.js"

const App=()=>{
    const [authUser, setauthUser] = useState(null)
    useEffect(() => {
        auth().onAuthStateChanged(user=>{
            if (user) {
                setauthUser(user)
            } else {
                setauthUser(null)
            }
        })
    }, [])
    return (
        <>
        <Navbar user={authUser}/>
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/signup"><Signup user={authUser} /></Route> 
        <Route exact path="/login"><Login user={authUser} /></Route>
        <Route exact path="/dashboard"> <Dash user={authUser} /></Route>
        <Route exact path="/dashboard2"> <Dash2 /></Route>
        <Redirect to="/" />
        </Switch>
        <Footer />
        </>
    );
}

export default App;