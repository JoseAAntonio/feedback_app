//NOTE - uuid - lib for generating unic ids

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { FeedbackList } from "./components/FeedbackList";
import { Header } from "./components/Header";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";
import { About } from "./pages/About";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import { AboutIconLink } from "./components/AboutIconLink";

//the deleteFeedback is comming from 2 levels down where the event is firing off (button clicked) this is called 'prop drill'

export const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path="/about" element={<About />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	);
};
