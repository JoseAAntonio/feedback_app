import { FaTimes } from "react-icons/fa";
import { Card } from "./Shared/Card";

//NOTE - to delete a item we have to move up to App.jsx where it is rendered

export const FeedbackItem = ({ item, handleDelete }) => {
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};
