import '../styles/Home.css';
import MapIcon from './MapIcon';

import skiSlopes from '../img/maps/ski-slopes.jpeg';
import yeOldeDodgeball from '../img/maps/ye-olde-dodgeball.jpeg';
import outerSpace from '../img/maps/outer-space.jpeg';
import fruitFight from '../img/maps/fruit-fight.jpeg';
import greatEscape from '../img/maps/great-escape.jpeg';
import siegeOfTroy from '../img/maps/siege-of-troy.jpeg';

const Home = () => {
  return (
    <section className='Home'>
      <h2 className='Card Title'>Choose a map to start!</h2>

      <div className='MapGrid'>
        <MapIcon name='SKI SLOPES' img={skiSlopes} difficulty={1} highScore={49} />
        <MapIcon name='YE OLDE DODGEBALL' img={yeOldeDodgeball} difficulty={2} highScore={43} />
        <MapIcon name='OUTER SPACE' img={outerSpace} difficulty={3} highScore={266} />
        <MapIcon name='FRUIT FIGHT' img={fruitFight} difficulty={4} highScore={545} />
        <MapIcon name='THE GREAT ESCAPE' img={greatEscape} difficulty={5} highScore={754} />
        <MapIcon name='SIEGE OF TROY' img={siegeOfTroy} difficulty={5} highScore={475} />
      </div>
    </section>
  )
};

export default Home;
