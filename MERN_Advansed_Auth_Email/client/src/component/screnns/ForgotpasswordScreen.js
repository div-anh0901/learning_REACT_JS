import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ForgotpasswordScreen.css";

const ForgotpasswordScreen = () => {
    const [email ,setEmail] = useState(""); 

    const [err ,setErr] = useState("");
    const [success , setSuccess] = useState(""); 

    const forgotPasswordHandler = async (e)=>{
        e.preventDefault();
        const config ={
            headers : {
                "Content-Type" : "application/json" 
            }
        }
        try {
            const {data} = await axios.post("http://localhost:5000/api/auth/forgotpassword",{ email},config );

            setSuccess(data.data);
        } catch (e) {
            setErr(e.response.data.e);
            setEmail("")
            setTimeout(()=>{
                setErr("");
            },5000)
        }
    }


    return (
        <div className="forgotpassword-screen">
            <form onSubmit={forgotPasswordHandler} className="forgotpassword-screen_form">
                <h3 className="forgotpassword-screen_title">
                    Forgot Password
                </h3>
                {err && <span className="error-message">{err}</span>}
                {success &&<span className="success-message">{success}</span>}
                <div className="form-group">
                    <p className=".forgotpassword-screen_subtext">
                        Please enter the enail address you register your
                         account with ,We Will send you reset password confirmation to this email
                    </p>
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
                <button type="submit" className="btn  btn-primary">
                    Send Email
                </button>
               
            </form>
        </div>
    )
};

export default ForgotpasswordScreen;
