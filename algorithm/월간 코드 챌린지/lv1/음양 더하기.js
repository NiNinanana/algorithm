function solution(absolutes, signs) {
  let i = 0;
  while (i < absolutes.length) {
    if (signs[i] === false) {
      absolutes[i] = "-" + absolutes[i];
      absolutes[i];
    }
    i++;
  }
  const answer = absolutes.reduce((acc, cur) => Number(acc) + Number(cur));
  return answer;
}
