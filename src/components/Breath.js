import React, { useState, useEffect } from 'react';
const breath1 = '../images/breath1.png';
const breath2 = '../images/breath2.png';
const breath3 = '../images/breath3.png';
const breath4 = '../images/breath4.png';

const Breath = () => {
  const [breath, setBreath] = useState(); 
  useEffect(() => {
    setBreath(breath1);
  }, [breath]);

  return (
    <section>
      <img src={breath} />
    </section>
  );
};

export default Breath;
