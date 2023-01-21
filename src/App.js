import "./App.css";
import { useEffect, useState } from "react";
import SingleDog from "./components/SingleDog";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function App() {
  const [dogs, setDogs] = useState(""); // the dog image from API
  const [rating, setRating] = useState(""); // the string for the rating from input
  const [rated, setRated] = useState([]); // dogs who have been rated

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogs(data["message"]));
  }, [rated]);

  // const isIncreasing = () => {
  //   if (rated.length === 1) return true;

  //   for (let i = 0; i < rated.length; i++) {
  //     let nextElement = i + 1;
  //     if (rated[i].rate > rated[nextElement].rate) return false;
  //   }

  //   return true;
  // };

  // const isDeacreasing = () => {
  //   if (rated.length === 1) return true;

  //   for (let i = 0; i < rated.length; i++) {
  //     let nextElement = i + 1;
  //     if (rated[i].rate < rated[nextElement].rate) return false;
  //   }

  //   return true;
  // };

  const sortMyRatingsByLowest = () => {
    // if (!isIncreasing()) {
    setRated(
      []
        .concat(...rated)
        .sort((a, b) =>
          parseInt(a.rate) > parseInt(b.rate)
            ? 1
            : parseInt(b.rate) > parseInt(a.rate)
            ? -1
            : 0
        )
    );
    // }
  };
  const sortMyRatingsByHighest = () => {
    // if (!isDeacreasing()) {
    setRated(
      []
        .concat(...rated)
        .sort((a, b) =>
          parseInt(a.rate) > parseInt(b.rate)
            ? -1
            : parseInt(b.rate) > parseInt(a.rate)
            ? 1
            : 0
        )
    );
    // }
  };

  return (
    <>
      <Row className="text-center mx-auto justify-content-center">
        <SingleDog
          dogs={dogs}
          rating={rating}
          setRating={setRating}
          rated={rated}
          setRated={setRated}
        />
      </Row>
      <div className="my-4 text-center">
        <h3>my ratings</h3>
        <Button className="mx-2" onClick={() => sortMyRatingsByLowest()}>
          Sort By Lowest!
        </Button>
        <Button className="mx-2" onClick={() => sortMyRatingsByHighest()}>
          Sort By Highest !
        </Button>
      </div>
      <Row className="mx-auto text-center">
        {rated.map((rate, index) => {
          return (
            <Card style={{ width: "14rem" }} key={index}>
              <Card.Img variant="top" src={rate.url} />
              <Card.Body>
                <Card.Text>{rate.rate} / 5</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </>
  );
}

export default App;
