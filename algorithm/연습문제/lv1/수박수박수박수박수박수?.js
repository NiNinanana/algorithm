function solution(n) {
  let answer = "";
  while (answer.length < n) {
    if (answer.length % 2 === 0) {
      answer += "수";
      continue;
    }
    if (answer.length % 2 === 1) answer += "박";
  }
  return answer;
}
