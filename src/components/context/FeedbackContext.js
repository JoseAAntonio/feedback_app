import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeddbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "this is item number 1",
			rating: 10,
		},
		{
			id: 1,
			text: "this is item number 2",
			rating: 6,
		},
		{
			id: 1,
			text: "this is item number 3",
			rating: 8,
		},
	]);

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
		<FeddbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
			}}
		>
			{children}
		</FeddbackContext.Provider>
	);
};

export default FeddbackContext;
