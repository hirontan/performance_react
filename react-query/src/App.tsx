import { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ClassicalFetchA } from './components/ClassicalFetchA';
import { ClassicalFetchB } from './components/ClassicalFetchB';

import { Layout } from './components/Layout';

const App: VFC = () => {
  return <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="fetch-a">
          <ClassicalFetchA />
        </Route>
        <Route exact path="fetch-b">
          <ClassicalFetchB />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>

}

export default App;
