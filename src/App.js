import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import Users from "./components/Users.js";
import Error from "./components/Error";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Router>
          <nav className="container">
            <ul className="menu">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/abouts" className="nav-link">
                  ErrBound
                </Link>
              </li>
              <li>
                <Link to="/error" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
            </ul>
          </nav>
          <main>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<ErrorBoundary />} />
                <Route path="/error" element={<Contact />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </main>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
