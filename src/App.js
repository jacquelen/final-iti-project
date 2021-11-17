import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCom from "./component/navbar/NavbarCom";
import Home from "./component/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./component/signIn/SignIn";
import SignUp from "./component/signUp/SignUp";
import { Kanbanboard } from "./component/kanbanboard/kanban";
import { Priority } from "./component/priority/priority";
import { Notification } from "./component/notifiaction/notifiaction";
import { Bookmarks } from "./component/bookmarks/bookmarks";
import { Collaborate } from "./component/colllaborate/collaborate";
import { Quicknotepad } from "./component/quicknotepad/quicknotepad";
import { Chat } from "./component/chat/chat";
import { Viewboard } from "./component/viewboard/viewboard";
import { Checklist } from "./component/checklist/checklist";
import Footer from "./component/footer/Footer";
import ChatView from "./component/chatView/Chat.View";
import { Entrypage } from "./component/entryhomepage/entry";
import { Dashmain } from "./component/dashboardmain/dash";
import { Wrapper } from "./component/wrapper/wrapper";

function App() {
  return (
    <>
      <Router>
        <div className="overflow-hidden">
          <NavbarCom />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={SignIn} path="/signIn" />
            <Route component={SignUp} path="/SignUp" />
            <Route component={Kanbanboard} path="/kanbanboard" />
            <Route component={Priority} path="/priority" />
            <Route component={Notification} path="/Notification" />
            <Route component={Bookmarks} path="/bookmarks" />
            <Route component={Collaborate} path="/Collaborate" />
            <Route component={Quicknotepad} path="/quicknotepad" />
            <Route component={Chat} path="/Chat" />
            <Route component={Viewboard} path="/viewboard" />
            <Route component={Checklist} path="/checklist" />
            <Route component={ChatView} path="/ChatView" />
            <Route component={Entrypage} path="/Entrypage" />
            <Route component={Dashmain} path="/dashboard" />;
            <Route component={Wrapper} path="/wrapper" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
