import { BrowserRouter, Route, Routes } from "react-router";
import {ApiProvider} from "../../context/RickAndMortyApiContext.jsx";
import Favorites from "./favorites/Favorites.jsx";

const Index = () => {

  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}
export default Index