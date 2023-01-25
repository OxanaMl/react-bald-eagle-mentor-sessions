import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AdoptionForm from './adoption-form'
import AdoptionFormFunctional from './adoption-form-functional';

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
                          <AdoptionForm/>
                          <AdoptionFormFunctional/>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
