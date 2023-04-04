import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchEntries } from './actions/entryActions';
import Navbar from './components/Navbar';
import EntryList from './components/EntryList';
import AddEntryForm from './components/AddEntryForm';
import EditEntryForm from './components/EditEntryForm';
import EntryDetails from './components/EntryDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntries());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>Daily Journal</h1>
          <p>Record your thoughts, ideas, and experiences with our easy-to-use daily journal app.</p>
          <Switch>
            <Route exact path="/">
              <EntryList />
            </Route>
            <Route exact path="/entries/new">
              <AddEntryForm />
            </Route>
            <Route exact path="/entries/:id/edit">
              <EditEntryForm />
            </Route>
            <Route exact path="/entries/:id">
              <EntryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
