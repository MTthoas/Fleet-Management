import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/App.css";

function App() {
  return (
    <div className="mt-16 flex items-center justify-center">
      <header className="App-header text-center">
        <h1 className="text-4xl mb-8 font-bold">Mon Application</h1>
        <Link 
          to="/Users" 
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded transition-colors duration-200"
        >
          Voir la liste des utilisateurs
        </Link>
      </header>
    </div>
  );
}

export default App;
