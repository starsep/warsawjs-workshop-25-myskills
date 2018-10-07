import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import QuestionView from './pages/QuestionView';

const App = () => (
  <div className="App">
    <PageHeader />
    <QuestionView />
  </div>
);

export default App;
