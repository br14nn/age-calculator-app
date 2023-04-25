type AgeResultProps = {
	result: string;
	label: string;
	refer?: any;
};

export default function (props: AgeResultProps) {
	return (
		<p className="mt-1 text-[3.5rem] font-bold italic leading-none mobile:text-6xl laptop:text-7xl">
			<span ref={props.refer} className="text-purple">
				{props.result}{" "}
			</span>
			<span>{props.label}</span>
		</p>
	);
}
