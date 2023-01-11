import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

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
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
