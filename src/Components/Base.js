import CusHeader from "./CusHeader";
import CustomFooter from "./CustomFooter";
import CustomNavbar from "./CustomNavbar";

const Base = ({title="Welcome to our website",children}) =>{
    return (
        <div className="container-fluid m-0 p-0">
            <CusHeader/>
            <CustomNavbar/>
            {children}
            <CustomFooter/>
        </div>
    );
};

export default Base; 