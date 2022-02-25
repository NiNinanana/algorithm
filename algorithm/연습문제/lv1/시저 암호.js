function solution(s, n) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) === 90) {
      answer.push(String.fromCharCode(64 + n));
    } else if (s.charCodeAt(i) === 122) {
      answer.push(String.fromCharCode(96 + n));
    } else if (s.charCodeAt(i) === 32) {
      answer.push(" ");
    } else if (s[i] === s[i].toUpperCase() && s.charCodeAt(i) + n > 90) {
      answer.push(String.fromCharCode(s.charCodeAt(i) + n - 26));
    } else if (s.charCodeAt(i) + n > 122) {
      answer.push(String.fromCharCode(s.charCodeAt(i) + n - 26));
    } else {
      answer.push(String.fromCharCode(s.charCodeAt(i) + n));
    }
  }

  return answer.join("");
}
