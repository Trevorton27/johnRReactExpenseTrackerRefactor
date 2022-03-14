import React, { useState } from 'react';

import { Button, Col, Form, Row, Table } from 'react-bootstrap';

const InputForm = ({ expenseList, setExpenseList }) => {
  const [dateSpent, setDateSpent] = useState('');
  const [amount, setAmount] = useState(0);
  const [expenseVendor, setExpenseVendor] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');

  function addExpense(e) {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      date: dateSpent,
      amount: amount,
      vendor: expenseVendor,
      description: expenseDescription
    };

    const resetForm = () => {
      setDateSpent('');
      setExpenseVendor('');
      setDateSpent('');
      setAmount(0.0);
      setExpenseDescription('');
    };
    setExpenseList([...expenseList, newExpense]);
    resetForm();
  }
  return (
    <Form noValidate className='mx-2 p-2 border'>
      <Row>
        <Col md>
          <Form.Group controlId='formDate'>
            <Form.Label>Date you paid</Form.Label>
            <Form.Control
              type='date'
              placeholder='Date you Paid'
              onChange={(e) => setDateSpent(e.target.value)}
              value={dateSpent}
              name='dateSpent'
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group controlId='formAmount'>
            <Form.Label>Amount Paid</Form.Label>
            <Form.Control
              type='number'
              placeholder='Amount Paid'
              onChange={(e) => setAmount(e.target.value)}
              name='amount'
              value={amount} // This "value={}" is how to impliment React controlled components
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group controlId='formVendor'>
          <Form.Label>Vendor?</Form.Label>
          <Form.Control
            type='text'
            placeholder='Type Vendor'
            onChange={(e) => setExpenseVendor(e.target.value)}
            name='expenseVendor'
            value={expenseVendor} // React sometimes will complain that there are un-controlled components if this isn't done.
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group controlId='formTextArea'>
          <Form.Label>Type a description of what you paid</Form.Label>
          <Form.Control
            type='text'
            rows={3}
            placeholder='Type a description of what you paid'
            onChange={(e) => setExpenseDescription(e.target.value)}
            name='expenseDescription'
            value={expenseDescription} // React sometimes will complain that there are un-controlled components if this isn't done.
          />
        </Form.Group>
      </Row>

      <Button
        type='submit'
        size='sm'
        variant='primary'
        className='mx-5 p-2 my-1'
        spacing='15'
        onClick={addExpense}
      >
        Add Your Expense $ to the list ⇥
      </Button>
    </Form>
  );
};

export default InputForm;
