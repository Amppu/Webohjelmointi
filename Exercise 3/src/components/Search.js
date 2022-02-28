import React from 'react'

export default function Search(props) {
  return (
    <div className="searchBar"><input type="text" value ={ props.searchValue }placeholder="Start typing to search" onChange={props.onSearchChange }/></div>
  )
}