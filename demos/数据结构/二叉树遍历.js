var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}
//递归遍历
var listNode=[]
function preOlderTraval(node){
    if(node){
        listNode.push(node.value)
        preOlderTraval(node.left);
        preOlderTraval(node.right);
    }
}
// preOlderTraval(tree)
// console.log(listNode)
function leftOrderTraval(node){
    if(node){

        leftOrderTraval(node.left);
        listNode.push(node.value);
        leftOrderTraval(node.right);
    }
}
// leftOrderTraval(tree)
function lastOrderTraval(node){
    if(node){
        //栈的方式
    }
    if(node){
        lastOrderTraval(node.left)
        lastOrderTraval(node.right)
        listNode.push(node.value);
    }
}
// lastOrderTraval(node)

function breadthTraversal(node){
    //队列的方式
    if(node){
        let que=[node];
        while (que.length>0){
            node=que.shift();
            listNode.push(node.value);
            if(node.left) que.push(node.left);
            if(node.right) que.push(node.right);
        }
    }
}
breadthTraversal(tree)
console.log(listNode)
