import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
import MakhanaImg from './MakhanaImg/makhanImag.jpg';
const ImageMakhana = () => {
  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src={MakhanaImg}
          style={{
            height: 600,
          }}
          width="100%"
        />
        <CardImgOverlay algin="center">
          <CardTitle tag="h1" className="text-center">Makhana</CardTitle>
          <CardText className="text-center">
              Leading Supplier of Export Quality Products
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};
export default ImageMakhana;
