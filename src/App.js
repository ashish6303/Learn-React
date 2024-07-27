import './App.css';
import ThemeProvider from './components/backgroundTheme/ThemeProvider';
import ThemeToggle from './components/backgroundTheme/ThemeToggle';
import Counter from './features/counter/Counter';

function App() {
  return (
    <ThemeProvider>
      <h1>This is my Counter</h1>
      <ThemeToggle/>
      <Counter/>
    </ThemeProvider>
  );
}

export default App;
