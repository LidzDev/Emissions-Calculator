import "./static/MainTitle.css";

const MainTitle = ({title, intro}) => {

    return (
        <section id="maintitle">
            <h1 className="CO2-calc-title">{title}</h1>
            <p>{intro}</p>
        </section>
    )

}

export default MainTitle