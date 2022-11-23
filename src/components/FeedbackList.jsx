import { FeedbackItem } from "./FeedbackItem";

//passing prop handleDelete received in FeedbackItem

export const FeedbackList = ({ feedback, handleDelete }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No feedback Yet man :(</p>;
	}

	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
			))}
		</div>
	);
};
