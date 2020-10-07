import React, { useState } from 'react';
import { ITEMS } from '../../constants/items';
import './styles.scss';

export const ItemBuild = (props) => {
  const [startingItems, setStartingItems] = useState([]);
  const [earlyItems, setEarlyItems] = useState(props.itemBuild.early_game_items ? props.itemBuild.early_game_items : null);
  const [midItems, setMidItems] = useState(props.itemBuild.mid_game_items ? props.itemBuild.mid_game_items : null);
  const [lateItems, setLateItems] = useState(props.itemBuild.late_game_items ? props.itemBuild.late_game_items : null);

  const startingItemsCopy = [];
  const earlyItemsCopy = [];
  const midItemsCopy = [];
  const lateItemsCopy = [];

  const openDotaUrl = 'https://api.opendota.com';

  const startingItemsElements = Object.keys(props.itemBuild.start_game_items).map((key) => {
    Object.values(ITEMS).forEach((item) => {
      if (parseInt(key) === item.id) {
        startingItemsCopy.push(item);
      }
    });
  });

  const earlyItemsElements = Object.keys(props.itemBuild.early_game_items).map((key) => {
    Object.values(ITEMS).forEach((item) => {
      if (parseInt(key) === item.id) {
        earlyItemsCopy.push(item);
      }
    });
  });

  const midItemsElements = Object.keys(props.itemBuild.mid_game_items).map((key) => {
    Object.values(ITEMS).forEach((item) => {
      if (parseInt(key) === item.id) {
        midItemsCopy.push(item);
      }
    });
  });

  const lateItemsElements = Object.keys(props.itemBuild.late_game_items).map((key) => {
    Object.values(ITEMS).forEach((item) => {
      if (parseInt(key) === item.id) {
        lateItemsCopy.push(item);
      }
    });
  });

  return (
    <>
      <div className='section' style={{ marginBottom: 20, fontWeight: 'bold' }}>Starting</div>
      <div className='itemsRow'>
        {startingItemsCopy.map((element) => (
          <div key={element.id}>
            <img src={`${openDotaUrl}${element.img}`}alt='item'  />
            <span>{element.dname}</span>
          </div>
        ))}
      </div>
      <div className='section'>Early Game</div>
      <div className='itemsRow'>
        {earlyItemsCopy.map((element) => (
          <div key={element.id}>
            <img src={`${openDotaUrl}${element.img}`} alt='item' />
            <span>{element.dname}</span>
          </div>
        ))}
      </div>
      <div className='section'>Mid Game</div>
      <div className='itemsRow'>
        {midItemsCopy.map((element) => (
          <div key={element.id}>
            <img src={`${openDotaUrl}${element.img}`} alt='item' />
            <span>{element.dname}</span>
          </div>
        ))}
      </div>
      <div className='section'>Late Game</div>
      <div className='itemsRow'>
        {lateItemsCopy.map((element) => (
          <div key={element.id}>
            <img src={`${openDotaUrl}${element.img}`} alt='item' />
            <span>{element.dname}</span>
          </div>
        ))}
      </div>
    </>
  );
};
