
const Dates = () => {
    // get the time of your locality
    let month = new Date().toLocaleDateString('default', { month: 'long' });
    let day = new Date().toLocaleDateString('default', { weekday: 'long' });

  return (
    <div className="dateContainer"> 
        <h1> {day}, {month}  </h1>
    </div>
  );
};

export default Dates;