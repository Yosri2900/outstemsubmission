import React from "react";
import { data } from "../data/DogData";

const MultipleDogs = (props) => {
  const { dogs, rating, setRating, rated, setRated } = props;

  const handleForm = (e) => {
    e.preventDefault();
    const ratedDog = { url: dogs, rate: rating };
    setRated((prev) => {
      return [ratedDog, ...prev];
    });

    setRating("");
  };
  return (
    <>
      <div className="column-multiple">
        <div className="card">
          {dogs && (
            <img
              src={dogs}
              width="300"
              height="300"
              alt={"This is a dog"}
              style={{ borderRadius: "10%" }}
            ></img>
          )}
          <form onSubmit={handleForm}>
            <input
              type="text"
              onChange={(e) => setRating(e.target.value)}
              required
              value={rating}
              placeholder="Value between 1 and 5"
              pattern="^[0-9]*$"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="column-multiple">
        <div className="card">
          {dogs && (
            <img
              src={dogs}
              width="300"
              height="300"
              alt={"This is a dog"}
              style={{ borderRadius: "10%" }}
            ></img>
          )}
          <form onSubmit={handleForm}>
            <input
              type="text"
              onChange={(e) => setRating(e.target.value)}
              required
              value={rating}
              placeholder="Value between 1 and 5"
              pattern="^[0-9]*$"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="column-multiple">
        <div className="card">
          {dogs && (
            <img
              src={dogs}
              width="300"
              height="300"
              alt={"This is a dog"}
              style={{ borderRadius: "10%" }}
            ></img>
          )}
          <form onSubmit={handleForm}>
            <input
              type="text"
              onChange={(e) => setRating(e.target.value)}
              required
              value={rating}
              placeholder="Value between 1 and 5"
              pattern="^[0-9]*$"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="column-multiple">
        <div className="card">
          {dogs && (
            <img
              src={dogs}
              width="300"
              height="300"
              alt={"This is a dog"}
              style={{ borderRadius: "10%" }}
            ></img>
          )}
          <form onSubmit={handleForm}>
            <input
              type="text"
              onChange={(e) => setRating(e.target.value)}
              required
              value={rating}
              placeholder="Value between 1 and 5"
              pattern="^[0-9]*$"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MultipleDogs;
