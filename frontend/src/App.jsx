import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StackOverflow from "./components/StackOverflow";
import Header from "./components/Header";
import AddQuestion from "./components/AddQuestion";
import ViewQuestion from "./components/ViewQuestion";
import Auth from "./components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<StackOverflow />} />
            <Route path="/add-question" element={<AddQuestion />} />
            <Route path="/question" element={<ViewQuestion />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
