import React from 'react';

const BookmarkList = ({ bookmarks, onSelect }) => {
  if (bookmarks.length === 0) {
    return <div>You have no bookmarks yet.</div>;
  }

  return (
    <div className="bookmark-list">
      <h3>Your Bookmarked Places:</h3>
      {bookmarks.map((place) => (
        <div key={place.id} onClick={() => onSelect(place)}>
          <h4>{place.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;