export default function Content({ image, title, text, type, isReverse }) {
    return (
        <div className={`c-content ${type}`}>
            {!isReverse ? 
                <span className="c-content__bg">
                    <img className="left-to-right" src="/images/bg-sdgs.png" alt="SDGs" />
                </span>
                : 
                <span className="c-content__bg">
                    <img className="left-to-right" src="/images/bg-education.png" alt="Education" />
                </span>
            }
            <div className={`c-content__wrap ${isReverse && "is-reverse" }`}>
                <div className="c-content__img scale-down">
                    <img src={image} alt={title} />
                </div>
                <div className="c-content__main scale-down">
                    <h5 className="c-content__ttl">{title}</h5>
                    <p className="c-content__txt">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}
