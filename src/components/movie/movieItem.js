export default function MovieItem({link, thumb, title, text}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="pr-video__article">
            <div className="pr-video__article--img zoom-out">
                <img src={thumb} alt="" />
                <p className="pr-video__article--ttl">{title}</p>
            </div>
            <div className="pr-video__article--txt">
                {text}
            </div>
        </a>
    )
}
