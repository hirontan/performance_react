import { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ClassicalFetchA } from './components/ClassicalFetchA';
import { ClassicalFetchB } from './components/ClassicalFetchB';
import { StateProvider } from './context/StateProvider';

import { Layout } from './components/Layout';

const App: VFC = () => {
  return <BrowserRouter>
    <Layout>
      <StateProvider>
        <Switch>
          <Route exact path="fetch-a">
            <ClassicalFetchA />
          </Route>
          <Route exact path="fetch-b">
            <ClassicalFetchB />
          </Route>
        </Switch>
      </StateProvider>
    </Layout>
  </BrowserRouter>

}

export default App;
