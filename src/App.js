import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import NewMassage from './components/Massages/NewMassage';
import MassageList from './components/Massages/MassageList';

function App() {
  const [loadedMassages, setLoadedMassages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMassages = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/massages');

      const responseData = await response.json();

      setLoadedMassages(responseData.massages);
      setIsLoading(false);
    };

    fetchMassages();
  }, []);

  const addMassageHandler = async (massageName) => {
    try {
      const newMassage = {
        title: massageName
      };
      let hasError = false;
      const response = await fetch('http://localhost:5000/massage', {
        method: 'POST',
        body: JSON.stringify(newMassage),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      setLoadedMassages(prevMassages => {
        return prevMassages.concat({
          ...newMassage,
          id: responseData.massage.id
        });
      });
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  };

  return (
    <Router>
      <React.Fragment>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<NewMassage onAddMassage={addMassageHandler} />} />
            <Route
              path="/massage-list"
              element={<MassageList items={loadedMassages} />}
            />
          </Routes>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
