import logo from './logo.svg';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import SavedUsers from './ShowUsers'

function App() {

  const data = [
    {
      img_url: 'hello',
      name: 'Sample Name',
      username: 'Sample username',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github_url: '',
      portfolio_url: '',
      something: 'not want'
    },
  ]

  const handleUserSave = (event) => {
    const clickedUser = data[event.target.id]
    
    const user = {
      avatar_url: clickedUser.img_url,
      username: clickedUser.username,
      name: clickedUser.name,
      bio: clickedUser.bio,
      github_url: clickedUser.github_url,
      portfolio_url: clickedUser.portfolio_url,
    }

    axios.post("/api/users", user)
    .then(user => {
      console.log(user)
    })
  }

  return (
    <div className="jumbotron">
      <div className="row" style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
        {
          data.map((data, index) => {
            return (
              <div className="col-3" style={{border: '1px solid black',  width: '10px', marginBottom: '10px', marginRight: '1px'}}>
                <img src={data.img}/>
                <h1>{data.name}</h1>
                <p>{data.username}</p>
                <p>{data.bio}</p>
                <p>{data.github_url}</p>
                <p>{data.portfolio_url}</p>
                <button id={index} onClick={handleUserSave} style={{position: 'absolute', top: 0, right: 0,border: '1px solid brown'}}>Save User</button>
              </div>
            )
          })
        }
      </div>

      <div>
        <h1>Saved users</h1>
        <SavedUsers />
      </div>
    </div>
  );
}

export default App;
