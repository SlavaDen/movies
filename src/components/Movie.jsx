import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const Movie = (props) => {
  const {
    Title: title = "",
    Year: year = "",
    imdbID: id = "",
    Type: type = "",
    Poster: poster = "",
  } = props;

  return (
    <Card
      id={id}
      cover={
        <img
          style={{ height: "650px" }}
          src={
            poster ? poster : `https://via.placeholder.com/468x60?text=${title}`
          }
        />
      }
      actions={[]}
    >
      <Meta title={title} description={`${year} ${type}`} />
    </Card>
  );
};

export default Movie;
