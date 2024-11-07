import { useState } from "react";
import React from "react";
import Button from './components/Button.js'
import User from './components/User.js'
import Layout from './components/Layout.js';
import './App.css';

const App = () => {
  const styles = {
    background: "#D3D3D3",
    height: "60px",
    borderRadius: "5px",
    marginTop: "2px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
  }

  const [users, setUsers] = useState([
    { id: 1, age: "learn react", name: " React" },
  ]);
  const [doneItems, setdoneItems] = useState([     
  ]);
  const [name, setName] = useState(''); // <- State to use for user input
  const [age, setAge] = useState('');

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };

  
  const moveToDoneHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    const doneItem = users.find((user) => user.id === id);
    setUsers(newUserList);
    setdoneItems([...doneItems, doneItem]);
  };

  const deleteUserHandler = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const removeDoneItemHandler = (id) => {
    const newDoneList = doneItems.filter((item) => item.id !== id);
    setdoneItems(newDoneList);
  };
  return (
    <Layout>
      <div>
        <div style={styles}>
          Title: &nbsp;
          <input value={name}
            onChange={(e) => setName(e.target.value)}
          />
          &nbsp;&nbsp; &nbsp;&nbsp;

          Content:&nbsp;
          <input value={age}
            onChange={(e) => setAge(e.target.value)}
          />
            &nbsp;&nbsp;
          <Button onClick={addUserHandler}>Add</Button>
          
        </div>
        <h3>Working..🔥</h3>
        <div className="app-style">
          {users.map((user) => {
            return <User user={user} key={user.id} handleDone={moveToDoneHandler} handleDelete={deleteUserHandler} />;
          })}
        </div>
        <hr></hr>
        <h3>Done..!🎉</h3>
        <div className="app-style">
        {doneItems.map((doneItem) => {
            return <User user={doneItem} key={doneItem.id} handleDone={removeDoneItemHandler} handleDelete={removeDoneItemHandler} />;
          })}
        </div>
        
      </div>
    </Layout>
  );
}
export default App;