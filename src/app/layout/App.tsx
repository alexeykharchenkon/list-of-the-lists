import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../stores/store';
import TodoList from './TodoList';

function App() {
  const {todoStore} = useStore();

  useEffect( () => {
      todoStore.loadTodos();
  }, [todoStore])

  return (
    <TodoList/>
  );
}

export default observer(App);
