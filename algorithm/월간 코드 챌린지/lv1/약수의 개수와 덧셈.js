function solution(left, right) {
  let answer = 0;
  let j = 1;
  for (let i = left; i <= right; i++) {
    let count = 0;
    while (j <= i) {
      if (i % j === 0) count++;
      j++;
    }
    if (count % 2 === 0) answer += i;
    if (count % 2 === 1) answer -= i;
    j = 1;
  }
  return answer;
}
