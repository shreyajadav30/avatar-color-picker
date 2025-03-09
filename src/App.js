import React, { useState } from "react";
import "./App.css";

function Avatar({ color }) {
  return (
    <div
      className="avatar"
      style={{
        backgroundColor: "#d1d5db",
        width: 100,
        height: 100,
        borderRadius: "50%",
      }}
    />
  );
}

function App() {
  const [color, setColor] = useState("#ffffff");
  const defaultColor = "#ffffff";

  const colors = [
    "#f87171",
    "#60a5fa",
    "#34d399",
    "#fbbf24",
    "#a78bfa",
    "#e11d48",
  ];

  const handleColorChange = (newColor) => {
    setColor(newColor);
    document.querySelector(".app-container").style.backgroundColor = newColor;
  };

  return (
    <div className="app-container">
      <h2>Avatar Color Picker</h2>

      <Avatar />

      <div className="color-buttons">
        {colors.map((c) => (
          <button
            key={c}
            style={{ backgroundColor: c }}
            onClick={() => handleColorChange(c)}
            className="color-btn"
          />
        ))}

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-picker"
        />

        <button
          onClick={() => handleColorChange(defaultColor)}
          className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
