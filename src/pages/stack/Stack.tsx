import { Index, createSignal } from 'solid-js';

const Stack = () => {
  const [count, setCount] = createSignal(0);
  const [stack, setStack] = createSignal<number[]>([]);

  const handleClickPush = () => {
    setCount(count() + 1);
    setStack(prev => [...prev, count()]);
  };
  const handleClickPop = () => {
    if (stack().length) {
      setStack(prev => [...prev.slice(0, prev.length - 1)]);
    }
  };
  const handleClickReset = () => {
    setCount(0);
    setStack([]);
  };
  return (
    <main class="flex flex-col justify-center items-center mb-12 mt-auto">
      <section class="flex min-h-fit justify-between min-w-full">
        <section class="flex flex-col items-start justify-center">
          <div>head: {stack()[0] || 'null'}</div>
          <div>top: {stack()[stack().length - 1] || 'null'}</div>
          <div>next</div>
          <div class="h-34 w-36 text-center border">{count() + 1}</div>
        </section>
        <section class="flex flex-col justify-center items-end gap-4">
          <section class="flex flex-col-reverse items-center h-96 w-52 border-solid border-white border-4 border-t-0 mr-6">
            <Index each={stack()}>
              {el => (
                <div class="h-16 w-52 text-2xl border-4 border-b-0 flex justify-center items-center flex-none">
                  {el()}
                </div>
              )}
            </Index>
          </section>
          <div class="flex w-72 justify-between" />
        </section>
      </section>
      <div class="flex w-full justify-between">
        <button
          class="w-24 h-8 bg-gray-900 active:bg-gray-800"
          onClick={handleClickPush}
        >
          Push
        </button>
        <button
          class="w-24 h-8 bg-gray-900 active:bg-gray-800"
          onClick={handleClickPop}
        >
          Pop
        </button>
        <button
          class="w-24 h-8 bg-gray-900 active:bg-gray-800"
          onClick={handleClickReset}
        >
          초기화
        </button>
      </div>
    </main>
  );
};

export default Stack;
