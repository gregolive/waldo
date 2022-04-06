import logo from '../../img/logo.png';

const ScoreModal = ({ time, mapId }) => {
  const formSubmit = (data) => {
    const scoreUrl = 'http://localhost:3001/api/v3/scores';
    
    fetch(scoreUrl, {
      method: 'POST',
      mode: 'cors',
      body: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target[0].value);
    formData.append('time', time);
    formData.append('map_id', mapId);
    formSubmit(formData);
  };
  
  return (
    <div className='ScoreModalContainer'>
      <div className='ScoreModal'>
        <img src={logo} alt='waldo' className='GameOverWaldo' />
        <h4>You found Waldo and friends in <span className='Time'>{time} seconds</span>!</h4>
        
        <form className='ScoreForm' onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='Name' name='name'></input>
          <button type='submit'>Add Score</button>
        </form>
      </div>
    </div>
  )
};

export default ScoreModal;
