const a = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 10;

const bs = () => {
  let low = 0;
  let high = a.length - 1; // 배열에서 마지막 요소를 가리킬 때는 a.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // mid 설정!

    // 중요한거는 low, mid, high는 값이 아니라 인덱스라는거!!
    if (a[mid] == target) {
      console.log(target);
      return "find";
    } else if (a[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

const ret = bs();
console.log(ret);
