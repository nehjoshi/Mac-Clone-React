import "../styles/globalStyles.css";
import Footbar from "./Footbar";
import Topbar from "./Topbar";
export default function Home({ children }) {
  return (
    <div className="App">
      <Topbar />
      <Footbar />
    </div>
  );
}
