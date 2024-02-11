import { Component, createSignal } from 'solid-js';
import styles from './card.module.css';
import conieImage from '../assets/images/conie.png';

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
      <div class="w-72 h-36 sm:w-36 sm:h-36 mt-2 rounded-2xl overflow-hidden select-none">
        <img
          class="object-cover w-72 h-36 sm:w-36 sm:h-36"
          src={`${
            props.gifUrl && isHovering()
              ? props.gifUrl
              : props.imgUrl || conieImage
          }`}
          alt={props.name}
        />
        77
      </div>
      <p class="mt-3 select-none">{props.name}</p>
    </article>
  );
};

export default Card;
