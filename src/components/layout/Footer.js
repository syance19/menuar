import React from "react";

function Footer() {
  return (
    <>
      <div className='footer flex_middle'>
        <div className='text cursor_pointer'>
          <span style={{ marginBottom: "0.5em", fontSize: "0.8em" }}>
            {String.fromCodePoint("0X00A9")}
          </span>{" "}
          
        </div>
      </div>
    </>
  );
}

export default Footer;
