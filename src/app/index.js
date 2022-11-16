import { Route, Routes } from "react-router";
import routings from "../routes/routes";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {routings().map((val, id) => (
          <Route
            key={id}
            path={val.path}
            exactPath={val.exactPath}
            element={val.element}
          >
            {val.children?.map((subVal, id) => (
              <Route
                key={id}
                path={subVal.path}
                exactPath={subVal.exactPath}
                element={subVal.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
