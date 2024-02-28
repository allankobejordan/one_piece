import React from 'react';
import { useState } from 'react';

const Table = ({ data }) => {
 
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