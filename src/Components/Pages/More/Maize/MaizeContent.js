import { Row, Col, Toast, ToastHeader, ToastBody, Alert } from "reactstrap";
const MaizeContent = () => {
  return (
    <div>
      <Alert>
        <hr />
        <h4 className="alert-heading">Maize</h4>
        <p>
          Maize is considered to be one of the most important cereal grains
          globally. In India also it has emerged as the 3rd most important crop
          after rice and wheat. The significant importance of the crop lies in
          the fact that it not only accounts for usage as human food and animal
          feed but at the same time it is also widely used as an important raw
          material in food processing, poultry, dairy, meat and ethanol industry
          making it the fastest growing cash crop. Maize is being considered as
          the best alternative for crop diversification for traditional rice,
          wheat-based farming. States like Punjab, Haryana have initiated Crop
          diversification schemes and are promoting maize Secure Supply of Maize
          Sustainably at right quantity, right quality, and right prices. Thus,
          with increasing domestic demand, volatile pricing, opportunity-based
          exports, changing global dynamics and stress on natural resources it
          is becoming crucial to Secure Supply of Maize Sustainably at right
        </p>
        <hr />
        <h4 className="alert-heading">Health Benefits</h4>
        <p>
          Antioxidants neutralize the effects of harmful free radicals that
          cause diseases like cancer Thiamine is required for boosting memory,
          cognitive functions and nerve health The phosphorus helps to maintain
          normal growth, kidney function and bone health Prevents constipation
          Reduces stomach acidity
        </p>


        <Row md="6" sm="2" xs="1" className="justify-content-center">
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Rich in nutrients</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>High in antioxidants</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>May help stabilize blood sugar levels</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>May support weight loss.</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>May have anti-aging properties.</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>May promote heart health.</ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>
      </Alert>

      <div className="container" align="center">
        <h1 className="text-success">Nutrition Information</h1>
        <small>A whole grain which is rich in Vitamin C, Magnesium and Low in fat . Highly nutitious. Here is the nutritional values in per 100gm of corn.</small>
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
export default MaizeContent;
