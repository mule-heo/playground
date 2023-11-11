import { For, createSignal } from 'solid-js';

const Queue = () => {
  const [count, setCount] = createSignal(0);
  const [queue, setQueue] = createSignal<number[]>([]);
  const [removed, setRemoved] = createSignal<number | null>(null);
  const [history, setHistory] = createSignal<string[]>([]);

  const handleClickEnqueue = () => {
    setCount(count() + 1);
    setQueue(prev => [...prev, count()]);
    setHistory(prev => [...prev, 'E']);
  };
  const handleClickDequeue = () => {
    if (queue().length) {
      setRemoved(queue()[0]);
      setQueue(prev => [...prev.slice(1)]);
      setHistory(prev => [...prev, 'D']);
    }
  };
  const handleClickUndo = () => {
    if (history().length === 0) {
      alert('되돌릴 게 없는데도!');
      return;
    }
    if (history()[history().length - 1] === 'E') {
      setCount(count() - 1);
      setQueue(prev => [...prev.slice(0, prev.length - 1)]);
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
      return;
    }
    if (history()[history().length - 1] === 'D') {
      setQueue(prev => [prev[0] - 1 || (removed() as number), ...prev]);
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
      setRemoved(prev => (prev as number) - 1 || null);
      return;
    }
    throw new Error('어디서 이런 명령어를 주워먹고 온 거야...');
  };
  const handleClickReset = () => {
    setCount(0);
    setQueue([]);
    setRemoved(null);
    setHistory([]);
  };
  return (
    <main class="flex flex-col justify-center items-center mb-auto mt-auto">
      <section class="flex flex-col min-h-fit justify-between min-w-full gap-16">
        <section class="flex flex-col items-center justify-center">
          <div>front: {queue()[0] || 'null'}</div>
          <div>rear: {queue()[queue().length - 1] || 'null'}</div>
          <div>next</div>
          <div class="h-34 w-36 text-center border">{count() + 1}</div>
          <div>removed</div>
          <div class="h-34 w-36 min-h-34 text-center border">
            {removed() ?? 'null'}
          </div>
        </section>
        <section class="flex flex-col justify-center items-end gap-4">
          <section class="flex flex-row items-center h-24 w-96 md:w-192 border-solid border-white border-y-4">
            <For each={queue()}>
              {el => (
                <div class="h-24 w-16 text-2xl border-y-4 border-r-4 flex justify-center items-center first-of-type:border-l-4 first-of-type:ml-4 flex-none">
                  {el}
                </div>
              )}
            </For>
          </section>
          <div class="flex w-72 justify-between" />
        </section>
      </section>
      <div class="flex w-full justify-between">
        <button
          class="w-24 h-8 bg-gray-900 active:bg-gray-800"
          onClick={handleClickEnqueue}
        >
          Enqueue
        </button>
        <button
          class="w-24 h-8 bg-gray-900 active:bg-gray-800"
          onClick={handleClickDequeue}
        >
          Dequeue
        </button>
        <button
          class="w-24 h-8 bg-gray-900 active:bg-gray-800"
          onClick={handleClickUndo}
        >
          되돌리기
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

export default Queue;
