import { Toast, ToastHeader, ToastBody, Row, Col } from "reactstrap";
const Team = () => {
  return (
    
    <Row md="3" sm="2" xs="1" className="justify-content-center">
      <Col>
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
          <Toast>
            <ToastHeader className="bg-success text-white">
                <h6>Shivangi Jha</h6>
                <small>Founder of ONO Agro</small>
                </ToastHeader>
            <ToastBody>
            "Life is too short to worry about yourself. Make a change for the people around you. I believe ONO Agro is a change in Agriculture Services sector"
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col>
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
          <Toast>
            <ToastHeader className="bg-success text-white">
                <h6>Bhabesh Jha</h6>
                <small>Co-Founder</small>
            </ToastHeader>
            <ToastBody>
            "One life is enough to make a huge difference in society. ONO Agro has a vision recreate the Supply Chain"
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col>
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
          <Toast>
            <ToastHeader className="bg-success text-white">
                <h6>Ranjeet Kumar</h6>
                <small>Quality Manager</small>
            </ToastHeader>
            <ToastBody>
            "Great product, comes with great Quality, we make sure we give the best quality in the market"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          
            </ToastBody>
          </Toast>
        </div>
      </Col>
    </Row>
  );
};

export default Team;
