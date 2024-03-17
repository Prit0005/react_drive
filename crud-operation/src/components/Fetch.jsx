import React, { useState } from 'react'
import "./fetch.css"
import axios from 'axios'

function Fetch() {
    let [showdata, setshowdata] = useState([]);
    let [updatedata, setupdatedata] = useState({
        update: null,
        name: '',
        surname: '',
        role: ''
    });
    let [adddata, setadddata] = useState({
        name: '',
        surname: '',
        role: ''
    })
    let [showform, setshowform] = useState(false)


    let fetchdata = () => {
        axios("http://localhost:8000/data")
            .then(response => setshowdata(response.data))
            .catch(error => console.error("There was an error!", error));
    }
    if (showdata.length == 0) {
        fetchdata();
    }
    let delet = (id) => {
        axios.delete(`http://localhost:8000/data/${id}`)
            .then(() => { fetchdata(); })
            .catch(error => console.error("There was an error!", error));
    }

    let updat = (id) => {
        axios.put(`http://localhost:8000/data/${id}`, {
            name: updatedata.name,
            surname: updatedata.surname,
            role: updatedata.role
        })
            .then(() => {
                setupdatedata({ isUpdating: null, name: '', surname: '', role: '' });
                fetchdata();
            })
            .catch(error => console.error("There was an error!", error));
    }
    const startUpdate = (e) => {
        setupdatedata({ update: e.id, name: e.name, surname: e.surname, role: e.role });
    }

    let add = () => {
        axios.post("http://localhost:8000/data", adddata)
            .then(() => {
                setadddata({
                    name: '',
                    surname: '',
                    role: ''
                });
                setshowform(false);
                fetchdata();
            })
            .catch(error => console.error("There was an error!", error));
    }

    return (
        <>
            <section>
                <div className="box">
                    {showdata.map((e, id) => {
                        return (
                            <div className='inner-box' key={id}>
                                {updatedata.update === e.id ? (
                                    <div>
                                        <input type="text" placeholder='enter your name' value={updatedata.name} onChange={(e) => setupdatedata({ ...updatedata, name: e.target.value })} />
                                        <input type="text" placeholder='enter your surname' value={updatedata.surname} onChange={(e) => setupdatedata({ ...updatedata, surname: e.target.value })} />
                                        <input type="text" placeholder='role' value={updatedata.role} onChange={(e) => setupdatedata({ ...updatedata, role: e.target.value })} />

                                        <button onClick={() => updat(e.id)}>UPDATE</button>
                                    </div>) :
                                    <div>
                                        <p>NAME:{e.name}</p>
                                        <p>SURNAME:{e.surname}</p>
                                        <p>ROLE:{e.role}</p>
                                        <button onClick={() => startUpdate(e)}>Edit</button>
                                        <button onClick={() => delet(e.id)}>DELETE</button>
                                    </div>}
                            </div>
                        );
                    })}
                </div>
                <div>
                    {showform &&
                        <div>
                            <input type="text" value={adddata.name} placeholder='enter your name' name="" id="" onChange={(e) => setadddata({ ...adddata, name: e.target.value })} />
                            <input type="text" value={adddata.surname} placeholder='enter your surname' name="" id="" onChange={(e) => setadddata({ ...adddata, surname: e.target.value })} />
                            <input type="text" value={adddata.role} placeholder='enter your role' name="" id="" onChange={(e) => setadddata({ ...adddata, role: e.target.value })} />
                            <button onClick={add}>submit</button>
                        </div>}

                </div>

                <div className='btn'>
                    <button onClick={() => { setshowform(!showform) }}>ADD</button>
                </div>
            </section>
        </>
    );
}
export default Fetch;
