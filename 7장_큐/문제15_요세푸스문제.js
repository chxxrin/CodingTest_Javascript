class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
        this.items.push(item);
        this.rear++;
    }

    pop(item) {
        return this.items[this.front++];
    }

    size() {
        return this.rear - this.front;
    }
}

function solution(n, k) {
    const queue = new Queue();

    // deque에 추가
    for(let i=1;i<=n;i++) {
        queue.push(i);
    }

    while(queue.size() > 1) {
        for(let i=0;i<k-1;i++) {
            queue.push(queue.pop()); // k번 팝 푸시하고
        }
        queue.pop(); // 그 다음꺼 제거
    }
    return queue.pop(); // 마지막거
}

console.log(solution(5,2));