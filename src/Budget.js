const dayjs = require('dayjs');

class Budget {
	constructor(yearMonth, amount) {
		this.yearMonth = yearMonth
		this. amount = amount
	}
	
	dayBudget() {
		return this.amount / dayjs(this.yearMonth).daysInMonth()
	}
}

module.exports = Budget