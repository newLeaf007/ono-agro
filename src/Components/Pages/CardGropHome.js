import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import bestOffer from  './imagesHome/bestoffer.png';
import delivery from './imagesHome/delivery.jpg';
import manufacturing from './imagesHome/manufacturing.png';
import qualityImage from './imagesHome/quality.jpeg';
const CardGroupHome = () => {
  return (
    <div>
    
    <CardGroup className="m-3">
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src={qualityImage}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Authentication</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Best Qualitiy Serices
          </CardSubtitle>
          
         
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src={bestOffer}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Deals</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Best Price and Deal
          </CardSubtitle>
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src={delivery}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Service</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Commitment and Time Addherance
          </CardSubtitle>
          
          
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src={manufacturing}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Manufacturing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            In-house Manufacturing Facility
          </CardSubtitle>
          
         
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};
export default CardGroupHome;
