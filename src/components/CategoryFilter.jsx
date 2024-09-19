import React, { useState } from 'react';


const CategoryFilter = ({ categories, onSelectCategory }) => {
  // State untuk melacak apakah tombol aktif atau tidak
  const [isActive, setIsActive] = useState(false);

  // // Fungsi untuk toggle status tombol
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="category-filter flex w-full p-5 items-center">
      <h3>Filter by Category:</h3>
      <div className="w-9/12 flex">
        {categories.map((category) => (
          <button className={`${isActive ? 'bg-green-500' : 'bg-gray-50'} mx-5 p-2.5 rounded-md`} key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </button>
        ))}
        </div>
    </div>
  );
};

export default CategoryFilter;