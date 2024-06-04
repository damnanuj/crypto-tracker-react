import React, { useEffect } from "react";
import "./style.scss";

const BackToTop = () => {
  useEffect(() => {
    // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="backToTop" id="myBtn" onClick={topFunction}>
      <span className="material-icons">arrow_circle_up</span>
    </div>
  );
};

export default BackToTop;
