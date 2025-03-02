const stack = [];
const maxSize = 10;

function isFull(stack) {
    return stack.length === maxSize;
}

function isEmpty(stack) {
    return stack.length === 0;
}

function push(stack, item) {
    if (isFull(stack)) {
        console.log("스택이 가득 찼습니다");
    } else {
        stack.push(item);
        console.log("데이터가 추가됐습니다.")
    }
}

function pop(stack) {
    if (isEmpty(stack)) {
        console.log("스택이 비어있습니다.");
        return null;
    } else {
        return stack.pop();
    }
}