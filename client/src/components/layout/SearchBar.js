import React, { Component } from 'react'
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchByHandle } from '../../actions/profileActions'

class SearchBar extends Component {
  onSearchClick(e) {
    e.preventDefault();
    this.searchByHandle();
  }

  render() {
    return (
      <div>
        <li>
                <form id='searchbar' action='api/profile/search' method="GET" className='nav' onClick={this.onSearchClick.bind(this)}>

                  <input name="q" id='search-input' type='search' />
                  <button type="submit" value="Search"><i className='fa fa-search' id='search-icon'></i></button>
                </form>
              </li>

      </div>
    )
  }
}

SearchBar.propTypes = {

}

export default SearchBar;