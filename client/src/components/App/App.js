import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DetailsPage from '../DetailsPage/DetailsPage';
import LandingPage from '../LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/details/:launchId' component={DetailsPage} />
        </Switch>
        
        <Footer />
      </div>
    </Router>

  );
}

export default App;
