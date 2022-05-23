import { useTheme } from "../../services/theme";
import Searchbar from '../Searchbar/searchbar';
import './navbar.css';
const Navbar = () => {
    const theme = useTheme() || "";
    console.log("theme", theme);
    return (
        <div className="navbar">
            {/* <button onClick={theme.toggleTheme}> Change Theme </button> */}
            <Searchbar />
            <div className="profile-meta">
                <i className="icon fa-solid fa-bell"></i>
                <i className="icon fa-solid fa-video"></i>
                <img className="profilePic" src="data:image/jpeg;base64,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" alt="profile" />
            </div>
        </div>
    );
}

export default Navbar;