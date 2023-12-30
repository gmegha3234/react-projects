import Logo from "./Logo";
import { Form } from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      <PackingList/>
      <Stats />
    </div>
  )
}

export default App
