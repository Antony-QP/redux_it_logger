import React from "react";

export const SearchBar = () => {
  return (
    <div>
      <nav style={{ marginBotton: "30px"}} className="blue">
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input id='search' type='search' required />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;