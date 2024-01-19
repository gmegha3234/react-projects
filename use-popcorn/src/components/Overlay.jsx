export default function Overlay({ children, clickHandler }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={(e) => {
        if(e.target === e.currentTarget){
            clickHandler();
        }
      }}
    >
      {children}
    </div>
  );
}
