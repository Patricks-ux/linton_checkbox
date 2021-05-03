import "./styles.css"
import { Frame } from "framer"

export default function App() {
  return (
    <div
      className="App"
      style={{ width: 120, height: 120, background: "orange" }}
    >
      <Frame style={{ width: 120, height: 60, borderRadius: 30 }}>
        <Frame size={60} borderRadius={30} />
      </Frame>
    </div>
  )
}
