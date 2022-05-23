import Card from '../Card/card';
import './list.css';

const videoList = [
    {
        link: "https://www.youtube.com/embed/2jxSQCEbfdA",
        logo_link: "https://yt3.ggpht.com/ytc/AKedOLS7paMLx6esYNiBNFjXDdhSmatn1k2Xv-qNsZCH=s68-c-k-c0x00ffffff-no-rj",
        title: "IAS dhristi academy",
        production: "Dhristi",
        views: "28k views . 1hr"
    },
    {
        link: "https://www.youtube.com/embed/2BLLsDb1HdY",
        logo_link: "https://yt3.ggpht.com/ytc/AKedOLSNpk4fYTYdb_uw5ucp3IPOcjNz4o3QQszVCkoPgg=s176-c-k-c0x00ffffff-no-rj",
        title: "Why is TVF so good?",
        production: "Tried & refused",
        views: "21k views . 5hr"
    }
];


const List = () => {
    return (
        <>
            <div className="container">
                {
                    videoList.map(element => <div className="videos">
                                                    <Card videoMeta={element} />
                                                </div>)
                }
            </div>
        </>
    )
}

export default List;