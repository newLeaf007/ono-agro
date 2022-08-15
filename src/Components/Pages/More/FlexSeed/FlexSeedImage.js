import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
const FlexSeedImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://assets.lybrate.com/q_auto:eco,f_auto,w_1200,h_720,c_fill,g_auto/imgs/product/health-wiki/bpages/Benefits-of-Flaxseed.jpg"
            style={{
              height: 500,
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