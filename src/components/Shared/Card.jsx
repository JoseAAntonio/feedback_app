//NOTE - 'children' são os menino dentro de 'FeedbackItem' envoltos no componente <Card /> trazidos e retornados neste arquivo

//NOTE - this component is a style component that takes wherever children wrapped in it(<Card />) and applies a certain style

//NOTE - intruducing conditional class - using tamplate string to condition a class if prop reverse is true

//NOTE - intruducing conditional style where, using ternary in the object style apply certain values to the component

export const Card = ({ children, reverse }) => {
	return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

	//return (
	// <div
	// 	className="card"
	// 	style={{
	// 		backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
	// 		color: reverse ? "#fff" : "#000",
	// 	}}
	// >
	// 	{children}
	// </div>
};

Card.defaultProps = {
	reverse: false,
};
