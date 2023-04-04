import React from 'react';
import { Link } from 'react-router-dom';

function EntryListItem({ entry }) {
  return (
    <li className="list-group-item">
      <Link to={`/entries/${entry._id}`}>{entry.title}</Link>
      <div>{entry.body}</div>
    </li>
  );
}

export default EntryListItem;
