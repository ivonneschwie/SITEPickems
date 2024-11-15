import "./App.css";
import { Component, useEffect, useState } from "react";
import {
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Pickems from "./components/Pickems";
import "bootstrap/dist/css/bootstrap.min.css";
import crown from "./assets/crown.png";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (result) => {
			if (result) {
				const { displayName, email } = result;
				setUserData({ displayName, email });

				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		});

		return () => unsubscribe();
	}, []);

	const SignUpUsingGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const { displayName, email } = result.user;
				setUserData({ displayName, email });

				setIsLoggedIn(true);
			})
			.catch((error) => {
				console.log({ error });
			});
	};

	const Logout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				setUserData({});
				setIsLoggedIn(false);
			})
			.catch((error) => {
				// An error happened.
				console.log({ error });
			});
	};

	return (
		<div className="App">
			{!isLoggedIn && (
				<div className="login-background">
					<div className="login-div">
						<h1
							style={{
								color: "#DCE0DF",
								textAlign: "center",
							}}
						>
							<img
								src={crown}
								style={{ width: 80, height: 60 }}
							/>
							<br></br>
							SITE<br></br> PICKEMS
						</h1>
						<button
							onClick={SignUpUsingGoogle}
							type="button"
							className="login-with-google-btn"
						>
							Sign in with Google
						</button>
					</div>
				</div>
			)}

			{isLoggedIn && (
				<Pickems
					displayName={userData.displayName}
					email={userData.email}
					Logout={Logout}
				></Pickems>
			)}
		</div>
	);
}

export default App;
