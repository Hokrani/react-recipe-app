
import Container from './Components/Container'
import Header from './Header';
import Routes from './Components/Routes'
import { appStyles } from './assets/styles/sharedStyles';

function App() {
  const classes = appStyles();

  return (
    <div className={classes.app}> 
       <Header />
      <Container>
        <Routes/>
      </Container>
    </div>
  );
}

export default App;
