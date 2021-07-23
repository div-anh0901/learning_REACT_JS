import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext,useState } from "react";
import AlertMessage from '../layout/AlertMessage';
const LoginForm = () => {
  const {loginUser} = useContext(AuthContext);
  const [loginForm ,setLoginForm] = useState({
    username:'' , 
    password:''
  });

  const [alert , setAlert] = useState(null);
  const {username , password} = loginForm;

  const onChangeLoginForm = event=>{
    setLoginForm({...loginForm, [event.target.name] : event.target.value})
  }

  const history = useHistory();
  const login = async event=>{
    event.preventDefault();
    try{
      const loginData = await loginUser(loginForm);
      if(!loginData.success){
        setAlert({type : 'danger', message : loginData.message});
        setTimeout(()=> setAlert(null), 4000);
      }
    }catch(e){
      console.log(e);
    }
  }
  
 
  return (
    <>
      <Form className="my-4" onSubmit={login} >
        <AlertMessage info={alert}/>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value= {username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange = {onChangeLoginForm}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
          Don't have an account?
          <Link to="/register">
                <Button variant='info' size='sm' className='ml-2'> 
                    Register
                </Button>
          </Link>
      </p>
    </>
  );
};

export default LoginForm;
