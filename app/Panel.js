import React, { useState, useEffect, useRef } from "react";

const Panel = () => {
  // OpenAI API
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessageToAPI = async () => {
    if (inputText.trim() === "") return;

    const userMessage = inputText;
    setInputText("");

    setMessages((messages) => [
      ...messages,
      { role: "user", content: userMessage },
    ]);
    const timer = setTimeout(() => {
      setMessages((messages) => [
        ...messages,
        { role: "interface", content: "🤔" },
      ]);
    }, 800);

    let latestQueryIndex = 0;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "user") {
        latestQueryIndex = i;
        break;
      }
    }
    const context = messages.slice(latestQueryIndex);
    try {
      const response = await fetch(
        `https://6jc261drqi.execute-api.us-east-2.amazonaws.com/prod/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              role: "system",
              content:
                "You are a virtual assistant built by a full-stack developer, whose nickname is Mike Hyatt. He uses the nickname for privacy reasons. Always mention this consideration to people who asks about Mike.",
            },
            ...context,
            { role: "user", content: userMessage },
          ]),
        }
      );
      clearTimeout(timer);
      if (!response.ok) {
        throw new Error("Time out. Please try again.");
      }
      const data = await response.json();
      console.log(JSON.stringify(data));
      if (data.finish_reason === "content_filter") {
        throw new Error(
          "Content omitted due to a flag from our content filters. Please use our tools safely and responsibly by following our usage policies."
        );
      } else {
        setMessages((messages) => [
          ...messages.filter((item) => item.role !== "interface"),
          data.message,
        ]);
      }
    } catch (error) {
      clearTimeout(timer);
      setMessages((messages) => [
        ...messages.filter((item) => item.role !== "interface"),
        { role: "assistant", content: error.toString() },
      ]);
    }
  };
  const filteredMessages = messages.filter((item) => item.content !== null);
  const [finishedTyping, setFinishedTyping] = useState(true);

  return (
    <div className="p-3 justify-between">
      <FloatView messages={filteredMessages} />
      <div className={`flex w-full items-end justify-center`}>
        <input
          className="w-full bg-white/50 px-[9px] py-1.5 border border-gray-400 rounded-md"
          maxLength="256"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
          placeholder={"Type your message here."}
          onKeyDown={(event) => {
            if (event.key === "Enter" && finishedTyping) {
              sendMessageToAPI();
            }
          }}
          onCompositionStart={() => {
            setFinishedTyping(false);
          }}
          onCompositionEnd={() => {
            setFinishedTyping(true);
          }}
        />
        {inputText && (
          <button
            className="absolute -translate-x-5 leading-4"
            style={{
              borderRadius: 10,
              padding: 15,
              paddingTop: 10,
              fontSize: 24,
            }}
            onClick={sendMessageToAPI}
          >
            ◮
          </button>
        )}
      </div>
    </div>
  );
};

export default Panel;

const FloatView = ({ messages }) => {
  const len = messages.length;
  return (
    <div className="flex flex-col-reverse">
      {len > 0 && <MsgBox message={messages[len - 1]} />}
      {len > 1 && <MsgBox message={messages[len - 2]} />}
    </div>
  );
};

const MsgBox = ({ message }) => {
  return (
    <div
      className={`w-full mb-3 flex flex-col justify-start items-start px-3 py-2 max-h-24 overflow-auto rounded-md ${
        message.role === "user"
          ? " bg-sky-400 dark:bg-sky-900 opacity-90"
          : "bg-gray-300 dark:bg-gray-700 opacity-95"
      }`}
    >
      {message.content}
    </div>
  );
};
