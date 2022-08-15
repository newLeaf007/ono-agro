import Base from "../../Base";
import ImageOverLayA from "./ImageOverLayAbout";
import SectionAbout from "./SectionAbout";

const AboutUs=()=>{
    return(
        <Base>
        <div className="container-fluid m-0 p-0">
                <ImageOverLayA></ImageOverLayA>
                <SectionAbout></SectionAbout>
        </div>
        </Base>
    );
};
export default AboutUs;