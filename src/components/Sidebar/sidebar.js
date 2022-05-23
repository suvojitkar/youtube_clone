import './sidebar.css';

const Sidebar = () => {
    const sideBarElem1 = {
        home: {
            title: "Home",
            icon: "fa-solid fa-house",
            class: "active"
        },
        explore: {
            title: "Explore",
            icon: "fa-solid fa-compass",
            class: ""
        },
        shorts: {
            title: "Shorts",
            icon: "fa-solid fa-s",
            class: ""
        },
        subscription: {
            title: "Subscription",
            icon: "fa-solid fa-play",
            class: ""
        }
    }

    const sideBarElem2 = {
        library: {
            title: "Library",
            icon: "fa-solid fa-thumbs-up",
            class: ""
        },
        history: {
            title: "History",
            icon: "fa-solid fa-clock-rotate-left",
            class: ""
        },
        yourvideos: {
            title: "Your videos",
            icon: "fa-solid fa-circle-stop",
            class: ""
        },
        watchlater: {
            title: "Watch later",
            icon: "fa-solid fa-clock",
            class: ""
        }, 
        likedvideos: {
            title: "Liked videos",
            icon: "fa-solid fa-thumbs-up",
            class: ""
        }
    }

    const sideBarElem3 = {
        settings: {
            title: "Settings",
            icon: "fa-solid fa-gear",
            class: ""
        },
        report: {
            title: "Report History",
            icon: "fa-solid fa-flag",
            class: ""
        },
        Help: {
            title: "Help",
            icon: "fa-solid fa-circle-info",
            class: ""
        },
        feedback: {
            title: "Feedback",
            icon: "fa-solid fa-comment",
            class: ""
        },

    }

    const SideMenu1 = Object.keys(sideBarElem1).map(elem => <li className={ sideBarElem1[elem].class} key={sideBarElem1[elem].title}> <i className={sideBarElem1[elem].icon}></i> {sideBarElem1[elem].title} </li>);
    const SideMenu2 = Object.keys(sideBarElem2).map(elem => <li className={sideBarElem2[elem].class} key={sideBarElem2[elem].title}> <i className={sideBarElem2[elem].icon}></i> {sideBarElem2[elem].title} </li>);
    const SideMenu3 = Object.keys(sideBarElem3).map(elem => <li className={sideBarElem3[elem].class} key={sideBarElem3[elem].title}> <i className={sideBarElem3[elem].icon}></i> {sideBarElem3[elem].title} </li>);
    return (
        <>
            <div className="brand">
                <i className="fa-solid fa-bars"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <ul className="sideMenu">
                {SideMenu1}
            </ul>

            <hr />
            <br />
            
            <ul className="sideMenu">
                {SideMenu2}
            </ul>

            <hr />
            <br />

            <ul className="sideMenu">
                {SideMenu3}
            </ul>
        </>
    );
}

export default Sidebar;