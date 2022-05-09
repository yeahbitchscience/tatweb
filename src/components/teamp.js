import '../App.css';


function Teamp(props) {
  return (
    <div className="teamm">
    <div className="pfpd">
    <img src = {props.pfp} className = "pfp" />
    </div>
    <div className="pdism">
    <div>
     <h1 className="name">
     {props.name}
     </h1>
     <h2 className="pdis">
     {props.dis}
     </h2>
     </div>
     </div>
    </div>
  );
}

export default Teamp;
