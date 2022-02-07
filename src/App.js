//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/app.scss';
import Users from './components/Users';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*  <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <BrowserRouter>

        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/addUser">
          <AddUser />
        </Route>
        <Route exact path="/editUser/:id">
          <EditUser />
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
