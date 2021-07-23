import { useState, useEffect } from "react";
import axios from "axios";

import React from "react";

const PrivateScreen = ({ history }) => {
    const [err, setErr] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            history.push("/");
        }

        const fetchPrivateData = async() => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorzation: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("http://localhost:5000/api/private", config);
                setPrivateData(data.data);
            } catch (e) {
                localStorage.removeItem("authToken");
                setErr("Youe are not authorzied login");
            }
        };
        fetchPrivateData();
    }, [history]);

    const  logoutHandler  =()=>{
        localStorage.removeItem("authToken");
        history.push("/login");
    }
    return err ? ( <span className = "error-message" > { err } </span>
    ) : ( <>
            <div style={{background: "green" ,color:"white"}}>
            {privateData} 
            </div> 
            <button onClick={logoutHandler}>logout</button>
        </>
    );
};

export default PrivateScreen;