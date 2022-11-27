import { useContext } from "react";
import FeddbackContext from "./context/FeedbackContext";

export const FeedbackStats = () => {
	const { feedback } = useContext(FeddbackContext);
	//NOTE -  Calculate ratings avg
	let avarage =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	//NOTE - allowing only one decimal
	avarage = avarage.toFixed(1).replace(/[.,]0$/, "");

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage}</h4>
		</div>
	);
};
