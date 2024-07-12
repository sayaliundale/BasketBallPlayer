import './App.css';
import BasketballPlayerCard from './BasketballPlayerCard/BasketballPlayerCard';


const App = () => {
  const player = {
    name: 'Amritpal Singh',
    img: 'https://www.fiba.basketball/api/img/player/headshot/5/208126/77/192573?alternate=%2fimages%2fdefault_profile.jpg',
    position: 'Center',
    stats: {
      pointsPerGame: 10.5,
      assistsPerGame: 2.1,
      reboundsPerGame: 8.7
    }
  };

  return (

    <div>
      <center><h1>Indian BasketBall Player</h1></center>
      <div className="app">
        <BasketballPlayerCard
          name={player.name}
          position={player.position}
          stats={player.stats}
          img={player.img}
        />
      </div>
    </div>
  );
};

export default App;
