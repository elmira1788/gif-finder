import React, { useState } from "react";

const Gif = (props) => {
  const [val, setVal] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleImgClick = () => {
    setShowPopup(true);
    setVal(props.caption);
    console.log(val)
  };

  const handleInputChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <li>
      <img src={props.url} alt={props.title} onClick={handleImgClick} />
      {showPopup && (
        <div className="popup">
          <input
            type="text"
            value={val}
            onChange={handleInputChange}
            onBlur={() => setShowPopup(false)}
          />
        </div>
      )}
    </li>
  );
};

export default Gif;
