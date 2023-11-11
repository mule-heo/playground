import { For } from 'solid-js';
import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import Card from './components/card/Card';
import styles from './app.module.css';
import { contents } from './data/contents';

const App: Component = () => {
  return (
    <div class={styles.Container}>
      <section class="w-1/2 sm:w-96 md:w-192 flex flex-wrap justify-center my-8 gap-8">
        <For each={contents}>
          {content => (
            <A href={`/${content.url}`}>
              <Card {...content} />
            </A>
          )}
        </For>
      </section>
    </div>
  );
};

export default App;
