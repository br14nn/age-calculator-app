export default class ValidationError {
	constructor(public bday: { dayInput: number; monthInput: number; yearInput: number }) {}

	validationError() {
		if (
			this.getIfDayInputIsError().error == true ||
			this.getIfMonthInputIsError().error == true ||
			this.getIfYearInputIsError().error == true
		) {
			return true;
		}
		return false;
	}

	getIfDayInputIsError() {
		const errorStyle = {
			error: false,
			labelStyle: "text-smokey-grey",
			borderStyle: "border-light-grey",
			message: "",
		};

		const { dayInput, monthInput } = this.bday;

		if (dayInput.toString() == "NaN") {
			errorStyle.error = true;
			errorStyle.labelStyle = "text-light-red";
			errorStyle.borderStyle = "border-light-red";
			errorStyle.message = "This field is required";
		} else if (dayInput > 31 || dayInput <= 0) {
			errorStyle.error = true;
			errorStyle.labelStyle = "text-light-red";
			errorStyle.borderStyle = "border-light-red";
			errorStyle.message = "Must be a valid day";
		}

		if (monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11) {
			if (dayInput > 30 || dayInput <= 0) {
				errorStyle.error = true;
				errorStyle.labelStyle = "text-light-red";
				errorStyle.borderStyle = "border-light-red";
				errorStyle.message = "Must be a valid date";
			}
		}

		if (monthInput == 2) {
			if (dayInput > 29 || dayInput <= 0) {
				errorStyle.error = true;
				errorStyle.labelStyle = "text-light-red";
				errorStyle.borderStyle = "border-light-red";
				errorStyle.message = "Must be a valid date";
			}
		}

		return errorStyle;
	}

	getIfMonthInputIsError() {
		const errorStyle = {
			error: false,
			labelStyle: "text-smokey-grey",
			borderStyle: "border-light-grey",
			message: "",
		};

		const { dayInput, monthInput } = this.bday;

		if (monthInput.toString() == "NaN") {
			errorStyle.error = true;
			errorStyle.labelStyle = "text-light-red";
			errorStyle.borderStyle = "border-light-red";
			errorStyle.message = "This field is required";
		} else if (monthInput > 12 || monthInput < 1) {
			errorStyle.error = true;
			errorStyle.labelStyle = "text-light-red";
			errorStyle.borderStyle = "border-light-red";
			errorStyle.message = "Must be a valid month";
		}

		if (monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11) {
			if (dayInput > 30 || dayInput <= 0) {
				errorStyle.error = true;
				errorStyle.labelStyle = "text-light-red";
				errorStyle.borderStyle = "border-light-red";
				errorStyle.message = "";
			}
		}

		if (monthInput == 2) {
			if (dayInput > 29 || dayInput <= 0) {
				errorStyle.error = true;
				errorStyle.labelStyle = "text-light-red";
				errorStyle.borderStyle = "border-light-red";
				errorStyle.message = "";
			}
		}

		return errorStyle;
	}

	getIfYearInputIsError() {
		const date = new Date();
		const errorStyle = {
			error: false,
			labelStyle: "text-smokey-grey",
			borderStyle: "border-light-grey",
			message: "",
		};

		const { dayInput, monthInput, yearInput } = this.bday;

		if (yearInput.toString() == "NaN") {
			errorStyle.error = true;
			errorStyle.labelStyle = "text-light-red";
			errorStyle.borderStyle = "border-light-red";
			errorStyle.message = "This field is required";
		} else if (yearInput > date.getFullYear()) {
			errorStyle.error = true;
			errorStyle.labelStyle = "text-light-red";
			errorStyle.borderStyle = "border-light-red";
			errorStyle.message = "Must be in the past";
		}

		if (monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11) {
			if (dayInput > 30 || dayInput <= 0) {
				errorStyle.error = true;
				errorStyle.labelStyle = "text-light-red";
				errorStyle.borderStyle = "border-light-red";
				errorStyle.message = "";
			}
		}

		if (monthInput == 2) {
			if (dayInput > 29 || dayInput <= 0) {
				errorStyle.error = true;
				errorStyle.labelStyle = "text-light-red";
				errorStyle.borderStyle = "border-light-red";
				errorStyle.message = "";
			}
		}

		return errorStyle;
	}
}
