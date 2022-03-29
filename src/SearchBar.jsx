import React from 'react'

export default function SearchBar() {
    return (
      <form
        id="SearchBar"
        className="space-x-0.5 flex"
        onSubmit={(e) => {
          e.preventDefault();
          alert("DO NOT SEARCH! INVOKE SOME ANIMAL, BASTARD!");
        }}
      >
        <input type="string" className="text-black px-1" />
        <button>
          Search
        </button>
      </form>
    );
  }
  