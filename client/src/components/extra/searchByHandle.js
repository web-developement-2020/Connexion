import React, { Component } from 'react'

const initialState = { results: [], value: '' }

export default class SearchBox extends Component {
  state = initialState
  timeout = null
  search_url = "https://example.com/search?q="
  min_query_length = 2
  timeout_duration = 300

  handleSearchChange = (e) => {
    let value = e.target.value
    clearTimeout(this.timeout);
    if (value.length < 1) {
        return this.setState(initialState) 
    } else {
        this.setState({ value })
        if (value.length>=this.min_query_length) {    
            this.timeout = setTimeout(this.search, this.timeout_duration);
        }
    }
  }

  search = () => {
    // assuming your results are returned as JSON
    fetch(`${this.search_url}${this.state.value}`)
    .then(res => res.json())
    .then(data => {
        this.setState({
            results: data,
                 })
    })
  }

  render() {
    return (
          <input
            onChange={this.handleSearchChange}
          />
    )
  }