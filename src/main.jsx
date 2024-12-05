import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/app/home/Home.jsx";
import Favorites from "./pages/app/favorites/Favorites.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import AboutMe from "./pages/app/about/AboutMe.jsx";
import { ApiProvider } from "./context/RickAndMortyApiContext.jsx";
import ProtectedRoute from "./components/router/ProtectedRoute.jsx";
import { Toaster } from "sonner";
import Detail from "./pages/app/detail/Detail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }>
          </Route>
          <Route path="/favorites" element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }>
          </Route>
          <Route path="/detail/:id" element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }>
          </Route>
          <Route path="/about" element={
            <ProtectedRoute>
              <AboutMe />
            </ProtectedRoute>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors/>
    </ApiProvider>
  </StrictMode>
);