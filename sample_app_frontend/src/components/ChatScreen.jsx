import React, { useMemo, useRef, useState, useEffect } from "react";
import "../styles/common.css";
import "../styles/chat-261-7748.css";

/**
 * PUBLIC_INTERFACE
 * ChatScreen
 * A React component that renders the Chat screen UI based on the provided Figma-extracted assets.
 * - Includes three panels: two conversation examples and one chat list.
 * - Implements tab selection toggling and a simple send interaction as per the original app.js behavior.
 * - Uses minimal state and modern React practices.
 */
export default function ChatScreen() {
  // State for bottom tab selection (mimics app.js toggling .inactive and aria-selected)
  const [activeTab, setActiveTab] = useState("Chats");

  // Conversation input states to replicate simple "send then clear" behavior
  const [conv1Message, setConv1Message] = useState("You're the bes");
  const [conv2Message, setConv2Message] = useState("");

  // Simple list of chat items (static, from provided HTML)
  const chatItems = useMemo(
    () => [
      { name: "Haley James", desc: "Stand up for what you believe in", badge: 9 },
      {
        name: "Nathan Scott",
        desc:
          "One day you’re seventeen and planning for someday. And then quietly and without...",
      },
      { name: "Brooke Davis", desc: "I am who I am. No excuses.", badge: 2 },
      { name: "Jamie Scott", desc: "Some people are a little different. I think that’s cool." },
      {
        name: "Marvin McFadden",
        desc:
          "Last night in the NBA the Charlotte Bobcats quietly made a move that most sports fans...",
      },
      { name: "Antwon Taylor", desc: "Meet me at the Rivercourt" },
      {
        name: "Jake Jagielski",
        desc:
          "In your life, you're gonna go to some great places, and do some wonderful things.",
      },
      {
        name: "Peyton Sawyer",
        desc: "Every song ends, is that any reason not to enjoy the music?",
      },
    ],
    []
  );

  // Refs to manage focus after send (optional, for accessibility)
  const conv1InputRef = useRef(null);
  const conv2InputRef = useRef(null);

  const handleSend = (value, setValue, inputRef) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    // Original demo used alert; we keep a non-blocking UX-friendly log.
    // In a real app, this is where you'd append to messages and call an API.
    // eslint-disable-next-line no-console
    console.log("Send:", trimmed);
    setValue("");
    // restore focus to input
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const handleKeyDown = (e, value, setValue, ref) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend(value, setValue, ref);
    }
  };

  // Keep document background consistent with design token for demo page background
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "var(--color-f8f9fe)";
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  return (
    <main className="screen-wrap" style={{ background: "var(--color-f8f9fe)" }}>
      {/* Header area */}
      <section className="header" aria-label="Screen header">
        <div className="icon" aria-hidden="true">
          <div
            style={{ width: 16, height: 16, borderRadius: 4, background: "var(--color-006ffd)" }}
          />
        </div>
        <div className="title-block">
          <div className="overline">Templates</div>
          <div className="page-title">Chat</div>
        </div>
      </section>

      {/* Conversation example 1 (left phone) */}
      <section className="phone" aria-label="Conversation - Brooke">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="indicators">
            <span aria-hidden="true">📶</span>
            <span aria-hidden="true">📡</span>
            <span aria-hidden="true">🔋</span>
          </div>
        </div>
        <div className="nav-bar">
          <button className="nav-btn" aria-label="Back">
            <div
              style={{ width: 12, height: 12, background: "var(--color-006ffd)", borderRadius: 2 }}
            />
          </button>
          <div className="title">Brooke Davis</div>
          <div className="nav-right-cta">
            <div
              className="avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: 16,
                background: "var(--color-eaf2ff)",
              }}
            />
          </div>
        </div>
        <div className="messages">
          <div className="bubble received tip">
            <span className="name">Brooke</span>
            How&apos;s your project going?
          </div>
          <div className="bubble sent">
            <span className="name">Lucas</span>
            Hi Brooke!
          </div>
          <div className="bubble received">
            <span className="name">Brooke</span>
            {"No worries. Let me know if you"}
            <br />
            {"need any help 😉"}
          </div>
          <div className="bubble sent">
            <span className="name">Lucas</span>
            You&apos;re the best!
          </div>
        </div>
        <div className="input-wrap">
          <div className="input" role="group" aria-label="Message input">
            <div className="add" aria-hidden="true" />
            <input
              ref={conv1InputRef}
              type="text"
              aria-label="Message"
              placeholder="You're the bes"
              value={conv1Message}
              onChange={(e) => setConv1Message(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, conv1Message, setConv1Message, conv1InputRef)}
            />
            <button
              type="button"
              className="send"
              aria-label="Send"
              onClick={() => handleSend(conv1Message, setConv1Message, conv1InputRef)}
              style={{ border: "none", background: "var(--color-006ffd)", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="home-indicator-wrap">
          <div className="home-indicator" />
        </div>
      </section>

      {/* Chats list (middle phone) */}
      <section className="list-area" aria-label="Chats list">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="indicators">
            <span aria-hidden="true">📶</span>
            <span aria-hidden="true">📡</span>
            <span aria-hidden="true">🔋</span>
          </div>
        </div>
        <div className="nav-bar">
          <button
            className="nav-btn"
            aria-label="Edit"
            style={{ justifySelf: "start", background: "transparent" }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-006ffd)" }}>
              Edit
            </span>
          </button>
          <div className="title">Chats</div>
          <div className="nav-right-cta">
            <div
              style={{ width: 20, height: 20, borderRadius: 4, background: "var(--color-006ffd)" }}
            />
          </div>
        </div>
        <div className="search-bar" role="search">
          <div className="search-icon" aria-hidden="true" />
          <input type="search" placeholder="Search" aria-label="Search conversations" />
        </div>
        <div className="list-scroll">
          {chatItems.map((item, idx) => (
            <article
              className="chat-item"
              key={`${item.name}-${idx}`}
              style={idx === 1 || idx === 3 || idx === 4 || idx === 6 || idx === 7 ? { minHeight: 83 } : undefined}
            >
              <div className="avatar" aria-hidden="true" />
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
              </div>
              {typeof item.badge === "number" && (
                <div className="badge" aria-label={`${item.badge} unread`}>
                  {item.badge}
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="tab-bar" role="tablist" aria-label="Bottom tabs">
          {["Chats", "Friends", "Settings"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                className={`tab ${isActive ? "" : "inactive"}`}
                role="tab"
                aria-selected={isActive ? "true" : "false"}
                onClick={() => setActiveTab(tab)}
              >
                <div className="icon" aria-hidden="true" />
                <div className="label">{tab}</div>
              </button>
            );
          })}
        </div>
        <div className="home-indicator-wrap">
          <div className="home-indicator" />
        </div>
      </section>

      {/* Conversation example 2 (right phone) */}
      <section className="phone" aria-label="Conversation - Brooke (variant)">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="indicators">
            <span aria-hidden="true">📶</span>
            <span aria-hidden="true">📡</span>
            <span aria-hidden="true">🔋</span>
          </div>
        </div>
        <div className="nav-bar">
          <button className="nav-btn" aria-label="Back">
            <div
              style={{ width: 12, height: 12, background: "var(--color-006ffd)", borderRadius: 2 }}
            />
          </button>
          <div className="title">Brooke Davis</div>
          <div className="nav-right-cta">
            <div
              className="avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: 16,
                background: "var(--color-eaf2ff)",
              }}
            />
          </div>
        </div>
        <div className="messages">
          <div className="bubble received tip">
            <span className="name">Brooke</span>
            How&apos;s your project going?
          </div>
          <div className="bubble sent">
            <span className="name">Lucas</span>
            Hi Brooke!
          </div>
          <div className="bubble received">
            <span className="name">Brooke</span>
            {"No worries. Let me know if you"}
            <br />
            {"need any help 😉"}
          </div>
          <div className="bubble sent">
            <span className="name">Lucas</span>
            You&apos;re the best!
          </div>
        </div>
        <div className="input-wrap">
          <div className="input" role="group" aria-label="Message input">
            <div className="add" aria-hidden="true" />
            <input
              ref={conv2InputRef}
              type="text"
              aria-label="Message"
              placeholder="Type a message..."
              value={conv2Message}
              onChange={(e) => setConv2Message(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, conv2Message, setConv2Message, conv2InputRef)}
            />
            <button
              type="button"
              className="send"
              aria-label="Send"
              onClick={() => handleSend(conv2Message, setConv2Message, conv2InputRef)}
              style={{ border: "none", background: "var(--color-006ffd)", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="home-indicator-wrap">
          <div className="home-indicator" />
        </div>
      </section>
    </main>
  );
}
