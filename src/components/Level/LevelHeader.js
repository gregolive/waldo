const LevelHeader = ({ map }) => {
  return (
    <header className='LevelHeader'>
      <span>
        Difficulty:
        &#160;
        <span className='Bubble Difficulty'>
          {[...Array(map.difficulty)].map((d, i) => <i className='fa-solid fa-star' key={i}></i>)}
        </span>
      </span>

      <h2>{map.name}</h2>

      <span>
        High score:
        &#160;
        <span className='Bubble HighScore'>
          45 s  
        </span>
      </span>
    </header>
  );
};

export default LevelHeader;
