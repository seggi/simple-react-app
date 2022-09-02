import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import routes from "./routes";


const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           {
            routes.map((route) => {
              return <Route
                  path={route.path}
                  key={route.key}
                  element={route.element}
                />
            })
           }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
