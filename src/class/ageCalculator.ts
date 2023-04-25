export default class AgeCalculator {
	constructor(public birthday: { bdayDay: number; bdayMonth: number; bdayYear: number }) {}

	ageInYears() {
		const date: Date = new Date();
		const { bdayDay, bdayMonth, bdayYear } = this.birthday;
		const fullDate = {
			currentDay: date.getDate(),
			currentMonth: date.getMonth() + 1,
			currentYear: date.getFullYear(),
		};
		const { currentDay, currentMonth, currentYear } = fullDate;
		let defaultYearsAge: number = currentYear - bdayYear;

		if (currentMonth < bdayMonth) {
			defaultYearsAge = defaultYearsAge - 1;
		} else if (currentMonth === bdayMonth && currentDay < bdayDay) {
			defaultYearsAge = defaultYearsAge - 1;
		}

		return defaultYearsAge;
	}

	ageInMonths() {
		const date: Date = new Date();
		const { bdayMonth, bdayDay } = this.birthday;
		const fullDate = {
			currentDay: date.getDate(),
			currentMonth: date.getMonth() + 1,
			currentYear: date.getFullYear(),
		};
		const { currentDay, currentMonth } = fullDate;
		let monthsAge: number = currentMonth - bdayMonth;

		if (currentMonth < bdayMonth) {
			monthsAge = 12 - (bdayMonth - currentMonth);
		}

		if (currentMonth == bdayMonth) {
			if (currentDay < bdayDay) {
				monthsAge = 11;
			}
		}

		return monthsAge;
	}

	ageInDays() {
		const date: Date = new Date();
		const { bdayMonth, bdayDay } = this.birthday;
		const fullDate = {
			currentDay: date.getDate(),
			currentMonth: date.getMonth() + 1,
			currentYear: date.getFullYear(),
		};
		const { currentDay, currentMonth } = fullDate;
		let daysAge: number = 31 - (bdayDay - currentDay);

		if (currentDay > bdayDay) {
			daysAge = currentDay - bdayDay;
		}

		if (currentDay == bdayDay) {
			daysAge = 0;
		}

		return daysAge;
	}
}
