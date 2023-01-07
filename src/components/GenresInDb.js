import React from "react";
import Genre from "./Genre";

const GenresInDb = () => {

  let genres = [
    {name: 'Accion'},
    {name: 'Animacion'},
    {name: 'Aventura'},
    {name: 'Ciencia Ficcion'},
    {name: 'Comedia'},
    {name: 'Documental'},
    {name: 'Drama'},
    {name: 'Fantasia'},
    {name: 'Infantiles'},
    {name: 'Musical'}

  ]
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          {

            genres.map(genre => (
            <Genre genre={genre.name} key={genre.name}/> 
            ))

          }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
