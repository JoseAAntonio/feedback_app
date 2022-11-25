import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import React from "react";
import { FeedbackList } from "./components/FeedbackList";
import { Header } from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";

//the deleteFeedback is comming from 2 levels down where the event is firing off (button clicked) this is called 'prop drill'

export const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure?"))
			setFeedback(feedback.filter((item) => item.id !== id));
	};

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
};
