function gradingStudents(grades = []) {
  let output = [];
  for (let i = 0; i < grades.length; i++) {
    let newArr = grades[i];
    console.log(newArr);

    if (grades[i] >= 0 && grades[i] <= 100) {
      if (grades[i] >= 38 && grades[i] % 5 >= 3) {
        const res = grades[i] - (grades[i] % 5) + 5;
        output.push(res);
      } else {
        output.push(grades[i]);
      }
    } else output.push("error");
  }

  return output;
}

res = gradingStudents([73, 38, 33, 67, 110]);
console.log(res);
