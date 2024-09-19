import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import PlaceCard from '../components/PlaceCard';
import PlaceDetail from '../components/PlaceDetail';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import BookmarkList from '../components/BookmarkList';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import './index.css';
// import './App.css';
import bromoHD from '../assets/bromoHD.jpg';

function Map() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [bookmarks, setBookmarks] = useState([])
    const toggleBookmark = (place) => {
      setBookmarks((prevBookmarks) => {
        const isBookmarked = prevBookmarks.find(item => item.id === place.id);
        if (isBookmarked) {
          // Remove from bookmarks
          return prevBookmarks.filter(item => item.id !== place.id);
        } else {
          // Add to bookmarks
          return [...prevBookmarks, place];
        }
      });
    };

  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'Pantai Indah',
      shortDescription: 'Pantai dengan pasir putih...',
      description: 'Pantai Indah memiliki pasir putih yang indah...',
      coordinates: [-6.200000, 106.816666],
      facilities: ['Toilet', 'Parkir', 'Warung'],
      category: 'Pantai',
      image: '',
    },
    {
      id: 2,
      name: 'Gunung Toba',
      shortDescription: 'Danau vulkanik besar di Sumatera Utara.',
      description: 'Gunung Toba adalah danau vulkanik besar yang terbentuk akibat letusan supervolcano sekitar 74.000 tahun yang lalu. Danau ini dikelilingi oleh pegunungan dan memiliki pemandangan yang menakjubkan, serta menawarkan berbagai aktivitas seperti wisata alam, berenang, dan menjelajahi Pulau Samosir di tengah danau.',
      coordinates: [2.688145, 98.875625],
      facilities: ['Akomodasi', 'Restoran', 'Parkir', 'Toilet'],
      category: 'Danau',
      image: 'https://via.placeholder.com/150?text=Gunung+Toba',
    },
    {
      id: 3,
      name: 'Pantai Parangtritis',
      shortDescription: 'Pantai terkenal di Yogyakarta dengan pasir hitam.',
      description: 'Pantai Parangtritis terletak di Yogyakarta dan dikenal dengan pasir hitamnya. Pantai ini menawarkan pemandangan matahari terbenam yang spektakuler dan sering digunakan untuk berbagai acara budaya dan kegiatan luar ruangan. Tempat ini juga dikenal dengan mitos dan legenda lokal yang menarik.',
      coordinates: [-8.086024, 110.336664],
      facilities: ['Warung', 'Parkir', 'Toilet', 'Akomodasi'],
      category: 'Pantai',
      image: 'https://via.placeholder.com/150?text=Pantai+Parangtritis',
    },
    {
      id: 4,
      name: 'Pantai Gemah',
      shortDescription: 'Pantai eksotis dengan pasir putih di Blitar.',
      description: 'Pantai Gemah terletak di Blitar, Jawa Timur. Pantai ini memiliki pasir putih yang lembut dan air laut yang jernih. Pantai Gemah adalah tempat yang ideal untuk berenang dan bersantai. Di sekitar pantai, terdapat fasilitas dasar seperti warung dan area parkir.',
      coordinates: [-8.223891, 112.718312],
      facilities: ['Warung', 'Parkir', 'Toilet'],
      category: 'Pantai',
      image: 'https://via.placeholder.com/150?text=Pantai+Gemah',
    },
    {
      id: 5,
      name: 'Gunung Bromo',
      shortDescription: 'Gunung berapi aktif dengan pemandangan kawah yang spektakuler.',
      description: 'Gunung Bromo adalah gunung berapi aktif yang terletak di Jawa Timur, Indonesia. Dikenal dengan pemandangan kawahnya yang spektakuler dan lautan pasir di sekelilingnya. Tempat ini adalah destinasi populer untuk wisatawan yang ingin melihat matahari terbit dan mengeksplorasi keindahan alam.',
      coordinates: [-7.941651, 112.953997],
      facilities: ['Akomodasi', 'Warung', 'Parkir', 'Toilet'],
      category: 'Pegunungan',
      image: bromoHD,
    },
  ]);

  const handleSearch = (query) => {
    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(query.toLowerCase())
    );
    setPlaces(filteredPlaces);
  };

  const handleSelectCategory = (category) => {
    const filteredPlaces = places.filter(place => place.category === category);
    setPlaces(filteredPlaces);
  };

  const handleBookmark = (place) => {
    if (!bookmarks.some((b) => b.id === place.id)) {
      setBookmarks([...bookmarks, place]);
    }
  };

  return (
    <div>
      <div className="justify-between w-full flex items-center">
        <h1 className="text-3xl my-2">Pencarian Wisata</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <CategoryFilter categories={['Pantai', 'Pegunungan', 'Danau']} onSelectCategory={handleSelectCategory} />

      <MapComponent places={places} />

      <div className="places-list">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} onSelect={setSelectedPlace} />
        ))}
      </div>

      <PlaceDetail place={selectedPlace} />

      <h2>Bookmarked Places</h2>
      <BookmarkList bookmarks={bookmarks} onSelect={setSelectedPlace} />
    </div>
  );
}

export default Map;