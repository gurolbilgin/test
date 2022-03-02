import React, { useState } from "react";

const Table = ({ inputs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  // filters entries accordingly to search term
  const filteredResults = inputs.filter(
    (input) =>
      input.firstname.toUpperCase().includes(searchTerm) ||
      input.lastname.toUpperCase().includes(searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => searchHandler(e)}
        placeholder="search name lastname..."
      />

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((input) => (
            <tr key={inputs.indexOf(input)}>
              <td>{input.firstname} </td>
              <td>{input.lastname} </td>
              <td>{input.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
