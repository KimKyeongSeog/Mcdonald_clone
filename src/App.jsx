import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import MenuBurgerSingle from "./pages/menuBurgerSingle";
import MenuMacLunch from "./pages/menuMacLunch";
import MenuMacMoning from "./pages/menuMacMoning";
import MenuSnack from "./pages/menuSnack";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu/burger" element={<MenuBurgerSingle />} />
        <Route path="/menu/MacLunch" element={<MenuMacLunch />} />
        <Route path="/menu/MacMoning" element={<MenuMacMoning />} />
        <Route path="/menu/Snack" element={<MenuSnack />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
