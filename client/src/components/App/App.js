import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DetailsPage from '../DetailsPage/DetailsPage';
import LandingPage from '../LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useReducer } from 'react';
import reducer from '../reducer';
import { PageNumberContext } from '../context/context';


function App() {
  const initialState = 1;
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div className="App">
        <PageNumberContext.Provider value={{ counterCount: count, counterDispatch: dispatch }}>
          <Header />

          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/details/:launchId' component={DetailsPage} />
          </Switch>

          <Footer />
        </PageNumberContext.Provider>
      </div>
    </Router>
  );
}

export default App;
