import { useLayoutEffect, useState } from "react";

export default function App() {
  const [event, setEvent] = useState<KeyboardEvent | null>(null);

  useLayoutEffect(() => {
    document.onkeydown = (ev) => {
      ev.preventDefault();
      setEvent(ev);
    };
  }, []);
  return (
    <div
      className="has-background-light"
      style={{ minHeight: "100vh", display: "flex" }}
    >
      <div className="columns" style={{ margin: "auto" }}>
        {event ? (
          <>
            <div className="column has-text-centered">
              <p className="block">event.key</p>
              <div
                className="box is-size-5"
                style={{ minWidth: "10rem", minHeight: "70px" }}
              >
                {event.key}
              </div>
            </div>
            <div className="column has-text-centered">
              <p className="block">event.code</p>
              <div
                className="box is-size-5"
                style={{ minWidth: "10rem", minHeight: "70px" }}
              >
                {event.code}
              </div>
            </div>
          </>
        ) : (
          <div className="column">
            <div className="box">Press any key to get the key code</div>
          </div>
        )}
      </div>
    </div>
  );
}
