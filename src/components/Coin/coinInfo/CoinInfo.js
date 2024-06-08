import React, { useState } from "react";
import "./style.scss";
const CoinInfo = ({ heading, desc }) => {
  const [flag, setFlag] = useState(false);

  const shortInfo = desc.slice(0, 420) + `<p style="color:gray"}>read more...</p>`;
  const longInfo = desc + `<p style="color:gray"}>read less...</p>`;

  // console.log(flag);
  return (
    <div className="grayWrapper coinInfo">
      <h2>{heading}</h2>
      {desc.length > 420 ? 
      (
        <p
          onClick={() => setFlag(!flag)}
          dangerouslySetInnerHTML={{ __html: !flag ? shortInfo : longInfo }}
        />
      ) : 
      
      (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
