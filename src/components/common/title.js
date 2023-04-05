export default function Title({title, text, type}) {
    return (
        <>
            <div className={`c-title ${type}`}>
                <p>{text}</p>
                <h2>{title}</h2>
            </div>
        </>
    )
}
