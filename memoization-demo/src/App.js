import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [sortDesc, setSortDesc] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const sortOrderHandler = () => {
    setSortDesc(prev=>!prev);
  }
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} sortDesc={sortDesc} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={sortOrderHandler}>{!sortDesc?'Change to Descending Order': 'Change to Ascending Order'}</Button>
    </div>
  );
}

export default App;