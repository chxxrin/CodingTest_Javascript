function countSort(arr, k) {
    const hashtable = new Array(k+1).fill(0);

    for(const num of arr) {
        if (num <= k) {
            hashtable[num] = 1;
        }
    }
    return hashtable;
}

function solution(arr, target) {
    const hashtable = countSort(arr, target);

    for(const num of arr) {
        const value = target - num;
        if(
            value !== num &&
            value >= 0 &&
            value <= target &&
            hashtable[value] === 1
        ) {
            return true;
        }
    }
    return false;
}

console.log(solution([1,2,3,4,8], 6));
console.log(solution([2,3,5,9], 10));

