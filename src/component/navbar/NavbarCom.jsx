import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import { auth, FirebaseContext } from "../context/FireContext";
import "./Navbar.css";
const NavbarCom = () => {
  const { usersCollection } = useContext(FirebaseContext);
  // const { userData } = useContext(currentUser);
  const [userData] = useAuthState(auth);
  const query =
    userData?.uid && usersCollection.where("uid", "==", userData.uid);
  const [currentUser] = useCollectionData(query, { idField: "id" });
  var hidden = currentUser ? "hidden" : "";
  var hiddenLogout = !currentUser ? "hidden" : "";
  var x;
  var z;
  currentUser ? (x = currentUser[0]?.photoURL) : console.log(false);
  currentUser ? (z = currentUser[0]?.displayName) : console.log(false);
  return (
    <div>
      <Navbar className="nav" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Astro</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Link
                className="text-decoration-none text-uppercase navList-color list-item list-menu-item1 text-center mt-4 mt-lg-0 py-1 px-3"
                to="/"
              >
                home
              </Link>
              <Link
                className="text-decoration-none text-uppercase navList-color list-item list-menu-item2 sm-shadow text-center py-1 px-3"
                to="/features"
              >
                features
              </Link>
              <Link
                className="text-decoration-none text-uppercase navList-color list-item list-menu-item3 sm-shadow text-center py-1 px-3"
                to=""
              >
                contact us
              </Link>
              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item4 sm-shadow text-center py-1 px-3 ${hidden}`}
                to="/SignUp"
              >
                sign up
              </Link>
              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item4 sm-shadow text-center py-1 px-3 ${hidden}`}
                to="/signIn"
              >
                log in
              </Link>
              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item5 sm-shadow text-center py-1 px-3 ${hiddenLogout}`}
                to="/ChatView"
              >
                view chat
              </Link>
              <Link
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item5 sm-shadow text-center py-1 px-3 ${hiddenLogout}`}
                to="/Entrypage"
              >
                Board
              </Link>
              <button
                className={`text-decoration-none text-uppercase navList-color list-item list-menu-item2 sm-shadow text-center py-1 px-3 border-0 bg-transparent ${hiddenLogout}`}
                onClick={() => auth.signOut()}
              >
                Logout
              </button>
              <img
                src={x}
                alt=""
                className={`width ${hiddenLogout}`}
                title={z}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCom;
