import React from "react";
// import fCClogo from "../images/fcc_primary_large.webp";

const FCCLogo: React.FC = () => {
  // return <img className="fcc-logo" src={fCClogo} alt="freeCodeCamp logo" />;
  return (
    <>
      <h1 className="fcc-logo"> Ready to Practice?</h1>
    </>
  );
};
export default React.memo(FCCLogo);
