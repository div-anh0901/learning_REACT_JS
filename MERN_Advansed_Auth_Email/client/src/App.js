import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./component/routing/PrivateRoute";
import LoginScreen from './component/screnns/LoginScreen';
import RegisterScreen from './component/screnns/ResgisterScreen'
import ForgotPassword from './component/screnns/ForgotpasswordScreen';
import PasswordResetScreen from './component/screnns/PasswordResetScreen';
import PrivateScreen from "./component/screnns/PrivateScreen";
const App = () => {
  return (
    <Router>
     <Switch>
       <PrivateRoute>
       <Route exact path="/" component={PrivateScreen}/>
       <Route exact path="/login" component={LoginScreen}/>
       <Route exact path="/register" component={RegisterScreen}/>
       <Route exact path="/forgotpassword" component={ForgotPassword}/>
       <Route exact path="/passwordreeset/:resetToken" component={PasswordResetScreen}/>
       </PrivateRoute>
     </Switch>
    </Router>
  );
};

export default App;
