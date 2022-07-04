
import Container from './containers/Container'
import Header from './components/layout/Header';
import Routes from './routes/Routes';
import { appStyles } from './styles/sharedStyles';

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
