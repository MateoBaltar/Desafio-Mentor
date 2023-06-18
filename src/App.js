import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Index from "./components/Index";
import Register from "./components/Register";
import { AuthProvider } from "./AuthContext";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";

function App() {
  return ( 
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/login" Component={(props) => <Login {...props} />} />
          <Route
            path="/register"
            Component={(props) => <Register {...props} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </AuthProvider>
    </div>
  );
}

export default App;
