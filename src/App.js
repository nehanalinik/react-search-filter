import { useState } from "react";
import "./App.css";
import jsonData from "./MOCK_DATA.json";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {jsonData
        .filter((val) => {
          if (search === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        })
        .map((item) => (
          <div key={item.id} className="user">
            <p>{item.first_name}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
