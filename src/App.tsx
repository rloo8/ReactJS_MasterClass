function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <button onClick={onClick}>CLick</button>
    </div>
  );
}

export default App;
