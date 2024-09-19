import React from 'react';

const Sidebar = ({ categories, onSelectCategory }) => {
    return (
        <aside className="w-64 bg-gray-200 p-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul>
                {categories.map((categoy) => (
                    <li
                        key={categoy}
                        className="cursor-pointer p-2 hover:bg-gray-300"
                        onClick={() => onSelectCategory(categoy)}>

                        {categoy}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar