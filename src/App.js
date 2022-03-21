import './App.css';
import Navbar from './Components/Navbar';
import Crud from './Components/Crud';
import AllUers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import EditUsers from './Components/EditUsers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Crud} />
      <Route exact path="/all" component={AllUers} />
      <Route exact path="/add" component={AddUsers } /> 
      <Route exact path="/edit/:id" component={EditUsers} /> 
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
