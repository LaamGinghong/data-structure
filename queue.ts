class Queue {
    private _queue: Array<any>;

    constructor(
        private _length: number
    ) {
        this._queue = new Array<any>(_length);
    }

    enqueue(item: any): void {
        this._queue.push(item);
    }

    dequeue(): any {
        return this._queue.shift();
    }

    clear(): void {
        this._queue = []
    }

    get size(): number {
        return this._queue.length;
    }

    get queue(): Array<any> {
        return this._queue;
    }
}
