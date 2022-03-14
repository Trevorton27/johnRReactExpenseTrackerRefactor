// import React, { useState, useEffect } from 'react';

// import { Button, Card, Col, Row, Table } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import InputForm from './InputForm';

// export default function ExpensesMainContent() {
//   const [expenseList, setExpenseList] = useState([]);

//   useEffect(() => {
//     if (localStorage.getItem('list')) {
//       setExpenseList(JSON.parse(localStorage.getItem('list')));
//     }
//   }, []);

//   useEffect(() => {
//     if (expenseList) {
//       localStorage.setItem('list', JSON.stringify(expenseList));
//     }
//   }, [expenseList]);

//   const expensesElementsToRender = allExpensesArray.map((expense) => {
//     return (
//       <Row key={expense.id} className='py-1'>
//         <Col className='px-5' xs={8}>
//           <Card body className='mx-1 my-1' border='success'>
//             <Row className='text-success py-1'>
//               <Col>On {expense.dateSpent}</Col>
//               <Col>{formatToStringMoneyAmount(expense.amount)}</Col>
//             </Row>
//             <Row>
//               <Col className='text-success py-1'>
//                 Where: {expense.expenseVendor}
//               </Col>
//               <Col xl={4} className='text-primary py-1'>
//                 Desc: {expense.expenseDescription}
//               </Col>
//             </Row>
//           </Card>
//         </Col>
//         <Col className='pt-5'>
//           <Button
//             onClick={() => deleteExpense(expense.id)}
//             key={expense.id}
//             variant='outline-danger'
//             className=''
//           >
//             Delete This Expense
//             <br />
//             {formatToStringMoneyAmount(expense.amount).slice(0, 11)}
//           </Button>
//         </Col>
//       </Row>
//     );
//   });

//   return (
//     <Card body className='mx-1 my-1' border='success'>
//       {/* <InputForm setExpenseList={setExpenseList} /> */}
//       {/* <Table
//         striped
//         responsive='md'
//         variant='dark'
//         border={2}
//         className='px-1'
//       ></Table> */}
//     </Card>
//   );
// }
