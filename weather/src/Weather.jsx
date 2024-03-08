import { useState } from 'react';

function App() {
  let [dataset, setdata] = useState([]);
  
  let clickfunction = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setdata(data);
      });
  };

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');

  let submit = (e) => {
    e.preventDefault(); // Prevent the default form submit action

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: title, id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" placeholder='id' onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">submit</button>
      </form>

      <button onClick={clickfunction}>Click here</button>
      {dataset.length > 0 && (
        <div>
          {dataset.map((mappeddata) => (
            <div key={mappeddata.id}>
              <p>id={mappeddata.id}</p>
              <p>title={mappeddata.title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default App;
