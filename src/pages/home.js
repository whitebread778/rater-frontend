import React from 'react';
import { useState } from 'react';
import SideNav from '../components/SideNav';
import SearchBar from '../components/search';
//import { Route, Routes } from 'react-router-dom';
import Announcer from '../components/announcer';
import '../styles/App.css'


const fakePrograms = [
  { id: '1', name: 'full stack web developement' },
  { id: '2', name: 'nursing' },
  { id: '3', name: 'medical engineer' },
  { id: '4', name: 'mechanical engineer' },
];

const filterFakePrograms = (fakePrograms, query) => {
  if (!query) {
      return fakePrograms;
  }

  return fakePrograms.filter((fakeProgram) => {
      const fakeProgramName = fakeProgram.name.toLowerCase();
      return fakeProgramName.includes(query);
  });
};

const home = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredFakePrograms = filterFakePrograms(fakePrograms, searchQuery);

    return (
      <div className="searchPage">
        <SideNav />
        <Announcer message={`${filteredFakePrograms.length} fakePrograms`} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul className="programList">
          {filteredFakePrograms.map((fakeProgram) => (
            <li key={fakeProgram.id}>{fakeProgram.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default home;