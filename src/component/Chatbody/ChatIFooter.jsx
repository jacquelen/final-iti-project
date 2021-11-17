import { useContext, useState } from "react";
import { currentUserContext } from "../context/CurrentUser";
import { FirebaseContext } from "../context/FireContext";
import { SecondUserContext } from "../context/secondUser";
import InputEmoji from "react-input-emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPaperPlane,
  faPlusCircle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

const ChatFooter = () => {
  const [msgContent, setMsgContent] = useState("");
  const { userData } = useContext(currentUserContext);
  const [img, setImg] = useState("");

  const { secondUserData } = useContext(SecondUserContext);
  const { messagesCollection } = useContext(FirebaseContext);
  const handleSendMsg = (e) => {
    e.preventDefault();
    messagesCollection.add({
      createdAt: new Date(),
      Msg: msgContent,
      createdBy: userData.uid,
      sentTo: secondUserData.uid,
      relation: `${userData.uid}/${secondUserData.uid}`,
    });
    setMsgContent("");
  };
  const Upload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
        setMsgContent(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    // setMsgContent(e.target.value);
    console.log(e.target.files[0]);
  };
  return (
    <div className="chat-area-footer pt-2 mt-3">
      {/* <img src={img} alt="" /> */}
      <form onSubmit={handleSendMsg}>
        <div className="d-flex align-items-center">
          <div className="image-upload">
            <label htmlFor="file-input">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="btn-icon ms-2 fs-4"
              />
            </label>

            <input id="file-input" type="file" onChange={Upload} />
          </div>
          <InputEmoji
            value={msgContent}
            onChange={setMsgContent}
            cleanOnEnter
            placeholder="Type a message"
          />
          {msgContent ? (
            <button className="form-btn" type="submit">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="btn-icon mx-2 fs-4"
              />
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default ChatFooter;
