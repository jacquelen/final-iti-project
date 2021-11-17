import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const ChatMassage = ({ owner, msgData, photoURl, msgTime }) => {
  return (
    <>
      <div className={`chat-msg ${owner && "owner"} d-flex align-items-center`}>
        <div className="chat-msg-profile">
          <img className="chat-msg-img" src={photoURl} alt="" />
        </div>
        <div className="chat-msg-content">
          <div className="chat-msg-text d-flex">
            {msgData}
            <div className="chat-msg-date text-end d-flex align-items-end">
              <div>
                {msgTime
                  .toDate()
                  .toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </div>

              <FontAwesomeIcon icon={faCheck} className="check" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMassage;
