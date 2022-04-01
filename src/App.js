import "./styles.css";
import Folder from "./components/Folder";
import mockData from "./data/mock";

export default function App() {
  return (
    <div className="App">
      <Folder mockData={mockData} />
    </div>
  );
}
