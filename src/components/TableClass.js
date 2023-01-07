import React, { Component } from "react";
import RowTable from "./RowTable";

export default class TableClass extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: [],
    };
  }

  render() {
    return (
      <>
        <h1 className="h3 mb-2 text-gray-800">
          All the movies in the Database
        </h1>
        <div className="card shadow mb/4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width={"100%"}
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificacion</th>
                    <th>Premios</th>
                    <th>Duracion</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificacion</th>
                    <th>Premios</th>
                    <th>Duracion</th>
                  </tr>
                </tfoot>
                <tbody>
                  { this.state.loading ? (
                        <p>Cargando...</p>
                  ) : (
                    this.state.movies.map((movie) => (
                        <RowTable {...movie} key={movie.title} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }

  async componentDidMount() {
    try {
      let response = await fetch("http://localhost:3001/movies");
      let result = await response.json();
      
      this.setState({
        loading: false,
        movies: result.data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
