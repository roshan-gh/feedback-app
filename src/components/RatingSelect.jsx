import { useState,useContext,useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(10);
  
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value); //+ converts it to number
    select(+e.currentTarget.value);
  };
  
  useEffect(()=>{
    if (feedbackEdit.edit === true){
      setSelected(feedbackEdit.item.rating); 
    }
  },[feedbackEdit] )
  
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        ></input>
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        ></input>
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        ></input>
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        ></input>
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        ></input>
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        ></input>
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        ></input>
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        ></input>
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num9"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        ></input>
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        ></input>
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
