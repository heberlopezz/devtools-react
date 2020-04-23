export const data = () => {
  let arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push({name: `name${index}`, id: index})
  }
  return arr;
};