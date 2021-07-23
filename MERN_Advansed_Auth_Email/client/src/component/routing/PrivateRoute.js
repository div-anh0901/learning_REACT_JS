
import { Redirect , Route } from "react-router-dom";


const PrivateRoute = ({conponent:Component,...rest}) => {
    return (
        <div>
            <Route
                 {...rest}
                render = {
                    (props)=>{
                        localStorage.getItem("authToken") ? (
                            <Component {...props}/>
                        ): (
                            <Redirect to="/login"/>
                        );
                    }
                }
            />
               
            
        </div>
    )
}

export default PrivateRoute
