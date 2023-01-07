import React from "react";
import RowTable from './RowTable';

const Table = () => {
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
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

              <RowTable />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
