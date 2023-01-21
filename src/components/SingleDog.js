import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SingleDog = (props) => {
  const { dogs, rating, setRating, rated, setRated } = props;

  const handleForm = (e) => {
    e.preventDefault();
    const ratedDog = { url: dogs, rate: rating };
    setRated((prev) => {
      // const findProductInCart = prev.find((item) => item.url === rated.url);
      // if (findProductInCart) {
      //   return prev.map((item) =>
      //     item.url === rated.url ? { ...item } : item
      //   );
      // }
      return [ratedDog, ...prev];
    });
    setRating("");
  };

  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img
        variant="top"
        src={dogs}
        height="300"
        width="300"
        className="rounded"
      />
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rate:</Form.Label>
          <Form.Control
            type="input"
            placeholder="Value between 1 and 5"
            pattern="^[0-9]*$"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default SingleDog;
