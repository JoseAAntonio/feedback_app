import { useState } from "react";
import { Button } from "./Shared/Button";
import { Card } from "./Shared/Card";

export const FeedbackForm = () => {
	const [text, setText] = useState("");

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	return (
		<Card>
			<form>
				<h2>How would you rate our services?</h2>
				{/* //TODO - rating select component */}
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Weite your review"
						value={text}
					/>
					<Button type="submit">Send</Button>
				</div>
			</form>
		</Card>
	);
};
