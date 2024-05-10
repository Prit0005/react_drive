import React, { useState } from 'react';

import users from './data';

function App() {
  const [search, setSearch] = useState("");

  const searchname = e => {
    setSearch(e.target.value);
  };

  const filteredData = users.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchname}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
