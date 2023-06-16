import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { PostContextProvider } from "./components/10.consume-api/context/post-context";
import HomePage from "./components/10.consume-api/pages/home";
import { LoginPage } from "./components/10.consume-api/pages/login";

function App() {
  return (
    <div className={styles.App}>
      <PostContextProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </PostContextProvider>
    </div>
  );
}

export default App;
