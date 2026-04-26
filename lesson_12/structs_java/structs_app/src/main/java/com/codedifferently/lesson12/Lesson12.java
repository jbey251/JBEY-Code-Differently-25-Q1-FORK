package com.codedifferently.lesson12;

public class Lesson12 {

  /**
   * Provide the solution to LeetCode 3062 here:
   * https://github.com/yang-su2000/Leetcode-algorithm-practice/tree/master/3062-winner-of-the-linked-list-game
   */
  public String gameResult(ListNode head) {
    ListNode evenNode = head;
    ListNode oddNode = head.next;
    int oddTeamScore = 0;
    int evenTeamScore = 0;

    while (evenNode != null) {
      int evenVal = evenNode.val;
      int oddVal = oddNode.val;

      if (evenVal > oddVal) {
        evenTeamScore++;
      } else if (oddVal > evenVal) {
        oddTeamScore++;
      } else {
        evenTeamScore++;
        oddTeamScore++;
      }

      evenNode = evenNode.next.next;
      if (evenNode != null) {
        oddNode = evenNode.next;
      }
    }

    if (evenTeamScore == oddTeamScore) {
      return "Tie";
    } else if (evenTeamScore > oddTeamScore) {
      return "Even";
    } else {
      return "Odd";
    }
  }
}
