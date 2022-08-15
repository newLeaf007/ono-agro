import { Row, Col, Toast, ToastHeader, ToastBody, Alert } from "reactstrap";
const BlackContent = () => {
  return (
    <div>
      <Alert>
        <hr />
        <h4 className="alert-heading">About Black Cardemom</h4>
        <p>
          Black cardamom is a popular Indian spice, called badi elaichi or kali
          elaichi, that is used in many of the cuisine's signature dishes. It is
          in the form of seed pods, which are dark brown to black in color and
          take on a smokey flavor due to the way they are dried. Cardamom is
          used for its bold and assertive taste and is the world's third-most
          expensive spice, surpassed in price per weight only by vanilla and
          saffron. Both the pods and the seeds are used in cooking and available
          year-round.
        </p>
        <p>
          Black Cardamom is a nutritional spice used in many households. It
          shows antioxidant and antibacterial properties which aid overall
          health. It is rich in copper, iron and fundamental nutrients like
          riboflavin, nutrient C, and niacin. Along with these, it also contains
          manganese and zinc, both important for human health..
        </p>
        <hr />
        <Alert color="light">
            <h3>Sizes: Small, Medium, Large, Mix</h3>
            <h4>As per buyers requirement</h4>
        </Alert>
        <hr/>
        <h4 className="alert-heading">Get Health Benefits with Flavour</h4>
       

        
        <Row md="5" sm="2" xs="1" className="justify-content-center">
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Oral care</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Cardiovascular health</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Good for your skin</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Healthy hair</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>For Gastrointestinal Health</ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>
      </Alert>

      <div className="container" align="center">
        <h1 className="text-success">Nutrition Information</h1>
        <small>
          A whole grain which is rich in Vitamin C, Magnesium and Low in fat .
          Highly nutitious. Here is the nutritional values in per 100gm of corn.
        </small>
      </div>
      <Row md="4" sm="2" xs="1" className="justify-content-center">
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Protein</h6>
                <small>3.27g</small>
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Fat</h6>
                <small>1.35g</small>
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Carbohydrates</h6>
                <small>18.7g</small>
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Energy</h6>
                <small>86 Kcal g</small>
              </ToastHeader>
            </Toast>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default BlackContent;
