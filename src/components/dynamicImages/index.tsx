import { component$ } from "@builder.io/qwik";

type Img = {
  src: string;
  name: string;
};

type Props = {
  images: Img[];
};

export const DynamicImages = component$(({ images }: Props) => {
  return (
    <div class="flex container h-[30vh] box-border py-4 justify-center mx-auto">
      {images.map(({ src, name }) => (
        <div class="group rounded-3xl mx-5 bg-gray-900 flex-[1] overflow-hidden transition-all duration-500 ease-in-out shadow-xl hover:flex-[1_1_30%]">
          <img
            src={src}
            alt="Roraima"
            class="transition-all duration-500 ease-in-out w-[200%] h-[calc(100%-2.5rem)] object-cover group-hover:w-full group-hover:h-full"
          />
          <span class="block text-center text-gray-200 h-10 leading-10">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
});
