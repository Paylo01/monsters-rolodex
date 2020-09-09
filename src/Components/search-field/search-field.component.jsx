import React from 'react';

import './search-field.styles.css';

export const SearchField = ({placeholder, handleChange}) => {
    return (
        <div>
            <input 
                className="searchField"
                type="search" 
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}