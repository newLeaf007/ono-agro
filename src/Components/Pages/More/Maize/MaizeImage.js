import {

    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from "reactstrap";
const MaizeImage=()=>{
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://www.mccormick.it/wp-content/uploads/2020/05/dati-aggiornati-sulla-produzione-di-mais-nel-mondo-853x480.jpg"
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