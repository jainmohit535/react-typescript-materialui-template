import logo from '../../logo.svg';
import { Card } from '@mui/material';
import { CssBaseline } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
     {/* <ThemeProvider theme={theme}> */}
    <CssBaseline />
    {/* put your routes here */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card sx={{p: "1em"}}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </Card>
      </header>
    </div>
     {/* </ThemeProvider> */}
    </>
  );
}

export default App;
