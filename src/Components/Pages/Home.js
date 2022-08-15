import CardGroupHome from "./CardGropHome";
import Slider from "./Slider";
import Team from "./Team";
import VisionHome from "./VisionHome";
import Base from "../Base";


const Home=()=>{

    return(
        <Base>
        <div className="container-fluid m-0 p-0">
            <Slider/>
            <div className="container" align="center">
                <h1 className="text-success">Our Agricultural Services</h1>
            </div>
            <CardGroupHome/>
            <VisionHome/>
            <Team/>
        </div>
        </Base>
    );
};
export default Home;