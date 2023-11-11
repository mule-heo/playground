import { Component, createSignal } from 'solid-js';
import styles from './card.module.css';

interface CardProps {
  name: string;
  imgUrl: string;
  gifUrl?: string;
}

const Card: Component<CardProps> = props => {
  const [isHovering, setIsHovering] = createSignal(false);
  return (
    <article
      class={styles.Card}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div class="w-72 h-36 sm:w-36 sm:h-36 mt-2 rounded-2xl overflow-hidden">
        <img
          class="object-cover w-72 h-36 sm:w-36 sm:h-36"
          src={`${
            props.gifUrl && isHovering()
              ? props.gifUrl
              : props.imgUrl ||
                'data:image/jpeg;base64,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'
          }`}
          alt={props.name}
        />
      </div>
      <p class="mt-3">{props.name}</p>
    </article>
  );
};

export default Card;
