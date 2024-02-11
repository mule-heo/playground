import type { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import conieImage from '../../assets/images/conie.png';

interface ErrorProps {
  message: string;
}

const Error: Component<ErrorProps> = props => {
  const navigate = useNavigate();
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <div>{props.message}</div>
      <img
        src={conieImage}
        alt="고개를 숙인 코니 / a bowing Conie"
        class="w-32 h-32"
      />
      <button
        onClick={() => navigate('/', { replace: true })}
        class="w-32 h-8 bg-gray-50 text-gray-800 rounded-md"
      >
        메인 페이지로
      </button>
    </div>
  );
};

export default Error;
