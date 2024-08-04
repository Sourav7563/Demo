import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
      App Component
      <br /> <br />
      <button>
        <Link to="/mi">MI</Link>
      </button>
      <br /> <br />
      <button>
        <Link to="/csk">CSK</Link>
      </button>
      <br /> <br />
      <button>
        <Link to="/rcb">RCB</Link>
      </button>
      <br /> <br />
    </div>
  );
}

export default App;
