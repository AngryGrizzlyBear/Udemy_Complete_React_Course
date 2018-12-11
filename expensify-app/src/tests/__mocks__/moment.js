// import moment from 'moment';
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
 return moment(timestamp);
};

// should render ExpenseForm with expense data
