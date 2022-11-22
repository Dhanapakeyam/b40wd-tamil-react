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
  },
  {
    name: "Yash",
    pic: "https://i.pinimg.com/736x/5a/c4/d1/5ac4d1d1f59c170672ecd81d57b48f22--best-flowers-nice-flower.jpg"
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
  let [like, setLike] = useState(0);
  return (
    <section>
      <img className='user-profile-pic' src={pic} alt={name} />
      <h1>Hello,<span className='user-name'>{name}</span>💐💐</h1>
      <button onClick={() => setLike(like + 1)}>👍<sup>{like}</sup></button>
    </section>
  )
}
export default App;
