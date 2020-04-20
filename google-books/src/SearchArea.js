import React from 'react';

const SearchArea = (props) => {
    return (
        <div className= "search-area">
            <form onSubmit={props.SearchBook} action="">
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search</button>
                <select defaultValue="Sort" onchange={props.handleSort}>
                    <option disabled value="Sort">Sort</option>
                    <option disabled value="Newest">Newest</option>
                    <option disabled value="Oldest">Oldest</option>
                    
                </select>
            </form>
        </div>
    )
}

export default SearchArea;