import { useState } from "react";
import React from "react";
import { FeedbackList } from "./components/FeedbackList";
import { Header } from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import { FeedbackStats } from "./components/FeedbackStats";

//the deleteFeedback is comming from 2 levels down where the event is firing off (button clicked) this is called 'prop drill'

export const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure?"))
			setFeedback(feedback.filter((item) => item.id !== id));
	};

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
};
