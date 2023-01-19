import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SuppliesList from './supplies-list';
import SuppliesListClassComponent from './supplies-list-class-component';
//concept is a list of supplies for a bugout bag that could be used during a zombie apocalypse
//write a list component as a functional component
//Create a second list that uses class components
//display both on the page at the same time (as separate lists)

const supplyList = [
  {
    title: 'Toilet Paper',
  },
  {
    title: 'Trail Mix',
  },
  {
    title: 'Ammunition',
  },
  {
    title: 'Duct tape',
  },
]

const supplyList2 = [
  {
    title: 'Food',
  },
  {
    title: 'Compass',
  },
  {
    title: 'Crossbow',
  },
  {
    title: 'Medkit',
  },
]

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <BrowserRouter>
            <Routes>
                <Route
                    path="/home"
                    exact
                    element={
                        <div>
                          <h1>Home</h1>
                          <SuppliesList defaultList={supplyList} listTitle="Bugout Bag"/>
                          <SuppliesListClassComponent defaultList={supplyList2} listTitle="Bugout Bag 2"/>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
