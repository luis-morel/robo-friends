import React from 'react';

const SearchBox = ({ searchInput }) => {
    return (
        <div className='p2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchInput}
            />
        </div>
    );
};

export default SearchBox;