import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import { Row, Col, Input, Radio, Typography } from "antd";
const { Search } = Input;
const { Title } = Typography;

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
      search: "matrix",
      type: "all",
    };

    this.handleFetchMovies = this.handleFetchMovies.bind(this);
    this.handleSearchMovies = this.handleSearchMovies.bind(this);
    this.handleFilterMovies = this.handleFilterMovies.bind(this);
  }

  handleSearchMovies(event) {
    this.setState({ search: event });
    this.handleFetchMovies(event, this.state.type);
  }

  handleFilterMovies(event) {
    const type = event.target.value;
    this.setState({ type: type });
    this.handleFetchMovies(this.state.search, type);
  }

  handleFetchMovies(search = "matrix", type = "all") {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    }, 300);
  }

  componentDidMount() {
    this.handleFetchMovies();
  }

  render() {
    const { movies = [], loading, type } = this.state;

    return (
      <main>
        {loading ? (
          <Preloader />
        ) : (
          <Row gutter={[16, 16]}>
            <Col span={24} vgutters={3}>
              <Search
                placeholder="Search"
                defaultValue={this.state.search}
                onSearch={this.handleSearchMovies}
              />
            </Col>
            <Col span={24} vgutters={3}>
              <Radio.Group onChange={this.handleFilterMovies} value={type}>
                <Radio value="all">All</Radio>
                <Radio value="movie">Movies</Radio>
                <Radio value="series">Series</Radio>
              </Radio.Group>
            </Col>
            <Col span={24} vgutters={3}>
              {movies.length === 0 ? (
                <Title>Nothing found</Title>
              ) : (
                <Movies movies={movies} />
              )}
            </Col>
          </Row>
        )}
      </main>
    );
  }
}

export default Main;
