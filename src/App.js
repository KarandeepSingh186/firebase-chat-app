import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Navbar from "./components/Navbar";
import ChatBox from "./components/Chatbox";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default App;
