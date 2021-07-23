import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ResgisterScreen.css";
const ResgisterScreen = ({history}) => {
    const [username ,setUsername] = useState(""); 
    const [email ,setEmail] = useState(""); 
    const [password ,setPassword] = useState(""); 
    const [confirmPassword ,setConfirmPassword] = useState(""); 
    const [err ,setErr] = useState(""); 

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            history.push("/");
        }
    },[history])
    const registerHandler = async (e)=>{
        e.preventDefault();

        const config ={
            headers : {
                "Content-Type" : "application/json" 
            }
        }

        if(password!==confirmPassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(()=>{
                setErr("")
            },5000);
            return setErr("Password do not match");
        }

        try {
            const {data} = await axios.post("http://localhost:5000/api/auth/register",{username, email,password},config );

            localStorage.setItem("authToken",data.token);

            history.push("/");

        } catch (e) {
            setErr(e.response.data.e);
            setTimeout(()=>{
                setErr("");
            },5000)
        }
    }


    return (
        <div className="register-screen">
            <form onSubmit={registerHandler} className="register-screen_form">
                <h3 className="register-screen_title">
                    Register
                </h3>
                {err&& <span className="error-message">{err}</span>}
                <div className="form-group">
                    <label htmlFor="name">Username : </label>
                    <input type="text" 
                            required 
                            id="name" 
                            placeholde="Enter username" 
                            name="username" 
                            value={username} 
                            onChange={(e)=> setUsername(e.target.value)}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="name">Email : </label>
                    <input type="email" 
                            required 
                            id="name" 
                            placeholde="Enter Email" 
                            name="email" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="name">Password : </label>
                    <input type="password" 
                            required 
                            id="name" 
                            placeholde="Enter Email" 
                            name="password" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="name">Confirm Password : </label>
                    <input type="password" 
                            required 
                            id="name" 
                            placeholde="Enter Email" 
                            name="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                    />

                </div>
                <button type="submit" className="btn  btn-primary">
                    Register
                </button>
                <span className=".register-screen_subtext">Already have an account?<Link to="/login" >Login</Link></span>
            </form>
        </div>
    )
}

export default ResgisterScreen






