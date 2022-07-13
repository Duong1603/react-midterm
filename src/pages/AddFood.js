import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";

const AddFood = ({ getFoods }) => {
  const [modal, setModal] = useState(false);
  const [food, setFood] = useState({
    file: null,
    name: "",
    detail: "",
    price: "",
    image: "",
  });

  const toggle = () => setModal(!modal);
  const alertshow = () => {
    alert("button clicked");
  };

  const onChangeModel = (event) => {
    setFood((previousState) => {
      return { ...previousState, name: event.target.value };
    });
    console.log(food);
  };

  const onChangeDesc = (event) => {
    setFood((previousState) => {
      return { ...previousState, detail: event.target.value };
    });
    console.log(food);
  };

  const onChangeProduced = (event) => {
    setFood((previousState) => {
      return { ...previousState, price: event.target.value };
    });
    console.log(food);
  };

  const onChangeImage = (event) => {
    setFood((previousState) => {
      return {
        ...previousState,
        file: URL.createObjectURL(event.target.files[0]),
        image: event.target.files[0].name,
      };
    });
    console.log(food);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const fileInput = document.querySelector("#fileupload");
    const formData = new FormData();
    formData.append("image", fileInput.files[0]);
    formData.append("deatil", food.detail);
    formData.append("name", food.name);
    formData.append("price", food.price);

    fetch("http://localhost:8000/api/food", { method: "post", body: formData })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toggle();
        onRedirect();
      });
  };

  const onRedirect = () => {
    setFood([]);
    getFoods();
  };
  return (
    <div>
      <Button className="float-right mb-4" color="primary" onClick={toggle}>
        Add Food
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <form
          onSubmit={onSubmitForm}
          encType="multipart/form-data"
          method="post"
        >
          <ModalHeader toggle={toggle}>Add new Food</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" name="name" onChange={onChangeModel} />
            </FormGroup>
            <FormGroup>
              <Label for="detail">Detail</Label>
              <Input id="detail" name="detail" onChange={onChangeDesc} />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="number"
                id="price"
                name="price"
                onChange={onChangeProduced}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                id="fileupload"
                type="file"
                name="image"
                onChange={onChangeImage}
              />
              <img
                className="img-thumbnail img-fluid"
                style={{ width: "500px", height: "400px" }}
                src={food.file}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              {" "}
              Add{" "}
            </Button>
            <Button color="secondary" onClick={toggle}>
              {" "}
              Cancel{" "}
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};
export default AddFood;
