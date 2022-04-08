const sentence = "Cras mattis consectetur purus sit amet fermentum.";
const find = (sentence, searchWord) => {
  const sentence1 = sentence.split(" ");
  return sentence1.includes(searchWord);
};
console.log(find(sentence, "kk"));
