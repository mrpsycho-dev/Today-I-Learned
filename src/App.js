import "./style.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large share">Share a fact</button>
      </header>
      <CategoryFilter />
    </>
  );
}
function CategoryFilter() {
  return <h1>hello</h1>;
}

export default App;
