const stack = [];

function push(stack, item) {
    stack.push(item);
    console.log("데이터가 추가됐습니다.")
}

function pop(stack) {
    if (stack.length === 0) {
        console.log("스택이 비어있습니다.");
        return null;
    } else {
        return stack.pop();
    }
}