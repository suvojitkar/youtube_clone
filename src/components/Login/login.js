import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/auth';
// import { useTheme } from '../../services/theme';
    
const Login = () => {
    const auth = useAuth();
    // const theme = useTheme();
    const navigate = useNavigate();

    const [userInfo, setuserInfo] = useState({
        username: null,
        password: null
    });

    const loginHandler = (e) => {
        setuserInfo({ ...userInfo, [e.target.name]:e.target.value });
    }

    const loginValidatorHandler = (e) => {
        e.preventDefault();
        if (auth.login(userInfo)) {
            navigate("/home");
        }
    }

    return (
        <>
        <form onSubmit={ loginValidatorHandler }>
            <input type="text" name="username" onKeyUp={loginHandler} autoComplete="off" placeholder="username" /> <br/>
            <input type="password" name="password" onKeyUp={loginHandler} autoComplete="off" placeholder="password"/> <br/>
            <input type="submit" value="login"/>
            </form>
        </>
    )
}

export default Login;