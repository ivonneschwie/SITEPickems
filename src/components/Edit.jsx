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
					flexDirection: "column",
					overflow: "scroll",
					width: "95vw !important",
					maxWidth: "600px !important",
					height: "calc(85vh - 140px)",
					overflowX: "hidden",
					padding: "5px 20px 30px 20px",
				}}
			>
				<div className="qcategorydiv">
					<h5>Esports</h5>
					{props.esports.map((question) => (
						<div style={{ width: "100%" }}>
							<Form.Label key={question.id + "/formLabel"}>
								{question.name.replace("esports", "") + ". "}
							</Form.Label>
							<input
								type="text"
								name={question.id}
								defaultValue={question.text}
								key={question.id + "/qtextinput"}
								style={{ width: "90%", margin: "10px" }}
							/>
						</div>
					))}
				</div>

				<div className="qcategorydiv">
					<h5>Site Got Talent</h5>
					{props.sgt.map((question) => (
						<div style={{ width: "100%" }}>
							<Form.Label key={question.id + "/formLabel"}>
								{question.name.replace("sgt", "") + ". "}
							</Form.Label>
							<input
								type="text"
								name={question.id}
								defaultValue={question.text}
								key={question.id + "/qtextinput"}
								style={{ width: "90%", margin: "10px" }}
							/>
						</div>
					))}
				</div>

				<div className="qcategorydiv">
					<h5>Mr. & Ms. SITE</h5>
					{props.msite.map((question) => (
						<div style={{ width: "100%" }}>
							<Form.Label key={question.id + "/formLabel"}>
								{question.name.replace("msite", "") + ". "}
							</Form.Label>
							<input
								type="text"
								name={question.id}
								defaultValue={question.text}
								key={question.id + "/qtextinput"}
								style={{ width: "90%", margin: "10px" }}
							/>
						</div>
					))}
				</div>

				<div className="qcategorydiv">
					<h5>Misc</h5>
					{props.misc.map((question) => (
						<div style={{ width: "100%" }}>
							<Form.Label key={question.id + "/formLabel"}>
								{question.name.replace("misc", "") + ". "}
							</Form.Label>
							<input
								type="text"
								name={question.id}
								defaultValue={question.text}
								key={question.id + "/qtextinput"}
								style={{ width: "90%", margin: "10px" }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Edit;
