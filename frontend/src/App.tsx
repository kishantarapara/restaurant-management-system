import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import Router from "./routing/Router";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router />
    </ThemeProvider>
  );
}

export default App;
