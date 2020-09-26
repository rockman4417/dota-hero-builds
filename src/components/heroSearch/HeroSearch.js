import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import './styles.scss';

export const HeroSearch = (props) => {

  return (
    <>
      <div className='heroSeachContainer'>
        <h1>Search for a hero build</h1>
        <Input className='heroSearchInput' />
      </div>
    </>
  )
}
