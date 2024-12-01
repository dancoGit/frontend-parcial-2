import { AuthenticateProvider } from "../src/context/AuthenticateContext.jsx";
import Authenticate from "./pages/auth/Authenticate.jsx";

function App() {
  return (
    <>
      <AuthenticateProvider>
        <Authenticate />
      </AuthenticateProvider>
    </>
  );
}

export default App;
