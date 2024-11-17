import React from "react";
import Header from "./Header";
import Crystalball from "./Crystalball";
import Picks from "./Picks";
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
import { Tab, Tabs } from "react-bootstrap";

function Pickems(props) {
	const [key, setKey] = useState("picks");
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
				date: doc.data().time.toDate(),
			}));

			setesports(q);
		});

		const sgtsquery = getquery("sgt");
		getDocs(sgtsquery).then((snapshot) => {
			const q = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
				date: doc.data().time.toDate(),
			}));

			setsgt(q);
		});

		const msitequery = getquery("msite");
		getDocs(msitequery).then((snapshot) => {
			const q = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
				date: doc.data().time.toDate(),
			}));

			setmsite(q);
		});

		const miscquery = getquery("misc");
		getDocs(miscquery).then((snapshot) => {
			const q = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
				date: doc.data().time.toDate(),
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

	const pushpick = (category, val) => {

		const payload = {
			email: props.email,
			[category]: val
		}
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
	}

	return (
		<>
			<div className="Pickems">
				<Header displayName={props.displayName} Logout={props.Logout} />
				<Tabs
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className="mb-3"
					id="pickemstabs"
					fill
					style={{
						fontFamily: "Freshman",
					}}
				>
					<Tab
						eventKey="picks"
						className="mb-3"
						id="picktab"
						title="Picks"
					>
						<Picks pushpick={pushpick} pick={pick} ></Picks>
					</Tab>
					<Tab
						eventKey="crystalball"
						className="mb-3"
						title="Crystal Ball"
					>
						<Crystalball
							pick={pick}
							esports={esports}
							sgt={sgt}
							msite={msite}
							misc={misc}
							updatePicks={updatePicks}
						></Crystalball>
					</Tab>
				</Tabs>
			</div>
		</>
	);
}

export default Pickems;
