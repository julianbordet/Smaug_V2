import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyBugs from './pages/MyBugs';
import MyProjects from './pages/MyProjects';
import NotFound from './pages/NotFound';
import Roles from './pages/Roles';
import Landing from './pages/Landing';
import BugDetail from './pages/BugDetail';
import ProjectDetail from './pages/ProjectDetail';
import { pages } from './util/Constants';
import './styles/App.css';
import NewBug from './pages/NewBug';

function App() {

  return (
    <Switch>
      <Route path={pages.rootPage} exact>
        <Landing />
      </Route>

      <Route path={pages.dashboardPage}>
        <Dashboard />
      </Route>

      <Route path={pages.myBugsPage} exact>
        <MyBugs />
      </Route>

      <Route path={pages.newBugPage} exact>
        <NewBug />
      </Route>

      <Route path={pages.bugDetailPage} exact>
        <BugDetail />
      </Route>

      <Route path={pages.myProjectsPage} exact>
        <MyProjects />
      </Route>

      <Route path={pages.projectDetailPage}>
        <ProjectDetail />
      </Route>

      <Route path={pages.rolesPage}>
        <Roles />
      </Route>

      <Route path={pages.any}>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
