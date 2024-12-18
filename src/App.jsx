import "./App.css";
import "./styles/GlobalStyle.css"
import Navigation from "./screens/navigations/Navigation";
import { ThemeProvider } from "./theme/ThemeContext";
const App = () => {
  console.clear();
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
