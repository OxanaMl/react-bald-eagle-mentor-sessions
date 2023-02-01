import React, { useState } from 'react';
import './app.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('#DDDDDD');
  return (
    <div style={{ textAlign: 'center' }}>
      <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}/>
      <div className="color-box" style={{ '--boxColor': selectedColor }}></div>
      <div className="color-box" style={{ '--boxColor': '#EEEEEE' }}></div>
    </div>
  );
}

export default App;
