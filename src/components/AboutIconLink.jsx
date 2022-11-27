import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AboutIconLink = () => {
	return (
		<div className="about-link">
			{/* não deve usar <a></a> pq causa o reload da pagina */}
			<Link to={"/about"}>
				<FaQuestion size={30} />
			</Link>
		</div>
	);
};
