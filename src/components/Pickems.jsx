import React from "react";
import Header from "./Header";
import Category from "./Category";
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

	return (
		<>
			<div className="Pickems">
				<Header displayName={props.displayName} Logout={props.Logout} />

				<div style={{ color: "white" }}>
					<form onSubmit={updatePicks}>
						<Category
							category={esports}
							label="ESPORTS"
							pick={pick}
						></Category>

						<Category
							category={sgt}
							label="SITE GOT TALENT"
							pick={pick}
						></Category>

						<Category
							category={msite}
							label="MR. & MS. SITE"
							pick={pick}
						></Category>

						<Category
							category={misc}
							label="MISC"
							pick={pick}
						></Category>

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
