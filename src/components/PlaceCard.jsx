import React from 'react';

const PlaceCard = ({ place, onSelect }) => {
  return (
    <div className="place-card" onClick={() => onSelect(place)}>
      <h3>{place.name}</h3>
      <p>{place.shortDescription}</p>
    </div>
  );
};

export default PlaceCard;