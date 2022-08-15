import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
const BlackImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://static.toiimg.com/thumb/64001569.cms?width=1200&height=900"
            style={{
              height: 500,
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