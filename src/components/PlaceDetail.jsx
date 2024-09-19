import React from 'react';

const PlaceDetail = ({ place }) => {
  if (!place) return <div>Select a place to see the details</div>;

  return (
    <div className="place-detail">
      <h2>{place.name}</h2>
      <img src={place.image} alt={place.name} style={{ width: '100%' }} />
      <p>{place.description}</p>
      <h4>Fasilitas:</h4>
      <ul>
        {place.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceDetail;