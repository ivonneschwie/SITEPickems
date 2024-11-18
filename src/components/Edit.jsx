import React from "react";
import "./components.css";
import { Form, FormControl } from "react-bootstrap";
import moment from "moment";

function Edit(props) {
	return (
		<>
			<div
				style={{
					display: "flex",
					overflow: "scroll",
					width: "100%",
					height: "calc(85vh - 135px)",
					overflowX: "hidden",
					paddingBottom: "30px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					{props.esports.map((question) => (
						<div>
							<Form.Label key={question.id + "/formLabel"}>
								{question.name}
							</Form.Label>
							<br></br>
							<input
								type="text"
								className="qtext"
								name={question.id}
								defaultValue={question.text}
								key={question.id + "/qtextinput"}
							/>
							{/* <input
								type="datetime-local"
								className="qtime"
								name={question.id + "/time"}
								defaultValue={moment(question.date).format(
									"YYYY-MM-DDTkk:mm"
								)}
								key={question.id + "/timeinput"}
							/> */}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Edit;
