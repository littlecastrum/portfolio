import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../components/header";
import { DynamicImages } from "../components/dynamicImages";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <DynamicImages
            images={[...Array(5).keys()].map((key) => ({
              src: `https://source.unsplash.com/1000x80${key}`,
              name: `Test ${key}`,
            }))}
          />
        </section>
        <Slot />
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
