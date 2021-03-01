import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Team from './Components/Team/Team';
function App() {
  return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="nav-wrapper container-fluid">
                    <a id="nav-text" class="navbar-brand text-success">Team Maker</a>
                      <form class="d-flex">
                        <input class="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
                </div>
              </nav>
              <Team></Team>
        </div>
  );
}

export default App;