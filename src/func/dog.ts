import { dog, } from "../main";

export const numberOfColors = (dogs: dog[]) => {
  const uniqueColors = new Set(dogs.map(dog => dog.color));
  return uniqueColors.size;
};

export const commonColor = (d: dog[]) => {};
