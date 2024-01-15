import { useState } from 'react'
import './App.css'

function App() {
  const [ username, setUserName] = useState("");
  const [ bio, setBio] = useState("");
  const [ interest, setInterest ] = useState("");
  const [ socialText, setSocialText ] = useState("");
  const [ socialLink, setSocialLink ] = useState("");

  function clickHandler(){
    return(
      <>
      <Card username={username}></Card>
      </>
    )
  }

  function nameHandler(event){
    setUserName(event.target.value);
  }

  return (
    <div style={{ marginBottom: "350px", display: "block" }}>
      <form>
        <p>Personal Info</p>
        <input
          type="text"
          placeholder="what is ur name?"
          value={username}
          onChange={nameHandler}
        ></input>
        <br></br>
        <input type="text" placeholder="add a bio"></input>
        <p>What are your interests?</p>
        <input type="text" placeholder="interest1"></input>
        <input type="text" placeholder="interests2"></input>
        <input type="text" placeholder="interests3"></input>
        <p>Social Media Handles</p>
        <div id="handle-1">
          <input type="text" placeholder="Platform Name"></input>
          <input type="url" placeholder="Enter link"></input>
        </div>
        <div id="handle-2">
          <input type="text" placeholder="Platform Name"></input>
          <input type="url" placeholder="Enter link"></input>
        </div>
        <button style={{ marginTop: "20px" }} onClick={clickHandler}>
          Done !
        </button>
      </form>
    </div>
  );
}

function Card({username}){
  return (
    <div>
      <Name username={username}></Name>
      <Description></Description>
      <h4>Interest</h4>
      <Interest></Interest>
      <Interest></Interest>
      <Interest></Interest>
      <div>
        <SocialHandle></SocialHandle>
        <SocialHandle></SocialHandle>
      </div>
    </div>
  );
}

function Name({username}){
  return(
    <div>
    {username}
    </div>
  )
}

function Description(desc){
  return(
    <div>
      {desc}
    </div>
  )
}

function Interest(interest){
  return (
    <div>
      <li>{interest}</li>
    </div>
  );
}

function SocialHandle(platformName, link){
  return(
    <div>
    <button onClick={`window.location.href=${link}`}>{platformName}</button>
    </div>
  )
}
export default App
