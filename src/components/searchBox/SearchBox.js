import React from 'react';
import './SearchBox.css';

export const SearchBox = ({placeholder, onChange}) =>{
    return (
        <input 
        className="search"
        type="search"
        placeholder={placeholder}
        onChange = {onChange}
        />
    );
} 