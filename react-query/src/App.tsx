import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { StateProvider } from './context/StateProvider'
import { Layout } from './components/Layout'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'

const App: VFC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <ReactQueryA />
            </Route>
            <Route exact path="/query-b">
              <ReactQueryB />
            </Route>
            <Route exact path="/fetch-a">
              <ClassicalFetchA />
            </Route>
            <Route exact path="/fetch-b">
              <ClassicalFetchB />
            </Route>
          </Switch>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  )
}

export default App
