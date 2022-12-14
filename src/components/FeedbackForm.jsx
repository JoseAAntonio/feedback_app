import { useState, useContext } from "react";
import { RatingSelect } from "./RatingSelect";
import { Button } from "./Shared/Button";
import { Card } from "./Shared/Card";
import FeddbackContext from "./context/FeedbackContext";

export const FeedbackForm = () => {
	const { addFeedback } = useContext(FeddbackContext);

	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	//NOTE - form realtime validation
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");

	const handleTextChange = (e) => {
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage("Text must be at least 10 characters long");
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	//NOTE - on submit we´re pushing the text and rating tiped in by the user into a new object (newFeedback)
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};
			addFeedback(newFeedback);

			setText("");
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our services?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Weite your review"
						value={text}
					/>
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
};
