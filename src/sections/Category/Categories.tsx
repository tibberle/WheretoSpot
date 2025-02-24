import React from 'react';
import './Categories.css';

interface Category {
  name: string;
  href: string;
}

interface CategoriesProps {
  title?: string;
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({
  title = "Spots by:",
  categories
}) => {
  const columnCount = 3;
  const itemsPerColumn = Math.ceil(categories.length / columnCount);
  
  const columns = Array.from({ length: columnCount }, (_, colIndex) => 
    categories.slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
  );

  return (
    <div className="categories-container">
      <div className="categories-main">
        <h2>{title}</h2>
        <div className="categories-content">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="categories-column">
              {column.map((category, index) => (
                <p key={`${colIndex}-${index}`}>
                  <a 
                    href={category.href}
                    className="category-item"
                  >
                    {category.name}
                  </a>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;