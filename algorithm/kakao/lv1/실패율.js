function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    let success = 0;
    let arrival = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] > i) success++;
      if (stages[j] >= i) arrival++;
    }
    answer[i - 1] = {
      stage: i,
      probability: success / arrival,
    };
  }
  answer.sort((a, b) => {
    return a.probability - b.probability;
  });
  answer = answer.map((data) => {
    return data.stage;
  });
  return answer;
}
