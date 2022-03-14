//import './App.css';
import { UserList } from "./UserList";
import { Routes, Route } from "react-router-dom";
import { UserDetail } from "./UserDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/:id" element={<UserDetail />} />
        </Routes>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div
            style={{
              background: "red",
            }}
          >
            CENTER ME
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
