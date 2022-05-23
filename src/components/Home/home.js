import { useAuth } from '../../services/auth';
import List from '../List/list';
import Sidebar from '../Sidebar/sidebar';
import './home.css';

const Home = () => {
    const auth = useAuth();
    return (
        <>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-content">
                <List />
            </div>
            <br />
            <br />
            <button onClick={auth.logout}>Logout</button>
        </>
    )
}

export default Home;