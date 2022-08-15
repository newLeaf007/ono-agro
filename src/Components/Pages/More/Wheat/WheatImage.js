import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
import WheatImg from './WheatImg/wheatI.jpg';
const WheatImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={WheatImg}
            style={{
              height: 500,
            }}
            width="100%"
          />
          <CardImgOverlay algin="center">
            <CardTitle tag="h1" className="text-center">ONO Wheat</CardTitle>
            <CardText className="text-center">
                <h3>Leading Supplier of Export Quality Products</h3>
                <small>Contact us at: 8420879449 / 8789542391</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>  
    )
}
export default WheatImage;