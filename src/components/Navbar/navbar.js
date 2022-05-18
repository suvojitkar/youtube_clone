import { useTheme } from "../../services/theme";
import './navbar.css';
const Navbar = () => {
    const theme = useTheme() || "";
    console.log("theme", theme);
    return (
        <div className="navbar">
            <button onClick={theme.toggleTheme}> Change Theme </button>
        </div>
    );
}

export default Navbar;