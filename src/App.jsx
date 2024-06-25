import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import Launcher from "./components/Launcher";
import News from './components/News';
import Notification from './components/Notification';
import History from './components/History';
import More from './components/More';
import Profile from './components/Profile'; // Import the Profile component
import Header from './components/Header';

const App = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching user auth status)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Launcher setLoading={setLoading} />
      ) : (
        <div className={`flex ${theme}`}>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login setAuth={setAuth} />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
            <Route path="/news" element={isAuthenticated ? <News /> : <Navigate to="/" />} />
            <Route path="/notification" element={isAuthenticated ? <Notification /> : <Navigate to="/" />} />
            <Route path="/history" element={isAuthenticated ? <History /> : <Navigate to="/" />} />
            <Route path="/more" element={isAuthenticated ? <More /> : <Navigate to="/" />} />
            <Route path="/map" element={isAuthenticated ? <Map /> : <Navigate to="/" />} />
            <Route path="/header" element={isAuthenticated ? <Header /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
