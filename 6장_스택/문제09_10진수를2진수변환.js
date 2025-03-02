function solution(decimal) {
    const stack = [];

    while(decimal > 0) {
        const remainder = decimal % 2;
        stack.push(remainder);
        decimal = Math.floor(decimal/2);
    }

    // 스택에서 수를 팝팝팝해서 이진수만들기
    let binary = "";
    while(stack.length > 0) {
        binary += stack.pop();
    }
    return binary;

}