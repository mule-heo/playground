import type { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
interface ErrorProps {
  message: string;
}

const Error: Component<ErrorProps> = props => {
  const navigate = useNavigate();
  return (
    <>
      <div>{props.message}</div>
      <button
        onClick={() => navigate('/', { replace: true })}
        class="w-32 h-8 bg-gray-50 text-gray-800 rounded-md"
      >
        메인 페이지로
      </button>
    </>
  );
};

export default Error;
