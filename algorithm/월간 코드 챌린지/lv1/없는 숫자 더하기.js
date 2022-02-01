function solution(numbers) {
  let answer = 0;
  let i = 0;
  while (i < 10) {
    if (numbers.indexOf(i) === -1) {
      answer += i;
    }
    i++;
  }
  return answer;
}
