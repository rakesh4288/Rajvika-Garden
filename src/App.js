
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
import PlayerList from './Components/Cricket/PlayerList'; 
import EditPlayer from './Components/Cricket/EditPlayer';
import MoviesDashboard from './Components/Movies/MoviesDashboard';
import MoviesDetails from './Components/Movies/MoviesDetails';

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <Header></Header>

      <main className="pageBody">
        <Switch>
          <Route path="/" exact component = { HomePage }/>
          <Route path="/react-basic" exact component={ReactBasicPage} />
          <Route path="/react-router" exact component = { RouterInfo } />
          <Route path="/react-forms" exact component = { ReactForms } />
          <Route path="/list-rendering" exact component = { ListRendering } />
          <Route path="/react-life-cycle" exact component={LifeCycle} />
          <Route path="/updating-life-cycle" exact component={UpdatingLifeCycle} />
          <Route path= "/react-http" exact component={MainHTTP} />
          <Route path="/ract-hooks-page" exact component={ReactHooksPage} />
          <Route path="/basic-of-useEffect" exact component={useEffectHooks} />
          <Route path="/react-use-context" exact component={useContextHooks} />
          <Route path="/cricket-dashboard" exact component={CricketDashboard} />
          <Route path="/cricket-dashboard/view-player-list" exact component={PlayerList} />
          <Route path="/cricket-dashboard/edit-player/:id" exact component={EditPlayer} />
          <Route path="/movies-dashboard" exact component={MoviesDashboard} />
          <Route path="/movies-dashboard/movies-details/:id" exact component={MoviesDetails} />
          <Route component = { PageNotFound } />
        </Switch>
      </main>

      <Footer></Footer>
      <ModalPopUp></ModalPopUp>
    </div>
  );
}

export default App;
