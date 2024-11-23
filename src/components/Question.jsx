import React from "react";
import "./components.css";
import { Form } from "react-bootstrap";

function Question(props) {
	const question = props.question;

	return (
		<>
			<div style={{ width: "100%" }}>
				<Form.Label key={question.id + "/formLabel"}>
					{question.name}
				</Form.Label>
				<select
					name={question.id + "/type"}
					key={question.id + "/qtypeinput"}
					style={{ margin: "10px" }}
				>
					<option
						value={question.type == null ? "text" : question.type}
						selected
						disabled
						hidden
						key={question.id + "/qoptiondefault"}
					>
						{question.type == null ? "text" : question.type}
					</option>
					<option value="text" key={question.id + "/qoptiontext"}>
						text
					</option>
					<option
						value="dropdown"
						key={question.id + "/qoptiondropdown"}
					>
						dropdown
					</option>
				</select>
				<br></br>
				<input
					type="text"
					name={question.id + "/text"}
					defaultValue={question.text}
					key={question.id + "/qtextinput"}
					style={{ width: "90%", margin: "10px" }}
				/>
				<br></br>
				<input
					type="text"
					name={question.id + "/options"}
					defaultValue={question.options}
					key={question.id + "/qtextoptions"}
					style={{ width: "90%", margin: "10px" }}
				/>
			</div>
		</>
	);
}

export default Question;
