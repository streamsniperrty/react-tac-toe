export default function Square({display}) {
  function handleClick() {
    console.log("click");
  }
  
  return <button onClick={handleClick} className="square">{display}</button>;
  
}