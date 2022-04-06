import logo from '../../img/logo.png';

const ScoreModal = ({ time }) => {
  return (
    <div className='ScoreModalContainer'>
      <div className='ScoreModal'>
        <img src={logo} alt='waldo' className='GameOverWaldo' />
        <h4>You found Waldo and friends in <span className='Time'>{time} seconds</span>!</h4>
        
        <form className='ScoreForm'>
          <input type='text' placeholder='Name'></input>
          <button type='submit'>Add Score</button>
        </form>
      </div>
    </div>
  )
};

export default ScoreModal;
