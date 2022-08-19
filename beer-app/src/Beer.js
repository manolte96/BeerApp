import React from "react";
import App from "./App";

function Beer(props) {
    const { name, image, malts, hops, yeast } = props;
    const [isHidden, setHide] = useState(true);
    const [active, setActive] = useState(false)
  
  return (
            <li>
            <h3>{props.name}</h3>
            <img style={{ height:"200px"}} src={props.image} alt={props.name}/>
            <button onClick={() => {
          isHidden ? setHide(false) : setHide(true)}} 
          isActive={active} onClick={() => setActive(!active)} />
            </li>
        );
}

export default Beer;
