import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="flex justify-center">
      <h1 class="text-5xl font-bold">Dan Castrillo</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Dan Castrillo",
  meta: [
    {
      name: "description",
      content: "Daniel Castrillo's portfolio website",
    },
  ],
};
