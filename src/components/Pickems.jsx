import React from "react";
import Header from "./Header";
import "./components.css";
import { db } from "../firebase/firebaseConfig";
import {
	doc,
	getDocs,
	collection,
	query,
	orderBy,
	where,
	updateDoc,
	addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

function Pickems(props) {
	const [pick, setPick] = useState([]);
	const [esports, setesports] = useState([]);
	const [sgt, setsgt] = useState([[]]);
	const [msite, setmsite] = useState([]);
	const [misc, setmisc] = useState([]);

	useEffect(() => {
		const pickemsquery = query(
			collection(db, "pickems"),
			where("email", "==", props.email)
		);

		getDocs(pickemsquery).then((snapshot) => {
			snapshot.forEach((doc) => {
				setPick({
					...doc.data(),
					id: doc.id,
				});
			});
		});

		const esportsquery = getquery("esports");
		getDocs(esportsquery).then((snapshot) => {
			const q = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));

			setesports(q);
		});

		const sgtsquery = getquery("sgt");
		getDocs(sgtsquery).then((snapshot) => {
			const q = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));

			setsgt(q);
		});

		const msitequery = getquery("msite");
		getDocs(msitequery).then((snapshot) => {
			const q = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));

			setmsite(q);
		});

		const miscquery = getquery("misc");
		getDocs(miscquery).then((snapshot) => {
			const q = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));

			setmisc(q);
		});
	});

	const getquery = (category) => {
		return query(
			collection(db, "questions"),
			where("name", ">=", category),
			where("name", "<=", category + "\uf8ff"),
			orderBy("name")
		);
	};

	const updatePicks = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const payload = Object.fromEntries(formData);
		payload["email"] = props.email;

		console.log(payload);

		const pickemsquery = query(
			collection(db, "pickems"),
			where("email", "==", props.email)
		);

		getDocs(pickemsquery).then((snapshot) => {
			if (snapshot.size == 0) {
				addDoc(collection(db, "pickems"), payload);
			} else {
				updateDoc(doc(db, "pickems", pick.id), payload);
			}
		});
	};

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
			<div className="Pickems">
				<Header displayName={props.displayName} Logout={props.Logout} />

				<div style={{ color: "white" }}>
					<form onSubmit={updatePicks}>
						<Form.Label className="categorylabel">
							<h2>ESPORTS</h2>
						</Form.Label>
						<div className="categorywrap">
							{esports.map((question) => (
								<div className="questiondiv">
									<Form.Group
										className="mb-3"
										controlId={question.name}
									>
										<Form.Label>{question.text}</Form.Label>
										<Form.Control
											type="text"
											name={question.name}
											defaultValue={pick[question.name]}
											style={{
												width: "150px",
												margin: "10px 10px 15px 10px",
												position: "absolute",
												bottom: "0px",
												left: "0px",
											}}
										/>
									</Form.Group>
								</div>
							))}
						</div>
						{rule()}

						<Form.Label className="categorylabel">
							<h2>SITE GOT TALENT</h2>
						</Form.Label>
						<div className="categorywrap">
							{sgt.map((question) => (
								<div className="questiondiv">
									<Form.Group
										className="mb-3"
										controlId={question.name}
									>
										<Form.Label>{question.text}</Form.Label>
										<Form.Control
											type="text"
											name={question.name}
											defaultValue={pick[question.name]}
											style={{
												width: "150px",
												margin: "10px 10px 15px 10px",
												position: "absolute",
												bottom: "0px",
												left: "0px",
											}}
										/>
									</Form.Group>
								</div>
							))}
						</div>
						{rule()}

						<Form.Label className="categorylabel">
							<h2>MR.&MS. SITE</h2>
						</Form.Label>
						<div className="categorywrap">
							{msite.map((question) => (
								<div className="questiondiv">
									<Form.Group
										className="mb-3"
										controlId={question.name}
									>
										<Form.Label>{question.text}</Form.Label>
										<Form.Control
											type="text"
											name={question.name}
											defaultValue={pick[question.name]}
											style={{
												width: "150px",
												margin: "10px 10px 15px 10px",
												position: "absolute",
												bottom: "0px",
												left: "0px",
											}}
										/>
									</Form.Group>
								</div>
							))}
						</div>
						{rule()}

						<Form.Label className="categorylabel">
							<h2>MISC</h2>
						</Form.Label>
						<div className="categorywrap">
							{misc.map((question) => (
								<div className="questiondiv">
									<Form.Group
										className="mb-3"
										controlId={question.name}
									>
										<Form.Label>{question.text}</Form.Label>
										<Form.Control
											type="text"
											name={question.name}
											defaultValue={pick[question.name]}
											style={{
												width: "150px",
												margin: "10px 10px 15px 10px",
												position: "absolute",
												bottom: "0px",
												left: "0px",
											}}
										/>
									</Form.Group>
								</div>
							))}
						</div>

						<div className="Submitdiv">
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</div>
					</form>
				</div>

				<div style={{ height: "60px", width: "100vw" }}></div>
			</div>
		</>
	);
}

export default Pickems;
