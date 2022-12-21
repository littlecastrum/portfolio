import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { GooruLogo } from "../icons";
import styles from "./header.css?inline";

export const Header = component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="" target="_blank" title="qwik">
          <foreignObject x="0" y="0" width="200" height="70">
            <GooruLogo width="200" height="70" classes="rounded" />
          </foreignObject>
        </a>
      </div>
      <ul>
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
