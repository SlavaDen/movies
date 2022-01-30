import React from "react";
import Movie from "./Movie";
import { Row, Col } from "antd";

const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <Row gutter={[16, 16]}>
      {movies.map((movie) => (
        <Col span={6} vgutters={3} key={movie.imdbID}>
          <Movie {...movie} />
        </Col>
      ))}
    </Row>
  );
};

export default Movies;
