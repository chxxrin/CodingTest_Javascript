function preorder(nodes, idx) {
    if(idx < nodes.length) {
        let value = `${nodes[idx]}`;
        value += preorder(nodes, idx*2+1);
        value += preorder(nodes, idx*2+2);
        return value;
    }
    return "";
}

function inorder(nodes, idx) {
    if(idx < nodes.length) {
        let value = inorder(nodes, idx*2+1);
        value += `${nodes[idx]}`;
        value += inorder(nodes, idx*2+2);
        return value;
    }
    return "";
}

function postorder(nodes, idx) {
    if (idx < nodes.length) {
        let value = postorder(nodes, idx*2+1);
        value += postorder(nodes, idx*2+2);
        value += `${nodes[idx]}`;
        return value;
    }
    return "";
}

function solution(nodes) {
    return [
        preorder(nodes, 0).slice(0, -1),
        inorder(nodes, 0).slice(0,-1),
        postorder(nodes, 0).slice(0,-1),
    ];
}

console.log(solution([1,2,3,4,5,6,7]));