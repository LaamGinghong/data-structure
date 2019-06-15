class Stack {
    private _stack: Array<any>;

    constructor(
        private _length: number
    ) {
        this._stack = new Array<any>(_length);
    }

    add(item: any): void {
        this._stack.push(item);
    }

    pop(): void {
        this._stack.pop();
    }

    clear(): void {
        this._stack = [];
    }

    get stack(): Array<any> {
        return this._stack;
    }

    get size(): number {
        return this._stack.length;
    }
}

const stack = new Stack(10);
for (let i = 0; i < 10; i++) {
    stack.add(i)
}

console.log(stack.stack)
console.log(stack.size)
