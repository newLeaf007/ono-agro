import { Table, Alert } from "reactstrap";
const MakhanTable = () => {
  return (
    <div className="container-fluid">
      <Alert color="warning">
        Makhana is not a simple crop to cultivate and special skills are
        required for farming, harvesting and processing.
      </Alert>
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Suta</th>
            <th>8kg Bori</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>4+ Suta</td>
            <td>100%</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>5+Suta</td>
            <td>100%</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>6+Suta</td>
            <td>100%</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>4+,5+</td>
            <td>50%</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>4+,5+</td>
            <td>50%</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>4+,5+</td>
            <td>100%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MakhanTable;
