import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
const CardGroupHome = () => {
  return (
    <div>
    
    <CardGroup className="m-3">
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Authentication</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Best Qualitiy Serices
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
         
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Deals</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Best Price and Deal
          </CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
         
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Service</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Commitment and Time Addherance
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Manufacturing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            In-house Manufacturing Facility
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
         
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};
export default CardGroupHome;
