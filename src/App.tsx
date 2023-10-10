import "./App.scss";
import Box from "./components/Box";
import Check from "./components/Check";

function App() {
  return (
    <>
      <main className="card">
        <section className="stepper">
          <Check status="complete" />
          <img className="check" src="./linker.svg" alt="svg" />
          <Check status="complete" />
          <img className="check" src="./linker.svg" alt="svg" />
          <Check status="progress" />
          <Check status="none" />
        </section>
        <section className="steps">
          <Box step="Step one" basket="Your basket" />
          <Box step="Step two" basket="Your Detail" />
          <Box step="Step three" basket="Payment" />
          <Box step="Step four" basket="Order Complete" />
        </section>
      </main>
    </>
  );
}

export default App;
