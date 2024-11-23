import React from "react";
import Question from "./Question";
import "./components.css";
import { Form } from "react-bootstrap";

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
						<Question question={question}></Question>
					))}
				</div>

				<div className="qcategorydiv">
					<h5>Site Got Talent</h5>
					{props.sgt.map((question) => (
						<Question question={question}></Question>
					))}
				</div>

				<div className="qcategorydiv">
					<h5>Mr. & Ms. SITE</h5>
					{props.msite.map((question) => (
						<Question question={question}></Question>
					))}
				</div>

				<div className="qcategorydiv">
					<h5>Misc</h5>
					{props.misc.map((question) => (
						<Question question={question}></Question>
					))}
				</div>
			</div>
		</>
	);
}

export default Edit;
