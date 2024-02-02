import { Route, Routes } from "react-router-dom";

import Layout from './pages/Layout';
import LunchMeal from "./pages/LunchMeal";
import Pizza from "./pages/Pizza";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LunchMeal />} />
        <Route path="pizza" element={<Pizza />} />
      </Route>
    </Routes>
  );
}

export default App;
