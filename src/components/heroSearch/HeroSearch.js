import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory, Link } from "react-router-dom";

import * as dota2logo from '../../assets/dota2Logo.jpg';
import './styles.scss';
import { ItemBuild } from '../itemBuild/ItemBuild';

const OPEN_DOTA_BASE_URL = 'https://api.opendota.com/api';
const OPEN_DOTA_API_KEY = '3276109-04b4-4fd8-bc9f-2244eae2a5c';

export const HeroSearch = (props) => {
  const [heroName, setHeroName] = useState('');
  const [heroList, setHeroList] = useState([]);
  const [heroId, setHeroId] = useState(null);
  const [itemBuild, setItemBuild] = useState();

  const history = useHistory();

  useEffect(() => {
    fetch(`${OPEN_DOTA_BASE_URL}/heroes?api_key${OPEN_DOTA_API_KEY}`, { mode: 'cors' })
      .then(res => res.json())
      .then(res => {
        console.log(res);
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
    console.log('heroId', heroId)
    fetch(`${OPEN_DOTA_BASE_URL}/heroes/${heroId}/itemPopularity?api_key${OPEN_DOTA_API_KEY}`, { mode: 'cors' })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItemBuild(res);
      })
      .catch((err) => console.log(err));
  };

  const setHero = (hero) => {
    setHeroId(hero.id)
  }

  return (
    <>
      <div className='heroSeachContainer'>
        <h1>Enter a Hero</h1>
        <div className='heroSearchRow'>
          {console.log('HERO NAME', heroName)}
          <Autocomplete
            options={heroList}
            getOptionLabel={hero => hero.localized_name}
            style={{ width: 300 }}
            onChange={(event, newValue) => {
              setHero(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Hero" variant="outlined" />}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleHeroSearch}
          >
            submit
          </Button>
        </div>
        {itemBuild ? (
          <ItemBuild itemBuild={itemBuild} />
        ) : (
          <img className='dotaLogo' src={dota2logo} alt='dota 2 logo' />
        )}
      </div>
    </>
  );
};
