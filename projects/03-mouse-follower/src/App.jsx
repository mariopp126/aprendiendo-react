import { useState, useEffect } from "react";

const FollowMouse = () => {
  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Pointer move
  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // Change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: "50%",
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnable(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
};

function App() {
  return <FollowMouse />;
}

export default App;
