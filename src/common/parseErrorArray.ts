import capitalizeFirstLetter from "./captializeFirstLetter";

const parseErrorArray = (errors: string[]) => {
  const parsedErrors: string[] = [];
  errors.forEach((error) => parsedErrors.push(capitalizeFirstLetter(error)));

  return parsedErrors.join("\n");
};

export default parseErrorArray;
