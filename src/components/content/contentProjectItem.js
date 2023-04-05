export default function ContentProjectItem({ item = {image, title, text, link} }) {
    return (
        <div className="c-project__article">
            <div className="c-project__article--img scale-down">
                <img src={item.image} alt="" />
            </div>
            <div className="c-project__article--main scale-down">
                <div className="c-project__article--inner">
                    <h5 className="c-project__article--ttl">{item.title}</h5>
                    <p className="c-project__article--txt">
                        {item.text}
                    </p>
                    <div className="c-project__article--link">
                        <a href={item.link}>webサイト</a>
                    </div>
                </div>
            </div>
        </div>
    )
}