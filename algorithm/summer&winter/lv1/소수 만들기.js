function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let test = 0;
        for (let l = 2; l < sum; l++) {
          if (sum % l === 0) {
            test++;
          }
        }
        if (test < 1) {
          answer++;
        }
      }
    }
  }
  return answer;
}
