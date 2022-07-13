import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Detail = ({
  getFoods,
  toggleDetailModal,
  detailFoodData,
  detailmodal,
  setDetailFoodData,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={detailmodal} toggle={toggleDetailModal}>
        <form
          //   onSubmit={onSubmitEditForm}
          encType="multipart/form-data"
          method="put"
        >
          <ModalHeader toggle={toggleDetailModal}>Detail</ModalHeader>
          <ModalBody>
            <Table className="table table-hover">
              <thead>
                <tr>
                  <th>name</th>
                  <th>detail</th>
                  <th>price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    value={detailFoodData.name ? detailFoodData.name : ""}
                  ></td>
                  <td
                    value={detailFoodData.detail ? detailFoodData.detail : ""}
                  ></td>
                  <td
                    value={detailFoodData.price ? detailFoodData.price : ""}
                  ></td>
                  <td>
                    <img
                      id="preview-img"
                      className="img-thumbnail img-fluid"
                      src={
                        detailFoodData.images
                          ? `http://localhost:8000/image/${detailFoodData.image}`
                          : "#"
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};
export default Detail;
