/* eslint-disable react/prop-types */
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import "./Thanks.css";

const emojiData = {
  satisfied: <BsFillEmojiSmileFill />,
  neutral: <BsFillEmojiNeutralFill />,
  unsatisfied: <BsFillEmojiFrownFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

export function ThanksForm({ data }) {
  return (
    <div className="thanks-container">
      <h2>Falta Pouco {data.name}</h2>
      <h3>Resumo da avaliação:</h3>
      <p className="review-data">
        <span>Satisfação:</span>
        {emojiData[data.review]}
      </p>

      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
}
