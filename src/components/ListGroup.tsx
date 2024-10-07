function ListGroup() {
  let items = ["tokyo", "nairobi", "ugandah"];
  //items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Not in items</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
