import React from 'react';
import { useState } from 'react';

const Table = ({ data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentData = data.slice(firstIndex, lastIndex);
  return (
    <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Trabalho</th>
              <th>Recompensa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((char) => (
              <tr key={char.id}>
                <td>{char.id}</td>
                <td>{char.name}</td>
                <td>{char.job}</td>
                <td>{char.bounty}</td>
              </tr>
            ))}
          </tbody>
        </table>
    
    </>

    
  );
};

export default Table;