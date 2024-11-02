import { useState } from "react";
import "./App.css";
import it from "./assets/photo_2023-11-09_17-13-25.jpg";

function App() {
  let [modal, setModal] = useState(false);
  let [objValue, setObjValue] = useState({});

  let contacts = [
    {
      name: "Shoxrux",
      surname: "Axmadjonov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 1,
    },

    {
      name: "Laziz",
      surname: "Erkinov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 2,
    },

    {
      name: "Aziz",
      surname: "Marufov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 3,
    },

    {
      name: "Amir",
      surname: "Nematov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 4,
    },

    {
      name: "Erkin",
      surname: "Axmadov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 5,
    },

    {
      name: "Obid",
      surname: "Obidov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 6,
    },

    {
      name: "Odil",
      surname: "Odilov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 7,
    },

    {
      name: "Muhammad",
      surname: "Lazizov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 8,
    },

    {
      name: "Damir",
      surname: "Azizov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 9,
    },

    {
      name: "Nemat",
      surname: "Ergashev",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 10,
    },

    {
      name: "Shaxzod",
      surname: "Muradov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 11,
    },

    {
      name: "Maruf",
      surname: "Amonov",
      img: it,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, vel.",
      button: "Ko'rsatish",
      id: 12,
    },
  ];

  function modalFunc(item) {
    setModal(!modal);
    setObjValue(item) 
  }

  return (
    <div className="App">
      <h1>Contacts</h1>
      <div className="header">
        <div className={`modal ${modal ? "modal_show" : ""}`}>
          <img src={objValue.img} alt="" />
          <h3>Name: {objValue.name}</h3>
          <h3>Surname: {objValue.surname}</h3>
          <p>Desc: {objValue.desc}</p>
        </div>
        <button
          onClick={() => {
            setModal(false);
          }}
          className={`modal_back ${modal ? "modal_show" : ""}`}
        ></button>
        {contacts.map((item) => {
        
          return (
            <div className="contacts" key={item.id}>
              <img src={item.img} alt="" />
              <h3>Name: {item.name}</h3>
              <h3>Surname: {item.surname}</h3>
              <p>desc: {item.desc}</p>
              <button className="button" onClick={()=> modalFunc(item)}>
                {item.button}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
