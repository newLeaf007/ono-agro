import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
import MaizeImg from './MaizeImage/maizeImg.jpg';
const MaizeImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={MaizeImg}
            style={{
              height: 500,
            }}
            width="100%"
          />
          <CardImgOverlay algin="center">
            <CardTitle tag="h1" className="text-center">Maize</CardTitle>
            <CardText className="text-center">
                Leading Supplier of Export Quality Products
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>  
    )
}
export default MaizeImage;