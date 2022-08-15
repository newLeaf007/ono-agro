import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
const WheatImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://cdn.pixabay.com/photo/2018/06/29/22/45/wheat-3506758__480.jpg"
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