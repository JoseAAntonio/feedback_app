import { motion, AnimatePresence } from "framer-motion";
import { FeedbackItem } from "./FeedbackItem";

//passing prop handleDelete received in FeedbackItem

export const FeedbackList = ({ feedback, handleDelete }) => {
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
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={handleDelete}
						/>
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
