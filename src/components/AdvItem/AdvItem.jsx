import React from "react";

const AdvItem = ({ icon, text }) => {
  return (
    <div>
      <div className="advantages__item">
        <i class="advantages__icon far">{icon}</i>
        <p className="advantages__text">{text}</p>
      </div>
    </div>
  );
};

export default AdvItem;
