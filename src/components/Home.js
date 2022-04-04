import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
  return (
    <section className='Home'>
      <h2 className='Card Title'>Choose a map to start!</h2>

      <div className='MapGrid'>
        <Link to='' className='Card MapIcon'>
          <img src={require('../img/maps/ski.jpeg')} alt='skiing map'/>
          <h3>SKI SLOPES</h3>
        </Link>

        <Link to='' className='Card MapIcon'>
          <img src={require('../img/maps/dodgeball.jpeg')} alt='dodgeball map'/>
          <h3>YE OLDE DODGEBALL</h3>
        </Link>

        <Link to='' className='Card MapIcon'>
          <img src={require('../img/maps/space.jpeg')} alt='space map'/>
          <h3>OUTER SPACE</h3>
        </Link>

        <Link to='' className='Card MapIcon'>
          <img src={require('../img/maps/fruits.jpeg')} alt='fruits map'/>
          <h3>FRUIT FIGHT</h3>
        </Link>

        <Link to='' className='Card MapIcon'>
          <img src={require('../img/maps/maze.jpeg')} alt='maze map'/>
          <h3>THE GREAT ESCAPE</h3>
        </Link>

        <Link to='' className='Card MapIcon'>
          <img src={require('../img/maps/castle.jpeg')} alt='castle map'/>
          <h3>SIEGE OF TROY</h3>
        </Link>
      </div>
    </section>
  )
};

export default Home;
