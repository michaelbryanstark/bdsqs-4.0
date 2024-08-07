import React from 'react';

const Modal = ({
    clickedImg,
    setClickedImg,

    // item
  }) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
        // setclickedimgtext
      }
    };
  
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
        <span className="dismiss" onClick={handleClick}>
            X
          </span>
          <img src={clickedImg} alt="bigger pic" />
          {/* add text for image here */}
          {/* <h2 className="font-face-gm" style={{ color: '#fa7f67', textAlign: 'left', fontWeight: '100', fontSize: '15px'}}>{item.text}</h2> */}

        </div>
      </>
    );
  };
  
  export default Modal;