import MainTitle from "./MainTitle"
import TripForm from "./TripForm";
import TripEmissionsTotal from "./TripEmissionsTotal";

const Home = ({ modes, employees }) => {

    const title = "CO2 Calculator"
    const intro = "Calculate your carbon footprint"

    return (
        <>
            <MainTitle title={title} intro={intro} />
            <div className="flex-box">
                <div className="calc-form">
                    <TripForm modes={modes} employees={employees}/>
                    {/* <Routes> */}
                    {/* <Route path="/" element={<TripForm modes={modes} />} /> */}
                    {/* <Route path="/triptable" element={<TripTable mode={mode} />} /> */}
                    {/* </Routes> */}
                </div>
                <TripEmissionsTotal />
            </div>
        </>
    );
}

export default Home;