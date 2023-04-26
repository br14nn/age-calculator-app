type InputFieldWithTopLabelProps = {
	label: string;
	placeholder?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: string;
	borderErrClr?: string;
	labelErrClr?: string;
	errMessage?: string;
	id?: string;
};

export default function (props: InputFieldWithTopLabelProps) {
	return (
		<div className="flex h-[86px] flex-col justify-start">
			<label
				htmlFor={props.id}
				className={`text-[0.65rem] tracking-[0.15rem] mobile-xs:text-sm mobile-xs:tracking-[0.2rem] ${props.labelErrClr}`}
			>
				{props.label}
			</label>
			<input
				id={props.id}
				className={`w-[100%] rounded-md border-[1px] px-4 py-[6px] text-base outline-none focus:border-purple mobile-xs:text-xl mobile:px-5 mobile:text-2xl laptop:w-[130px] ${props.borderErrClr}`}
				type="number"
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value}
			/>
			<span className="mt-1 text-[0.6rem] font-light italic text-light-red laptop:text-2xs">
				{props.errMessage}
			</span>
		</div>
	);
}
