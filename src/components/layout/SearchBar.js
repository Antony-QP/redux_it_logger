import React, { useRef } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logActions'

export const SearchBar = ({ searchLogs }) => {
  const text = useRef('')

  const onChange = (e) => {
    searchLogs(text.current.value)
  }

  return (
    <div>
      <nav style={{ marginBotton: "30px"}} className="blue">
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input id='search' type='search' required placeholder="searchLogs" ref={text} onChange={onChange}/>
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

SearchBar.propTypes = {
  searchLogs : PropTypes.object.isRequired,
}
export default connect(null, { searchLogs })(SearchBar);
