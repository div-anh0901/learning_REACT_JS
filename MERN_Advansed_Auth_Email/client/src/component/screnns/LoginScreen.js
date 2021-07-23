import { useState ,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./LoginScreen.css";




const LoginScreen = ({history}) => {

    const [email ,setEmail] = useState(""); 
    const [password ,setPassword] = useState(""); 
    const [err ,setErr] = useState(""); 

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            history.push("/");
        }
    },[history]);
    const loginHandler = async (e)=>{
        e.preventDefault();
        const config ={
            headers : {
                "Content-Type" : "application/json" 
            }
        }
        try {
            const {data} = await axios.post("http://localhost:5000/api/auth/login",{ email,password},config );
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
        <div className="login-screen">
            <form onSubmit={loginHandler} className="login-screen_form">
                <h3 className="login-screen_title">
                    Login
                </h3>
                {err&& <span className="error-message">{err}</span>}
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
              
                <button type="submit" className="btn  btn-primary">
                    Login
                </button>
                <Link to="/forgotpassword">forgotpassword</Link>
                <span className=".login-screen_subtext">Already have an account?<Link to="/register" >Rigister</Link></span>
            </form>
        </div>
    )
}

export default LoginScreen






