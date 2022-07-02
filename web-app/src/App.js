
import Container from './Components/Container'
import NavBar from './Components/NavBar'
import Routes from './Components/Routes'
import { appStyles } from './assets/styles/sharedStyles';

function App() {
  const classes = appStyles();

  return (
    <div className={classes.app}> 
      <NavBar/>
      <Container>
        <Routes/>
      </Container>
    </div>
  );
}

export default App;
