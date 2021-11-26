import "../styles/globalStyles.css";
export default function Topbar() {
  return (
    <div className="topbar">
      <img src="https://icons.iconarchive.com/icons/tatice/cristal-intense/256/Apple-grey-icon.png" />
      <p>Finder</p>
      <p>File</p>
      <p>Edit</p>
      <p>View</p>
      <p>Go</p>
      <p>Help</p>
      <p style={{ position: "absolute", right: "20px" }}>Fri, Nov 26 4:53 PM</p>
    </div>
  );
}
