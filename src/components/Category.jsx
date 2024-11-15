import React from "react";
import "./components.css";
import { Form } from "react-bootstrap";

function Category(props) {
	const category = props.category;
	const label = props.label;
	const pick = props.pick;

	const rule = () => {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<hr
					style={{
						color: "white",
						backgroundColor: "white",
						height: "2px",
						width: "95vw",
					}}
				></hr>
			</div>
		);
	};

	return (
		<>
			<Form.Label className="categorylabel">
				<h2>{label}</h2>
			</Form.Label>
			<div className="categorywrap">
				{category.map((question) => (
					<div className="questiondiv">
						<Form.Group className="mb-3" controlId={question.name}>
							<Form.Label>{question.text}</Form.Label>
							<input
								type="text"
								className="textInput"
								name={question.name}
								defaultValue={pick[question.name]}
							/>
						</Form.Group>
					</div>
				))}
			</div>
			{rule()}
		</>
	);
}

export default Category;
