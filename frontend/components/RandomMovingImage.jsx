import React from 'react';

const RandomMovingImage = ({ cols, rows, imageSrc }) => {
  const randomX = Math.random() * 0.7;
  const randomY = Math.random();

  return (
    <div
      className={`moving-image ${
        cols == 1 ? 'col-span-1' : 'col-span-2'
      } transition-all duration-300 w-full h-full  ${
        rows == 1 ? 'row-span-1' : 'row-span-2'
      } rounded-lg overflow-hidden`}
      style={{ '--random-x-value': randomX, '--random-y-value': randomY }}>
      <img
        src={imageSrc.src || imageSrc}
        alt="photo"
        className=" object-cover  w-full h-full"
      />
    </div>
  );
};

export default RandomMovingImage;
