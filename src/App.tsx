import MainCalcContainer from "./components/age_calculator/MainCalcContainer";

export default function () {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center bg-light-grey p-5 laptop:p-0">
			<MainCalcContainer />
		</main>
	);
}
