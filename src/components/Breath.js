import React, { useState, useEffect } from 'react';
const imageArr = [];
imageArr.push('../images/breath1.png', '../images/breath2.png', '../images/breath3.png', '../images/breath4.png');

const Breath = () => {
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    setTimeout(() => {
      if(index >= imageArr.length - 1) {
        return;
      }
      setIndex(index + 1);
    }, 1000);
  }, [index]);


  return (
    <section>
      <h1>{index + 1}</h1>
      <img src={imageArr[index]} />
    </section>
  );
};

export default Breath;
