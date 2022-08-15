import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
import FlexImg from './imageFlex/flexImage.jpeg';
const FlexSeedImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={FlexImg}
            style={{
              height: 600,
            }}
            width="100%"
          />
          <CardImgOverlay algin="center">
            <CardTitle tag="h1" className="text-center">ONO Flex Seed</CardTitle>
            <CardText className="text-center">
            Prodcution and Supplier of Export Quality Products from Our Farm
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>  
    )
}
export default FlexSeedImage;