import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase/firebase";
import { CodexRouter } from "./codex/CodexRouter";
import { Footer } from "./Footer";
import { styled } from "styled-components";

const AppContentArranger = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  console.log(user);

  return (
    <AppContentArranger>
      {user ? (
        <>
          <Router>
            <Routes>
              <Route index element={<div>Character</div>} />
              <Route path="/party/*" element={<div>Party</div>} />
              <Route path="/codex/*" element={<CodexRouter />} />
            </Routes>
            <Footer />
          </Router>
        </>
      ) : (
        <Login />
      )}
    </AppContentArranger>
  );
}

export default App;
