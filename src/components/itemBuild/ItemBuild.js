import React from 'react';
import './styles.scss';

export const ItemBuild = (props) => {

  return (
    <>
      <div className='startingItems'>
        Starting
      </div>
      <div className='earlyItems'>
        Early Game
      </div>
      <div className='midItems'>
        Mid Game
      </div>
      <div className='lateItems'>
        Late Game
      </div>
    </>
  );
};
