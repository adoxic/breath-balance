import React, { useState, useEffect } from 'react';
const imageArr = [];
imageArr.push('../images/breath1.png', '../images/breath2.png', '../images/breath3.png', '../images/breath4.png');

const Breath = () => {
  const [index, setIndex] = useState(0); 
  useEffect(() => {
    setTimeout(() => {
      if(index > imageArr.length) {
        console.log('stop?');
        return;
      }
      setIndex(index + 1);
      console.log('is working?');
    }, 1000);
  }, [index]);

  return (
    <section>
      <img src={imageArr[index]} />
    </section>
  );
};

export default Breath;
