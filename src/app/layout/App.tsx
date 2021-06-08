import { Container } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../stores/store';
import TodoList from './TodoList';
import About from './About';
import { Route } from "react-router-dom";


function App() {
  const {todoStore} = useStore();

  useEffect( () => {
      todoStore.loadTodos();
  }, [todoStore])

  return (
    <Container>
      <Route exact path='/' component={TodoList} />
      <Route path='/about' component={About} />
    </Container>
  );
}

export default observer(App);
