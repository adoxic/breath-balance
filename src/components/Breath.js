import React, { useState, useEffect } from 'react';
const imageArr = [];
imageArr.push('../images/cloud1.png', '../images/cloud2.png', '../images/cloud3.png', '../images/cloud4.png', '../images/cloud5.png', '../images/cloud6.png', '../images/cloud7.png');

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
