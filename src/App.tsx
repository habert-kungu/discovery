import ListGroup from "./components/ListGroup";

function App() {
  let items = ["tokyo", "nairobi", "uganda"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
