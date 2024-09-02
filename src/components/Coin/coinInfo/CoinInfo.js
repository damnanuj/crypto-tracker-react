import React, { useContext, useState } from "react";
import "./style.scss";
import { ThemeContext } from "../../../context/ThemeContext";
const CoinInfo = ({ heading, desc }) => {
  const [flag, setFlag] = useState(false);

  const shortInfo =
    desc.slice(0, 420) + `<p style="color:gray"}>read more...</p>`;
  const longInfo = desc + `<p style="color:gray"}>read less...</p>`;

  const {theme} = useContext(ThemeContext)

  // console.log(flag);
  return (
    <div className={`grayWrapper coinInfo ${theme==="light"? 'light':""}`}>
      <h2>{heading}</h2>
      {desc.length > 420 ? (
        <p
          onClick={() => setFlag(!flag)}
          dangerouslySetInnerHTML={{ __html: !flag ? shortInfo : longInfo }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
