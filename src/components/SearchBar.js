import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;