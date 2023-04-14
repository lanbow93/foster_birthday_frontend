import React from "react";

const Card = ({ id, name, flipped, matched, clicked }) => {
return (
<div
onClick={() => (flipped ? undefined : clicked(name, id))}
className={
"card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
}
>
<div className="back">?</div>
<div className="front">
<img alt={name} src={"https://foster-birthday-backend.onrender.com/photo/" + name + ".jpg"}
crossOrigin="use-credentials" />
</div>
</div>
);
};

export default Card;