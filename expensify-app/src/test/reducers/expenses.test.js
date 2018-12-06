import expencesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
   const state = expencesReducer(undefined, {type: '@@INIT' });
   expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = expencesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    };
    const state = expencesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// should add an expense
test('should add an expense', () => {
 const expense = {
   id: '109',
   description: 'Laptop',
   note: '',
   createdAt: 20000,
   amount: 29500
 };
 const action = {
   type: 'ADD_EXPENSE',
   expense
 };
 const state = expencesReducer(expenses, action);
 expect(state).toEqual([...expenses, expense]);
});

// should edit an expense
test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expencesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

// should not edit expense if expense not found
test('should edit expense if expense not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expencesReducer(expenses, action);
    expect(state).toEqual(expenses);
});