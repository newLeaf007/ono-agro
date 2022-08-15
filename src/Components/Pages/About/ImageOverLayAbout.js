import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
const ImageOverLay = () => {
  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/270?grayscale"
          style={{
            height: 400,
          }}
          width="100%"
        />
        <CardImgOverlay algin="center">
          <CardTitle tag="h1" className="text-center">Organic Natural Original</CardTitle>
          <CardText className="text-center">
              Leading Supplier of Export Quality Products
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};
export default ImageOverLay;
