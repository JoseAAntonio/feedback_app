//NOTE - uuid - lib for generating unic ids
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { FeedbackList } from "./components/FeedbackList";
import { Header } from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";
import { About } from "./pages/About";
import { AboutIconLink } from "./components/AboutIconLink";

//the deleteFeedback is comming from 2 levels down where the event is firing off (button clicked) this is called 'prop drill'

export const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		//NOTE - populating the feedback with the user input
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure?"))
			setFeedback(feedback.filter((item) => item.id !== id));
	};

	return (
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
							</>
						}
					></Route>
					<Route path="/about" element={<About />} />
				</Routes>
				<AboutIconLink />
			</div>
		</Router>
	);
};
