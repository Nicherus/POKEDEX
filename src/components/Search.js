import React from 'react';

const Search = (props) => {
    
    const {searchText, setSearchText} = props;

    return(
        <div className="search-div">
        <input 
            placeholder={'Search your favorite Pokémon'}
            onChange={event => setSearchText(event.target.value)}
            value={searchText}
        />
        </div>
    )
}

export default Search;