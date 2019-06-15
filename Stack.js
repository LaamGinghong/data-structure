class Stack {
    constructor(_length) {
        this._length = _length;
        this._stack = new Array(_length);
    }
    add(item) {
        this._stack.push(item);
    }
    pop() {
        this._stack.pop();
    }
    clear() {
        this._stack = [];
    }
    get stack() {
        return this._stack;
    }
    get size() {
        return this._stack.length;
    }
}
const stack = new Stack(10);
for (let i = 0; i < 10; i++) {
    stack.add(i);
}
console.log(stack.stack);
console.log(stack.size);
