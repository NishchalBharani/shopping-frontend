import React from 'react';

const categories = [
  { name: "Men", image: "https://promova.com/content/mens_clothing_1f6198db54.png" },
  { name: "Women", image: "https://promova.com/content/large_female_clothes_013b4bec9c.png" },
  { name: "Kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXfFSSpbsvp_LDw93vNVQS61WmS48VgKB9w&s" },
  { name: "Accessories", image: "https://promova.com/content/large_accessory_79573b939f.png" },
];

const CategoryList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <div key={category.name} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={category.image} alt={category.name} className="w-full h-32 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
