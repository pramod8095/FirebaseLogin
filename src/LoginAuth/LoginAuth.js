import React, {useState, useEffect} from 'react'
import Fire from '../FireBase/Fire'

import './LoginAuth.css'

const LoginAuth = ()=> {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(fasle);

    /*const clearInput = () ={
        setEmail("")
        setPassword("")

    }
    */

    const clearErrors = () =>{
      setEmailError("");
      setPasswordError("");
    }

    const handleLogin = () =>{
        Fire
            .auth()
            .signInWithEmailAndPassword(email, password);
            .catch((err) => {
                switch(err.code){
                    case "auth/Invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }

            });
    };
    const handleLogOut = () =>{
        Fire.auth().sigOut();
    }

    const autherizer = () =>{
        Fire.auth().OnAuthStateChanged(user=>{
            if(user){
                setUser(user);
            }else{
                setUser("");
            }
        })
    }

    userEffect(()=>{
        autherizer();
    },[])

    return(
        <div>
            <h1>Hi Pramod </h1>
        </div>
    );
};



export default LoginAuth;