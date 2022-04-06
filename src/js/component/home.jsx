import React, { useState, useEffect } from "react";

const Home = () => {
	const [color, setColor] = useState("red");

	useEffect(() => {});

	return (
		<div className="container">
			<div
				className="bg-dark mx-auto m-0 p-0"
				style={{ width: "20px", height: "50px" }}></div>
			<div className="col p-3 bg-dark mx-auto" style={{ width: "125px" }}>
				<div
					className="row rounded-circle border-dark bg-danger mx-auto"
					style={{ width: "75px", height: "75px" }}
					onClick={() => setColor("red")}
					id={color == "red" ? "shadow" : null}></div>
				<div
					className="row rounded-circle border-dark mx-auto bg-warning"
					style={{ width: "75px", height: "75px" }}
					onClick={() => setColor("yellow")}
					id={color == "yellow" ? "shadow" : null}></div>
				<div
					className="row rounded-circle bor=er-dark mx-auto bg-success"
					style={{ width: "75px", height: "75px" }}
					onClick={() => setColor("green")}
					id={color == "green" ? "shadow" : null}></div>
			</div>
		</div>
	);
};

export default Home;
