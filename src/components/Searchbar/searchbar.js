import './searchbar.css';

const Searchbar = () => {
    return (
        <div className="navbarElem">
            <input type="text" placeholder="Search"></input>
            <div className="srch"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    );
}

export default Searchbar;