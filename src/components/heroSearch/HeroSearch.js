import React, { useState, useEffect } from 'react';
import { Input, Button } from '@material-ui/core';
import * as dota2logo from '../../assets/dota2Logo.jpg';
import './styles.scss';

const OPEN_DOTA_BASE_URL = 'https://api.opendota.com/api';
const OPEN_DOTA_API_KEY = '3276109-04b4-4fd8-bc9f-2244eae2a5c';

export const HeroSearch = (props) => {
  const [heroName, setHeroName] = useState('');
  const [heroList, setHeroList] = useState([]);
  const [heroId, setHeroId] = useState();

  useEffect(() => {
    fetch(`${OPEN_DOTA_BASE_URL}/heroes?api_key${OPEN_DOTA_API_KEY}`, { mode: 'cors' })
      .then(res => res.json())
      .then(res => {
        setHeroList(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleHeroChange = (event) => {
    const currentName = event.target.value;
    setHeroName(currentName);
    heroList.forEach((name) => {
      if (currentName === name.localized_name.toLowerCase()) {
        setHeroId(name.id)
      }
    });
  };

  const handleHeroSearch = () => {
    console.log(heroId)
    fetch(`${OPEN_DOTA_BASE_URL}/heroes/${heroId}/itemPopularity?api_key${OPEN_DOTA_API_KEY}`, { mode: 'cors' })
      .then(res => res.json())
      .then(res => {
        setHeroList(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='heroSeachContainer'>
        <h1>Enter a Hero</h1>
        <div>
          <Input className='heroSearchInput' onChange={handleHeroChange} />
          <Button
            variant='contained'
            color='primary'
            onClick={handleHeroSearch}
          >
            submit
          </Button>
        </div>
        <img className='dotaLogo' src={dota2logo} alt='dota 2 logo' />
      </div>
    </>
  );
};
