import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import routes from "./routes";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" Component={Home} />
          {routes.map(({ Element, path }) => (
            <Route path={path} Component={Element} key={path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
