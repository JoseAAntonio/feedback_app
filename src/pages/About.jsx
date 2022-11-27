import { Link } from "react-router-dom";
import { Card } from "../components/Shared/Card";

export const About = () => {
	return (
		<Card>
			<h1>This is the about page</h1>
			<p>This is about the App</p>
			<p>Wherever...</p>
			<p>
				<Link to={"/"}>Back Home</Link>
			</p>
		</Card>
	);
};
