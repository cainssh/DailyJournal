import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EntryListItem from './EntryListItem';

function EntryList() {
  const entries = useSelector((state) => state.entries);

  return (
    <div>
      <h2>Entries</h2>
      <ul className="list-group">
        {entries.map((entry) => (
          <EntryListItem key={entry._id} entry={entry} />
        ))}
      </ul>
    </div>
  );
}

export default EntryList;
