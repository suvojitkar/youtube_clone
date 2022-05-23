import './card.css';
const Card = ({ videoMeta }) => {
    return (
        <>
            <iframe loading="lazy" width="350" height="200" src={videoMeta.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="metadata">
                <img className="img-logo" src={videoMeta.logo_link} alt="logo" />
                <div className="title">
                    {videoMeta.title}
                    <br />
                    <div className="views">
                        <span>{videoMeta.production} &nbsp; &nbsp;</span> . &nbsp; &nbsp;
                        <span>{videoMeta.views}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;