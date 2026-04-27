import { ListNode } from './list_node.js';

export class Stack {
  private top: ListNode | undefined;

  constructor() {
    this.top = undefined;
  }

  push(value: number): void {
    const newNode = new ListNode(value);
    newNode.next = this.top ?? null;
    this.top = newNode;
  }

  pop(): number | undefined {
    if (!this.top) return undefined;

    const value = this.top.val;
    this.top = this.top.next ?? undefined;
    return value;
  }

  peek(): number | null {
    return this.top ? this.top.val : null;
  }

  isEmpty(): boolean {
    return this.top === undefined;
  }
}