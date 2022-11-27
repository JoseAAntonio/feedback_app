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

	//NOTE - global state set to edit our review
	const [feedbackEdit, setFeedbackEdit] = useState({
		//NOTE - the empity object will receive the item we want to edit
		item: {},
		edit: false,
	});

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		//NOTE - populating the feedback with the user input
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure?"))
			setFeedback(feedback.filter((item) => item.id !== id));
	};

	//NOTE - set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		<FeddbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
			}}
		>
			{children}
		</FeddbackContext.Provider>
	);
};

export default FeddbackContext;
