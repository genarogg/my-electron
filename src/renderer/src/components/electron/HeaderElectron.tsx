import React, { useState, useEffect } from "react";

interface HeaderElectronProps {
  title: string;
}

const HeaderElectron: React.FC<HeaderElectronProps> = ({ title }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.screenX, y: event.screenY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const minimizeWindow = (): void =>
    window.electron.ipcRenderer.send("minimize-window");

  const maximizeWindow = (): void =>
    window.electron.ipcRenderer.send("maximize-window");

  const closeWindow = (): void =>
    window.electron.ipcRenderer.send("close-window");

  const moveWindow = (): void =>
    window.electron.ipcRenderer.send(
      "move-window",
      mousePosition.x,
      mousePosition.y
    );

  return (
    <div className="header-electron">
      <div className="container-title">
        <h1>{title}</h1>
      </div>
      <div className="container-btns">
        <button onClick={minimizeWindow} className="minimize"></button>
        <button onClick={maximizeWindow} className="maximize"></button>
        <button onClick={closeWindow} className="close"></button>
      </div>
      <div className="mouse-position">
        Mouse Position: {mousePosition.x}, {mousePosition.y}
      </div>
    </div>
  );
};

export default HeaderElectron;
