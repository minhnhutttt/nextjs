export default function Content({ type, children }) {
    return (
        <div className={`c-project ${type}`}>
            <span className="c-content__bg">
                <img className="left-to-right" src="/images/bg-project.png" alt="project" />
            </span>
            <div className="c-project__wrap">
                <h4 className="c-project__ttl">プロジェクト</h4>
                <div className="c-project__flex">
                    { children }
                </div>
            </div>
        </div>
    )
}