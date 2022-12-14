import { motion, AnimatePresence } from "framer-motion";
import { FeedbackItem } from "./FeedbackItem";
import { useContext } from "react";
import FeddbackContext from "./context/FeedbackContext";

export const FeedbackList = () => {
	const { feedback } = useContext(FeddbackContext);

	if (!feedback || feedback.length === 0) {
		return <p>No feedback Yet man :(</p>;
	}

	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

//NOTE - return without the animation
// 	return (
// 		<div className="feedback-list">
// 			{feedback.map((item) => (
// 				<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
// 			))}
// 		</div>
// 	);
// };
