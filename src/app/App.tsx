import { Container } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from './stores/store';
import AboutComponent from './pages/About/AboutComponent';
import { Route } from "react-router-dom";
import MainComponent from './pages/Main/MainComponent';
import NavBar from './features/Navbar';

function App() {
  const {listStore} = useStore();

  useEffect( () => {
      listStore.loadLists();
  }, [listStore])

  return (
    <>
    <NavBar/>
    <Container>
      <Route exact path='/' component={MainComponent} />
      <Route path='/about' component={AboutComponent} />
    </Container>
    </>
  );
}

export default observer(App);