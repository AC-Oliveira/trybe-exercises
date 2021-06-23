const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const grade = (rightAnswer, answer) => {
  let note = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
    if (rightAnswer[index] === answer[index]) {
      note += 1;
    } else if (answer[index] === 'N.A') {
      continue;
    }else {
    note -= 0.5;
    }
  }
  return note;
};
const myHOF = (rightAnswers, studentAnswers, grade) =>  grade(rightAnswers, studentAnswers);
