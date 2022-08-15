import { Row, Col, Toast, ToastHeader, ToastBody, Alert } from "reactstrap";
const MakhanaContent = () => {
  return (
    <div>
      <Alert>
        <hr />
        <h4 className="alert-heading">Makhana :(Fox-Nut)?</h4>
        <p>
          Makhana began it's journey from the region of Madhubani in Bihar and
          has made it's way into the global market. The Indian 'super-food'
          which has immese health benitfs and is also used in the Ayuveda for
          medicinal properties is one of the important traditional food of North
          Bihar. Apart from it's use in the local cuisine it is also consumed
          during Indian festivals. A background of the plant is important,
          especially it's anatomy, because typically it is confused with the
          lotus plant. Because the plant is similar to the lotus anatomically,
          hence it has acquired the name as Padma Bija ( lotus seed).
        </p>
        <hr />
        <h4 className="alert-heading">Interesting Nut Benefits</h4>
        <p>
          ONO Agro focuses on supplying completely Organic, Natural and Original
          Products to our clients. ONOAgro team is on a mission to Reimagine
          Value Agro Chain of India. We aim to provide the best agriculture
          service in this sector through our consistent goal:
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
                <h1 className="text-success">Targeted Market Sector</h1>
     </div>
      <Row md="6" sm="2" xs="1" className="justify-content-center">
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Vegan Industry</h6>
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Health Sector</h6>
                
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Traditional Market</h6>
                
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Culinary Market</h6>
                
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Medicine Sector</h6>
                
              </ToastHeader>
            </Toast>
          </div>
        </Col>
        <Col>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader className="bg-success text-white">
                <h6>Gluten free Market</h6>
                
              </ToastHeader>
            </Toast>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default MakhanaContent;
