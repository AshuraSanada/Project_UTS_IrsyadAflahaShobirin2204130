import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Album</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image-1.png'
              text='Lagi nge-zoom difoto orang tidak bertanggung jawab'
              label='Dumb Photo 1'
              path='/services'
            />
            <CardItem
              src='images/IMG_20230920_143512.jpg'
              text='Ini kalau ngga salah pas statistika'
              label='Dumb Photo 2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_20231023_150832.jpg'
              text='Dah ah cape'
              label='Dumb Photo 3'
              path='/services'
            />
            <CardItem
              src='images/IMG-20231003-WA0010.jpg'
              text='Ekspresi ketika ditanya dosen: "Ada pertanyaan?"'
              label='Dumb Photo 4'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
