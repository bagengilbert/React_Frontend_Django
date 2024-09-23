import React from 'react';
import { Link } from 'react-router-dom';

// Functional component that takes 'categories' as a prop
const CategoryList = ({ categories }) => {
    return (
        <div>
            {/* Heading for the list of categories */}
            <h3>Categories</h3>

            {/* Unordered list for the category links */}
            <ul>
                {/* Loop through the categories array */}
                {categories.map((category) => (
                    <li key={category.id}>
                        {/* Each category is wrapped inside a Link component for navigation */}
                        <Link to={`/categories/${category.slug}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
