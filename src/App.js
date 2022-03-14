import React, { useState, useEffect } from 'react';

import './components/expensesApp.css';
import ExpensesHeader from './components/ExpensesHeader.js';
//import ExpensesMainContent from './components/ExpensesMainContent.js';
import InputForm from './components/InputForm';
import Table from './components/Table';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('list')) {
      setExpenseList(JSON.parse(localStorage.getItem('list')));
    }
  }, []);

  useEffect(() => {
    if (expenseList) {
      localStorage.setItem('list', JSON.stringify(expenseList));
    }
  }, [expenseList]);
  return (
    <Card border='info'>
      <ExpensesHeader />
      <InputForm expenseList={expenseList} setExpenseList={setExpenseList} />
      <Table expenseList={expenseList} setExpenseList={setExpenseList} />
    </Card>
  );
}
