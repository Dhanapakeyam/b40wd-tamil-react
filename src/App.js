import logo from './logo.svg';
import './App.css';

function App() {
  //const names = ["Dhana", "Appas", "Appna", "Sanmika", "Yash"];
  let arr = [{
    name: "Dhana",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GErzoJKxmnETJADHlYFlBw_5_UiIA6_UmA&usqp=CAU"
  },
  {
    name: "Appas",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumCwgoMosR0CcL89PGlGfJHH5OaiCtvZGJA&usqp=CAU"
  },
  {
    name: "Appna",
    pic: "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000"
  },
  {
    name: "Sanmika",
    pic: "https://m.media-amazon.com/images/I/81K2hJBAduL.png"
  }]
  return (
    // <div className="App">
    //   <User name="Dhana" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GErzoJKxmnETJADHlYFlBw_5_UiIA6_UmA&usqp=CAU" />
    //   <User name="Appas" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumCwgoMosR0CcL89PGlGfJHH5OaiCtvZGJA&usqp=CAU" />
    // </div>
    <div className='App'>
      {arr.map((nm) => (<User name={nm.name} pic={nm.pic} />))}
    </div>
  );
}

function User({ name, pic }) {
  //const { name, pic } = props;
  return (
    <section>
      <img className='user-profile-pic' src={pic} alt={name} />
      <h1>Hello,<span className='user-name'>{name}</span>💐💐</h1>
    </section>
  )
}
export default App;
