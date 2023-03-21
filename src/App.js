import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singers = [
  { name: "Dr. Mahfuz", job: "Singer" },
  { name: "Eva Rahman", job: "Singer2" },
  { name: "Agun", job: "Sopno" },
  { name: "Shuvro", job: "Pathor" },
];

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  const nayoks = [
    "Rubel",
    "BappaDa",
    "Kuber",
    "Joshim",
    "Salman Shah",
    "Riyaz",
    "Anowar",
  ];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>Name: {nayok}</li>
      ))}

      {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))}

      {singers.map((singer) => (
        <Person name={singer.name}></Person>
      ))}
      <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person>
      <h5>New Component. YAY</h5>
      <p id="totcompany">Rock mama React mama</p>
      <Friend movie="Singham" phone="01777"></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h3>Movie: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
