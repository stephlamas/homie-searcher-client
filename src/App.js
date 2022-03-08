import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import UserMessage from "./components/UserMessage/UserMessage";


function App() {
  return (
    <>
      <Navigation />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <UserMessage />
    </>
  );
}

export default App;
