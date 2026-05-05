import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <div>
      <h3>Like Button</h3>

      <button onClick={() => setLike(!like)}>
        {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default LikeButton;