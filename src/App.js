import './App.css';
import Patika from './pages/patika';
import Register from './pages/form';
import { ThemeProvider } from './context/theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className='container'>
          <Patika />
          <Register />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
