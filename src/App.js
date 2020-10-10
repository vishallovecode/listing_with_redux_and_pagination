import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css'
import AlbumListing from './components/AlbumListing'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from './components/ImageCard'
import ImageContainer from './components/ImageContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AlbumListing} />
            <Route path="/images/:id" component={ImageContainer} />

          </Switch>

        </BrowserRouter>

      </div>
    </Provider>
  )
}

export default App
