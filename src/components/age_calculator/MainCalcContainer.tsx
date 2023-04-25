import { useReducer, useState } from "react";
import { useAnimate } from "framer-motion";
import ValidationError from "../../class/ValidationError";
import AgeCalculator from "../../class/ageCalculator";
import Arrow from "../../assets/icon-arrow.svg";
import AgeResult from "./AgeResult";
import InputFieldWithTopLabel from "../general_components/InputFieldWithTopLabel";

const birthdayInitState = {
	day: "",
	month: "",
	year: "",
};

type birthdayState = {
	day: string;
	month: string;
	year: string;
};

type birthdayActionState = {
	inputName: string;
	newValue: string;
};

const ageReducer = (state: birthdayState, actionState: birthdayActionState) => {
	return {
		...state,
		[actionState.inputName]: actionState.newValue,
	};
};

type ErrMsgsType = {
	dayInput: {
		labelStyle: string;
		borderStyle: string;
		message: string;
	};
	monthInput: {
		labelStyle: string;
		borderStyle: string;
		message: string;
	};
	yearInput: {
		labelStyle: string;
		borderStyle: string;
		message: string;
	};
};

type DetailedAgeType = {
	ageInYears: string;
	ageInMonths: string;
	ageInDays: string;
};

export default function () {
	const [state, dispatch] = useReducer(ageReducer, birthdayInitState);
	const [errMsgs, setErrMsgs] = useState<ErrMsgsType>({
		dayInput: {
			labelStyle: "text-smokey-grey",
			borderStyle: "border-light-grey",
			message: "",
		},
		monthInput: {
			labelStyle: "text-smokey-grey",
			borderStyle: "border-light-grey",
			message: "",
		},
		yearInput: {
			labelStyle: "text-smokey-grey",
			borderStyle: "border-light-grey",
			message: "",
		},
	});
	const [detailedAge, setDetailedAge] = useState<DetailedAgeType>({
		ageInDays: "- -",
		ageInMonths: "- -",
		ageInYears: "- -",
	});
	const [yearsDispScope, yearsDispAnimate] = useAnimate();
	const [monthsDispScope, monthsDispAnimate] = useAnimate();
	const [daysDispScope, daysDispAnimate] = useAnimate();

	const formSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const bdayValidation = new ValidationError({
			dayInput: parseInt(state.day),
			monthInput: parseInt(state.month),
			yearInput: parseInt(state.year),
		});

		const ageCalculator = new AgeCalculator({
			bdayDay: parseInt(state.day),
			bdayMonth: parseInt(state.month),
			bdayYear: parseInt(state.year),
		});

		if (bdayValidation.validationError() == false) {
			yearsDispAnimate(yearsDispScope.current, { opacity: 0 }, { duration: 0.1 });
			monthsDispAnimate(monthsDispScope.current, { opacity: 0 }, { duration: 0.1 });
			daysDispAnimate(daysDispScope.current, { opacity: 0 }, { duration: 0.1 });

			setTimeout(() => {
				setDetailedAge({
					ageInDays: ageCalculator.ageInDays().toString(),
					ageInMonths: ageCalculator.ageInMonths().toString(),
					ageInYears: ageCalculator.ageInYears().toString(),
				});
				yearsDispAnimate(yearsDispScope.current, { opacity: 1 }, { duration: 0.1, delay: 0.1 });
				monthsDispAnimate(monthsDispScope.current, { opacity: 1 }, { duration: 0.1, delay: 0.3 });
				daysDispAnimate(daysDispScope.current, { opacity: 1 }, { duration: 0.1, delay: 0.5 });
			}, 100);
		} else {
			yearsDispAnimate(yearsDispScope.current, { opacity: 0 }, { duration: 0.1 });
			monthsDispAnimate(monthsDispScope.current, { opacity: 0 }, { duration: 0.1 });
			daysDispAnimate(daysDispScope.current, { opacity: 0 }, { duration: 0.1 });

			setTimeout(() => {
				setDetailedAge({
					ageInDays: "- -",
					ageInMonths: "- -",
					ageInYears: "- -",
				});
				yearsDispAnimate(yearsDispScope.current, { opacity: 1 }, { duration: 0.1 });
				monthsDispAnimate(monthsDispScope.current, { opacity: 1 }, { duration: 0.1 });
				daysDispAnimate(daysDispScope.current, { opacity: 1 }, { duration: 0.1 });
			}, 100);
		}

		setErrMsgs({
			dayInput: {
				labelStyle: bdayValidation.getIfDayInputIsError().labelStyle,
				borderStyle: bdayValidation.getIfDayInputIsError().borderStyle,
				message: bdayValidation.getIfDayInputIsError().message,
			},
			monthInput: {
				labelStyle: bdayValidation.getIfMonthInputIsError().labelStyle,
				borderStyle: bdayValidation.getIfMonthInputIsError().borderStyle,
				message: bdayValidation.getIfMonthInputIsError().message,
			},
			yearInput: {
				labelStyle: bdayValidation.getIfYearInputIsError().labelStyle,
				borderStyle: bdayValidation.getIfYearInputIsError().borderStyle,
				message: bdayValidation.getIfYearInputIsError().message,
			},
		});
	};

	return (
		<section className="rounded-t-xl rounded-bl-xl rounded-br-[5rem] bg-white px-7 py-10 mobile:px-10 mobile:py-10 laptop:rounded-br-[10rem]">
			<form onSubmit={formSubmit}>
				<div className="flex flex-row items-center justify-center gap-4 laptop:justify-normal laptop:gap-5">
					<InputFieldWithTopLabel
						labelErrClr={errMsgs.dayInput.labelStyle}
						borderErrClr={errMsgs.dayInput.borderStyle}
						label="DAY"
						placeholder="DD"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							dispatch({ inputName: "day", newValue: e.currentTarget.value })
						}
						value={state.day}
						errMessage={errMsgs.dayInput.message}
					/>
					<InputFieldWithTopLabel
						labelErrClr={errMsgs.monthInput.labelStyle}
						borderErrClr={errMsgs.monthInput.borderStyle}
						label="MONTH"
						placeholder="MM"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							dispatch({ inputName: "month", newValue: e.currentTarget.value })
						}
						value={state.month}
						errMessage={errMsgs.monthInput.message}
					/>
					<InputFieldWithTopLabel
						labelErrClr={errMsgs.yearInput.labelStyle}
						borderErrClr={errMsgs.yearInput.borderStyle}
						label="YEAR"
						placeholder="YYYY"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							dispatch({ inputName: "year", newValue: e.currentTarget.value })
						}
						value={state.year}
						errMessage={errMsgs.yearInput.message}
					/>
				</div>

				<div className="my-7 flex h-[77.65px] w-full flex-col items-center justify-center laptop:my-0 laptop:w-[550px] laptop:flex-row">
					<hr className="w-full border-light-grey" />
					<button
						type="submit"
						className="fixed rounded-full bg-purple p-5 hover:bg-off-black laptop:static laptop:block"
					>
						<img
							src={Arrow}
							className="h-{35px} w-[35px] mobile:h-[auto] mobile:w-[auto]"
							alt="downArrowImage"
						/>
					</button>
				</div>
			</form>

			<section>
				<AgeResult refer={yearsDispScope} result={detailedAge.ageInYears} label="years" />
				<AgeResult refer={monthsDispScope} result={detailedAge.ageInMonths} label="months" />
				<AgeResult refer={daysDispScope} result={detailedAge.ageInDays} label="days" />
			</section>
		</section>
	);
}
