import { ListNode } from './list_node.js';

export class Lesson12 {
  /**
   * Provide the solution to LeetCode 3062 here:
   * https://github.com/yang-su2000/Leetcode-algorithm-practice/tree/master/3062-winner-of-the-linked-list-game
   */
  public gameResult(head: ListNode | null): string {
    if (!head || !head.next) return 'Tie';

    let evenNode: ListNode | null = head;
    let oddNode: ListNode | null = head.next;

    let evenTeamScore = 0;
    let oddTeamScore = 0;

    while (evenNode && oddNode) {
      const evenVal = evenNode.val;
      const oddVal = oddNode.val;

      if (evenVal > oddVal) {
        evenTeamScore++;
      } else if (oddVal > evenVal) {
        oddTeamScore++;
      } else {
        evenTeamScore++;
        oddTeamScore++;
      }

      evenNode = evenNode.next?.next ?? null;
      if (evenNode) {
        oddNode = evenNode.next;
      }
    }

    if (evenTeamScore === oddTeamScore) {
      return 'Tie';
    } else if (evenTeamScore > oddTeamScore) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }
}
