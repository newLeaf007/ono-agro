import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
import BlackImg from './imageBlackC/black.jpg';
const BlackImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={BlackImg}
            style={{
              height: 600,
            }}
            width="100%"
          />
          <CardImgOverlay algin="center">
            <CardTitle tag="h1" className="text-center">Black Cardomon</CardTitle>
            <CardText className="text-center">
                Leading Supplier of Export Quality Products
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>  
    )
}
export default BlackImage;