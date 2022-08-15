import { Row, Col, Toast, ToastBody, Alert } from "reactstrap";
const FlexContent = () => {
  return (
    <div>
      <Alert>
        <hr />
        <h4 className="alert-heading">Flax Seed</h4>
        <p>
          Flaxseed is a plant-based food that provides healthful fat,
          antioxidants, and fiber. Some people call it a “functional food,”
          which means that a person can eat it to boost their health Flaxseed is
          a good source of many nutrients, including protein, fiber, omega-3
          fatty acids, thiamine, and copper. Flaxseed contains nutrients called
          lignans that may help decrease cancer growth. Some studies link this
          food to a lower risk of several types of cancer, but more research is
          needed.
        </p>
        <p>
          Flax seed is our special product , the health benefits and the
          nutrient this crop carries with itself is commendable. We work on this
          product closely with the farmers and get the best ones . So that we
          provide you the best qualtity and you can make use of it in your
          everyday life
        </p>
        <hr />
        <h4 className="alert-heading">Make Me Healthy Seeds</h4>
        <p>
        Both flaxseed and flaxseed oil are easy to use and can be added to a variety of recipes. Here are a few simple ways to increase your intake: -Add flaxseed powder to water or sprinkle it into your smoothies. -Drizzle flaxseed oil on fresh salads in place of salad dressing. -Sprinkle ground flaxseed over hot or cold cereal for extra fiber and flavor. -Mix flaxseed into your favorite yogurt. -Give baked goods a healthy twist by mixing flaxseed into cookies, muffins, or breads. -Combine flaxseed with a bit of water for a simple egg substitute. -Incorporate flaxseed into meat or veggie patties next time you fire up the grill.
        </p>

        <Row md="5" sm="2" xs="1" className="justify-content-center">
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Great Source of Omega-3</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Flaxseed contains nutrients called lignans</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Rich in fiber</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Lowers Blood Pressure</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <div className="p-2 my-2 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastBody>Controls Bleeding During Mensturation</ToastBody>
              </Toast>
            </div>
          </Col>
          
        </Row>
      </Alert>

     
    </div>
  );
};
export default FlexContent;
