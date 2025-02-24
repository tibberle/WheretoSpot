import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';
import TextStyles from './styles/text';
import PageOutline from './styles/PageOutline';
import BusinessPage from './pages/business';
import CustomerPage from './pages/customer';
import AddNewSpotPage from './pages/business/add-a-new-spot';
import AboutPage from './pages/about';
import CategoryPage from './pages/customer/category';
import DahabGuidePage from './pages/customer/dahab-guide';

const App: React.FC = () => {
  return (
    <Router>
      <PageOutline/>
      <GlobalStyles />
      <TextStyles />
      <Switch>
        <Route exact path="/" component={BusinessPage} />
        <Route exact path="/customer" component={CustomerPage} />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/business/add-a-new-spot" component={AddNewSpotPage} />
        <Route path="/customer/category" component={CategoryPage} />
        <Route path="/customer/dahab-guide" component={DahabGuidePage} />
      </Switch>
    </Router>
  );
};

export default App;