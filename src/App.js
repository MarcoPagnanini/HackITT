import "./App.css";
import Chat from "./components/Chat";
import ChatTest from "./components/ChatTest";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginTest from "./components/LoginTest";
import Chattestnavbar from "./components/Chattestnavbar.tsx";

function App() {
  const [user] = useAuthState(auth);

  console.log(user);

  return (
    <>
      {user ? (
        <>
        <Chat
          name={user.displayName}
          uid={user.uid}
          email={user.email}
          photoURL={user.photoURL}
        ></Chat>

        </>
      ) : (
        <LoginTest />
      )}
    </>
  );
}

export default App;
