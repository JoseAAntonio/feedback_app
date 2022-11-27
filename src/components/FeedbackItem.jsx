import { FaTimes } from "react-icons/fa";
import { Card } from "./Shared/Card";
import { useContext } from "react";
import FeddbackContext from "./context/FeedbackContext";

//NOTE - to delete a item we have to move up to App.jsx where it is rendered

export const FeedbackItem = ({ item }) => {
	const { deleteFeedback } = useContext(FeddbackContext);
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};
