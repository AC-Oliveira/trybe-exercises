const sum = (...args) => {
  console.log(args);
  return args.reduce((accumulator, current) => accumulator + current, 0)
};
console.log(sum(4, 7, 8, 9, 60)); // 88