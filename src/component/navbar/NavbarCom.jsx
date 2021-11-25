import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import { auth, FirebaseContext } from "../context/FireContext";
import { Link as ScrollLink } from "react-scroll";
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
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="pointer text-decoration-none text-uppercase navList-color list-item list-menu-item2 sm-shadow text-center py-1 px-3"
              >
                features
              </ScrollLink>
              <ScrollLink
                to="footer"
                smooth={true}
                duration={100}
                className="pointer text-decoration-none text-uppercase navList-color list-item list-menu-item3 sm-shadow text-center py-1 px-3"
              >
                contact us
              </ScrollLink>

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
                to="/Entrypage"
              >
                Board
              </Link>
              <Link
                className={`chat text-decoration-none text-uppercase navList-color list-item list-menu-item5 sm-shadow text-center py-1 px-3 ${hiddenLogout}`}
                to="/ChatView"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#013e5a"
                  className="bi bi-chat-fill"
                  viewBox="0 0 16 16"
                  stroke="white"
                  strokeWidth="1"
                >
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                </svg>
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
