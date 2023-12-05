import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import {Provider} from "react-redux";
import store from "./core/store";
import VibeListingPage from "./pages/vibe-listing/VibeListingPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Confirmation from "./pages/confirmation/Confirmation";


function App() {
  return (
      <Provider store={store} >
          <Router>
            <NavBar />
              <Routes>
                  <Route path='/' element={<HomePage />} ></Route>
                  <Route path='/vibe' element={<VibeListingPage />} ></Route>
                  <Route path='/vibe/:checkoutParam/checkout' element={<CheckoutPage />} />
                  <Route path='/vibe/:checkoutParam/checkout/confirmation' element={<Confirmation />} />
              </Routes>
          </Router>
      </Provider>
  );
}

export default App;
