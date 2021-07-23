import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PasswordResetScreen.css";


const PasswordResetScreen = ({history ,match}) => {
    const [password ,setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [err,setErr] = useState("");
    const [success, setSuccess] = useState("");

    const resetPasswordHandler = async(e)=>{
        e.preventDefault();

        const config = {
            headers : {
                "Content-Type" : "appication/json"
            }
        }

        if(password!== confirmPassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(()=>{
                setErr("");
            },5000);
            return setErr("Password don't match");
        }

        try {
            const {data} = await axios.put(
                `http://localhost:5000/api/auth/passwordreset/${match.params.resetToken}`,
                {password},
                config
            )
            console.log(data);
            setSuccess(data.data);
        } catch (e) {
            setErr(e.response.data.e);
            setTimeout(()=>{
                setErr("");
            },5000);
        }
    }

    return (
        <div className="resetpassword-screen">
            <form onSubmit={resetPasswordHandler} className="resetpassword-screen_form">
                <h3 className="resetpassword-screen_title">
                    Reset Password
                </h3>
                {err&& <span className="error-message">{err}</span>}
                {success && <span className="success-message">
                    {success} <Link to="/login">Login</Link>
                    </span>}
                <div className="form-group">
                    <label htmlFor="password">New Password : </label>
                    <input type="password" 
                            required 
                            id="password" 
                            placeholde="Enter Email" 
                            name="password" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm New Password : </label>
                    <input type="password" 
                            required 
                            id="confirmpassword" 
                            placeholde="Enter Email" 
                            name="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                    />

                </div>
                <button type="submit" className="btn  btn-primary">
                    resetpassword
                </button>
              
            </form>
        </div>
    )
}

export default PasswordResetScreen


