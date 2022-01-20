
import { Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from './Components//HomePage/HomePage';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
import ReactForms from './Components/Forms/Forms';
import RouterInfo from './Components/RouterInfo/RouterInfo';
import PageNotFound from './Components/PageNotFound/PageNotFound'
import ListRendering from './Components/ReactList/ReactList';
import LifeCycle from './Components/LifeCycle/LifeCycleA'
import UpdatingLifeCycle from "./Components/LifeCycle/UpdateLifeCycleA"
import ModalPopUp from './Components/ReactPortals/ModalPopUp';
import MainHTTP from './Components/ReactHTTP/MainHTTP';
import ReactHooksPage from './Components/ReactHooksPage/ReactHooksPage';
import useEffectHooks from './Components/useEffectHooks/useEffectHooks';
import useContextHooks from './Components/useContextHooks/useContextHooks';
import ReactBasicPage from './Components/ReactBasic/ReactBasicPage';
import CricketDashboard from './Components/Cricket/CricketDashboard'; 

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <Header></Header>

      <main className="pageBody">
        <Switch>
          <Route path="/" exact component = { HomePage }/>
          <Route path="/react-basic" component={ReactBasicPage} />
          <Route path="/react-router" component = { RouterInfo } />
          <Route path="/react-forms" component = { ReactForms } />
          <Route path="/list-rendering" component = { ListRendering } />
          <Route path="/react-life-cycle" component={LifeCycle} />
          <Route path="/updating-life-cycle" component={UpdatingLifeCycle} />
          <Route path= "/react-http" component={MainHTTP} />
          <Route path="/ract-hooks-page" component={ReactHooksPage} />
          <Route path="/basic-of-useEffect" component={useEffectHooks} />
          <Route path="/react-use-context" component={useContextHooks} />
          <Route path="/cricket-dashboard" component={CricketDashboard} />
          <Route component = { PageNotFound } />
        </Switch>
      </main>

      <Footer></Footer>
      <ModalPopUp></ModalPopUp>
    </div>
  );
}

export default App;
