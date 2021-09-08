import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addMessage, removeMessage } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const messageState = useSelector((state) => state.message);
  const [newMessage, setNewMessage] = useState("");

  function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  }

  useEffect(() => {
    if (messageState?.message.length === 0) return;

    const newSection = setTimeout(
      () => dispatch(removeMessage(messageState?.message[0]?.newId)),
      5000
    );
    return () => clearTimeout(newSection);
  }, [messageState?.message, dispatch]);
  const newId = generateUID();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage) return;
    dispatch(addMessage({ newMessage, newId }));
    setNewMessage("")
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <div>
        <div>
          {messageState?.message[0]?.newMessage && (
            <h1
              style={{
                border: "1px solid gray",
                background: "#3232",
                textAlign: "center",
                padding: "10px",
              }}
            >
              {messageState?.message[0]?.newMessage}
            </h1>
          )}
          {messageState?.message[1]?.newMessage && (
            <h1
              style={{
                border: "1px solid gray",
                background: "#3232",
                textAlign: "center",
                padding: "10px",
              }}
            >
              {messageState?.message[1]?.newMessage}
            </h1>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "40px",
          }}
        >
          <textarea
            onChange={handleChange}
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            value={newMessage}
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
