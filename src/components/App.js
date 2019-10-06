import React from 'react';
import LinkList from './LinkList';
import '../styles/App.css';
import Test from './Test';

const App = () => {
  return (
    <Test>
      {() => <div>props.children of the Test component, passed as a render prop.</div>}
    </Test>
  );
  // return <LinkList />;
}

export default App;
