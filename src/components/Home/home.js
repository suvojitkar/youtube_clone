
import { useAuth } from '../../services/auth';

const Home = () => {
    const auth = useAuth();
    return (
        <>
            <h1> Welcome  { auth.user }</h1>
            <button onClick={auth.logout}>Logout</button>
        </>
    )
}

export default Home;