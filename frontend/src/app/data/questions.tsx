const questions = [
  {
    title: "86. Partition List",
    description:
      "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(logn)",
    constraints: [
      "The number of nodes in the list is in the range [0, 200].",
      "-100 <= Node.val <= 100",
      "-200 <= x <= 200",
    ],
    examples: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" },
      { input: "head = [5,1,7,3], x = 4", output: "[1,3,5,7]" },
    ],
    testCases: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" },
      { input: "head = [5,1,7,3], x = 4", output: "[1,3,5,7]" },
    ],
  },

  {
    title: "21. Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n + m)",
    constraints: [
      "The number of nodes in each list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
    ],
    testCases: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
      { input: "list1 = [5], list2 = [1,2,3,4]", output: "[1,2,3,4,5]" },
    ],
  },

  {
    title: "141. Linked List Cycle",
    description: "Given a linked list, determine if it has a cycle in it.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 104].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" },
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" },
      { input: "head = [1], pos = -1", output: "False" },
    ],
  },

  {
    title: "234. Palindrome Linked List",
    description: "Given a singly linked list, determine if it is a palindrome.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^5].",
      "-10^5 <= Node.val <= 10^5",
    ],
    examples: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" },
    ],
    testCases: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" },
    ],
  },

  {
    title: "203. Remove Linked List Elements",
    description:
      "Remove all elements from a linked list of integers that have a value of val.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
      "0 <= val <= 100",
    ],
    examples: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" },
    ],
    testCases: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" },
    ],
  },

  {
    title: "2. Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.",
    difficulty: "Medium",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in each list is in the range [1, 100].",
      "0 <= Node.val <= 9",
    ],
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
    ],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
    ],
  },

  {
    title: "83. Remove Duplicates from Sorted List",
    description:
      "Given a sorted linked list, delete all duplicates such that each element appears only once.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 300].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,1,2]", output: "[1,2]" },
      { input: "head = [1,1,2,3,3]", output: "[1,2,3]" },
    ],
    testCases: [
      { input: "head = [1,1,2]", output: "[1,2]" },
      { input: "head = [1,1,2,3,3]", output: "[1,2,3]" },
    ],
  },
  {
    title: "141. Linked List Cycle II",
    description:
      "Given a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 104].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" },
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" },
    ],
  },
  {
    title: "160. Intersection of Two Linked Lists",
    description:
      "Write a program to find the node where two singly linked lists intersect. If there is no intersection, return null.",
    difficulty: "Easy",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^4 <= Node.val <= 10^4",
    ],
    examples: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" },
    ],
    testCases: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" },
    ],
  },
  {
    title: "206. Reverse Linked List",
    description: "Reverse a singly linked list.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
    ],
  },
  {
    title: "19. Remove Nth Node From End of List",
    description:
      "Remove the N-th node from the end of the list and return its head.",
    difficulty: "Medium",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 30].",
      "1 <= n <= length of list",
    ],
    examples: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" },
    ],
  },
  {
    title: "24. Swap Nodes in Pairs",
    description: "Swap every two adjacent nodes and return its head.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,2,3,4]", output: "[2,1,4,3]" },
      { input: "head = [1,2,3,4,5]", output: "[2,1,4,3,5]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4]", output: "[2,1,4,3]" },
      { input: "head = [1,2,3,4,5]", output: "[2,1,4,3,5]" },
    ],
  },
  {
    title: "92. Reverse Linked List II",
    description:
      "Reverse a linked list from position m to n. Do it in one-pass.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 500].",
      "1 <= m <= n <= length of list",
    ],
    examples: [
      { input: "head = [1,2,3,4,5], m = 2, n = 4", output: "[1,4,3,2,5]" },
      { input: "head = [5], m = 1, n = 1", output: "[5]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], m = 2, n = 4", output: "[1,4,3,2,5]" },
      { input: "head = [5], m = 1, n = 1", output: "[5]" },
    ],
  },
  {
    title: "328. Odd Even Linked List",
    description:
      "Given a singly linked list, group all odd nodes together followed by the even nodes. Please note that the relative order inside both the even and odd groups should remain as it was in the input list.",
    difficulty: "Medium",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[1,3,5,2,4]" },
      { input: "head = [2,1,3,5,6,4,7]", output: "[2,3,6,7,1,5,4]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5]", output: "[1,3,5,2,4]" },
      { input: "head = [2,1,3,5,6,4,7]", output: "[2,3,6,7,1,5,4]" },
    ],
  },
  {
    title: "147. Insertion Sort List",
    description: "Sort a linked list using insertion sort.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n^2)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "-1000 <= Node.val <= 1000",
    ],
    examples: [
      { input: "head = [4,2,1,3]", output: "[1,2,3,4]" },
      { input: "head = [-1,5,3,4,0]", output: "[-1,0,3,4,5]" },
    ],
    testCases: [
      { input: "head = [4,2,1,3]", output: "[1,2,3,4]" },
      { input: "head = [-1,5,3,4,0]", output: "[-1,0,3,4,5]" },
    ],
  },
  {
    title: "141. Linked List Cycle II",
    description:
      "Given a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" },
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" },
    ],
  },
  {
    title: "203. Remove Linked List Elements",
    description:
      "Remove all elements from a linked list of integers that have a value of val.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
      "0 <= val <= 100",
    ],
    examples: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" },
    ],
    testCases: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" },
    ],
  },
  {
    title: "160. Intersection of Two Linked Lists",
    description:
      "Write a program to find the node where two singly linked lists intersect. If there is no intersection, return null.",
    difficulty: "Easy",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^4 <= Node.val <= 10^4",
    ],
    examples: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" },
    ],
    testCases: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" },
    ],
  },
  {
    title: "25. Reverse Nodes in k-Group",
    description:
      "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.",
    difficulty: "Hard",
    avgTime: "10 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "1 <= k <= length of list",
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" },
    ],
  },
  {
    title: "61. Rotate List",
    description:
      "Given a linked list, rotate the list to the right by k places.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 500].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" },
    ],
  },
  {
    title: "203. Remove Linked List Elements",
    description:
      "Remove all elements from a linked list of integers that have a value of val.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
      "0 <= val <= 100",
    ],
    examples: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" },
    ],
    testCases: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" },
    ],
  },
  {
    title: "2. Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
    ],
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
    ],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
    ],
  },
  {
    title: "143. Reorder List",
    description:
      "Given a singly linked list, reorder it such that the list becomes: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...",
    difficulty: "Medium",
    avgTime: "9 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,2,3,4]", output: "[1,4,2,3]" },
      { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4]", output: "[1,4,2,3]" },
      { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]" },
    ],
  },
  {
    title: "160. Intersection of Two Linked Lists",
    description:
      "Write a program to find the node where two singly linked lists intersect. If there is no intersection, return null.",
    difficulty: "Easy",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^4 <= Node.val <= 10^4",
    ],
    examples: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" },
    ],
    testCases: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" },
    ],
  },
  {
    title: "25. Reverse Nodes in k-Group",
    description:
      "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.",
    difficulty: "Hard",
    avgTime: "10 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "1 <= k <= length of list",
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" },
    ],
  },
  {
    title: "21. Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return it as a new sorted list.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n + m)",
    constraints: [
      "The number of nodes in each list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
    ],
    testCases: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
    ],
  },
  {
    title: "141. Linked List Cycle",
    description: "Given a linked list, determine if it has a cycle in it.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" },
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" },
    ],
  },
  {
    title: "82. Remove Duplicates from Sorted List II",
    description:
      "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,2,3,3,4,4,5]", output: "[1,2,5]" },
      { input: "head = [1,1,1,2,3]", output: "[2,3]" },
    ],
    testCases: [
      { input: "head = [1,2,3,3,4,4,5]", output: "[1,2,5]" },
      { input: "head = [1,1,1,2,3]", output: "[2,3]" },
    ],
  },
  {
    title: "61. Rotate List",
    description:
      "Given a linked list, rotate the list to the right by k places.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 500].",
      "-100 <= Node.val <= 100",
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" },
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" },
    ],
  },
  {
    title: "2. Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
    ],
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
    ],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
    ],
  },
  {
    title: "234. Palindrome Linked List",
    description: "Given a singly linked list, determine if it is a palindrome.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^5].",
      "-10^5 <= Node.val <= 10^5",
    ],
    examples: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" },
    ],
    testCases: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" },
    ],
  },
  {
    title: "86. Partition List",
    description:
      "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 200].",
      "0 <= Node.val <= 50",
    ],
    examples: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" },
    ],
    testCases: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" },
    ],
  },

  {
    title: "1. Implement a Stack using Linked List",
    description:
      "In this problem, you need to implement a stack data structure using a linked list. The key operations are push (insert element) and pop (remove element).",
    difficulty: "Medium",
    avgTime: "10 Min",
    expectedComplexity: "O(1) for push and pop",
    constraints: ["N/A"],
    examples: [
      {
        input: "Stack: 1 -> 2 -> 3; Operation: push 4",
        output: "Stack: 1 -> 2 -> 3 -> 4",
      },
      { input: "Stack: 5; Operation: pop", output: "Stack: Empty" },
      {
        input: "Stack: 3 -> 6 -> 2; Operation: push 7",
        output: "Stack: 3 -> 6 -> 2 -> 7",
      },
    ],
    testCases: [
      {
        input: "Stack: 1 -> 2 -> 3; Operation: push 4",
        output: "Stack: 1 -> 2 -> 3 -> 4",
      },
      { input: "Stack: 5 -> 6; Operation: pop", output: "Stack: 5" },
      {
        input: "Stack: 3 -> 6; Operation: push 8",
        output: "Stack: 3 -> 6 -> 8",
      },
    ],
  },
  {
    title: "3. Evaluate the expression using a stack",
    description:
      "This problem involves evaluating a mathematical expression. You can use a stack to manage operands and operators while calculating the result.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The expression is a valid mathematical expression.",
      "Operators include +, -, *, /.",
    ],
    examples: [
      { input: "(3 + 2) * (5 - 4) / 2", output: "2.5" },
      { input: "3 + 2 * 2", output: "7" },
      { input: "10 + (2 * 3)", output: "16" },
    ],
    testCases: [
      { input: "(3 + 2) * (5 - 4) / 2", output: "2.5" },
      { input: "3 + 2 * 2", output: "7" },
      { input: "10 + (2 * 3)", output: "16" },
    ],
  },
  {
    title: "20. Check if parentheses are balanced using a stack",
    description:
      "In this problem, you need to check if a given string with parentheses is balanced (every opening parenthesis has a corresponding closing one).",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: ["The string will only contain parentheses '()'."],
    examples: [
      { input: "(()())", output: "True" },
      { input: "(()", output: "False" },
      { input: "(())()", output: "True" },
    ],
    testCases: [
      { input: "(()())", output: "True" },
      { input: "(()", output: "False" },
      { input: "(())()", output: "True" },
    ],
  },

  // Binary Tree Questions
  {
    title: "104. Find the height of a binary tree",
    description:
      "The height of a binary tree is the length of the longest path from the root node to a leaf node. Write a function to calculate this height.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: ["The tree will contain between 1 and 100 nodes."],
    examples: [
      { input: "Binary Tree: root(1) -> left(2) -> right(3)", output: "2" },
      { input: "Binary Tree: root(1) -> left(2)", output: "2" },
      { input: "Binary Tree: root(1) -> left(2) -> left(4)", output: "3" },
    ],
    testCases: [
      { input: "Binary Tree: root(1) -> left(2) -> right(3)", output: "2" },
      { input: "Binary Tree: root(1) -> left(2)", output: "2" },
      { input: "Binary Tree: root(1) -> left(2) -> left(4)", output: "3" },
    ],
  },
  {
    title: "102. Implement level-order traversal of a binary tree",
    description:
      "Level-order traversal is a breadth-first search (BFS) traversal of the tree. Visit all nodes at each level from top to bottom.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: ["The tree will contain between 1 and 100 nodes."],
    examples: [
      {
        input: "Binary Tree: root(1) -> left(2) -> right(3)",
        output: "[1, 2, 3]",
      },
      { input: "Binary Tree: root(1) -> left(2)", output: "[1, 2]" },
      {
        input: "Binary Tree: root(1) -> left(2) -> right(3) -> left(4)",
        output: "[1, 2, 3, 4]",
      },
    ],
    testCases: [
      {
        input: "Binary Tree: root(1) -> left(2) -> right(3)",
        output: "[1, 2, 3]",
      },
      { input: "Binary Tree: root(1) -> left(2)", output: "[1, 2]" },
      {
        input: "Binary Tree: root(1) -> left(2) -> right(3) -> left(4)",
        output: "[1, 2, 3, 4]",
      },
    ],
  },
  {
    title: "110. Check if a binary tree is a balanced binary tree",
    description:
      "A binary tree is balanced if the depth of the two subtrees of every node never differs by more than 1. Check whether a binary tree is balanced.",
    difficulty: "Medium",
    avgTime: "9 Min",
    expectedComplexity: "O(n)",
    constraints: ["The tree will contain between 1 and 100 nodes."],
    examples: [
      { input: "Binary Tree: root(1) -> left(2) -> right(3)", output: "True" },
      { input: "Binary Tree: root(1) -> left(2) -> left(3)", output: "False" },
      {
        input: "Binary Tree: root(1) -> left(2) -> right(3) -> left(4)",
        output: "True",
      },
    ],
    testCases: [
      { input: "Binary Tree: root(1) -> left(2) -> right(3)", output: "True" },
      { input: "Binary Tree: root(1) -> left(2) -> left(3)", output: "False" },
      {
        input: "Binary Tree: root(1) -> left(2) -> right(3) -> left(4)",
        output: "True",
      },
    ],
  },

  // Queue Questions
  {
    title: "4. Implement a queue using two stacks",
    description:
      "In this problem, implement a queue using two stacks. You need to handle enqueue and dequeue operations.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(1) for enqueue, O(n) for dequeue",
    constraints: ["N/A"],
    examples: [
      {
        input: "Queue operations: enqueue(1), enqueue(2), dequeue()",
        output: "Dequeue returns: 1",
      },
      {
        input: "Queue operations: enqueue(3), enqueue(4), dequeue()",
        output: "Dequeue returns: 3",
      },
      {
        input: "Queue operations: enqueue(5), dequeue(), enqueue(6)",
        output: "Dequeue returns: 5",
      },
    ],
    testCases: [
      {
        input: "Queue operations: enqueue(1), enqueue(2), dequeue()",
        output: "Dequeue returns: 1",
      },
      {
        input: "Queue operations: enqueue(3), enqueue(4), dequeue()",
        output: "Dequeue returns: 3",
      },
      {
        input: "Queue operations: enqueue(5), dequeue(), enqueue(6)",
        output: "Dequeue returns: 5",
      },
    ],
  },
  {
    title: "622. Design a circular queue",
    description:
      "A circular queue is a queue where the last position is connected to the first position. Implement its basic operations.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(1) for enqueue and dequeue",
    constraints: ["The queue will have a fixed size."],
    examples: [
      {
        input: "Circular Queue operations: enqueue(1), enqueue(2), dequeue()",
        output: "Dequeue returns: 1",
      },
      {
        input:
          "Circular Queue operations: enqueue(3), enqueue(4), enqueue(5), dequeue()",
        output: "Dequeue returns: 3",
      },
      {
        input: "Circular Queue operations: enqueue(6), dequeue(), enqueue(7)",
        output: "Dequeue returns: 6",
      },
    ],
    testCases: [
      {
        input: "Circular Queue operations: enqueue(1), enqueue(2), dequeue()",
        output: "Dequeue returns: 1",
      },
      {
        input:
          "Circular Queue operations: enqueue(3), enqueue(4), enqueue(5), dequeue()",
        output: "Dequeue returns: 3",
      },
      {
        input: "Circular Queue operations: enqueue(6), dequeue(), enqueue(7)",
        output: "Dequeue returns: 6",
      },
    ],
  },
  {
    title: "6. Implement a priority queue",
    description:
      "In a priority queue, each element is associated with a priority. Implement the priority queue with enqueue, dequeue, and peek operations.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(log n) for enqueue and dequeue",
    constraints: ["The queue will have a limited size."],
    examples: [
      {
        input:
          "Priority Queue: enqueue(1, priority 2), enqueue(2, priority 1), dequeue()",
        output: "Dequeue returns: 1",
      },
      {
        input:
          "Priority Queue: enqueue(3, priority 5), enqueue(4, priority 3), dequeue()",
        output: "Dequeue returns: 3",
      },
      {
        input:
          "Priority Queue: enqueue(5, priority 1), enqueue(6, priority 4), dequeue()",
        output: "Dequeue returns: 5",
      },
    ],
    testCases: [
      {
        input:
          "Priority Queue: enqueue(1, priority 2), enqueue(2, priority 1), dequeue()",
        output: "Dequeue returns: 1",
      },
      {
        input:
          "Priority Queue: enqueue(3, priority 5), enqueue(4, priority 3), dequeue()",
        output: "Dequeue returns: 3",
      },
      {
        input:
          "Priority Queue: enqueue(5, priority 1), enqueue(6, priority 4), dequeue()",
        output: "Dequeue returns: 5",
      },
    ],
  },

  // Dynamic Programming Questions
  {
    title: "300. Longest increasing subsequence in an array",
    description:
      "Find the longest increasing subsequence (LIS) in a given array of integers. The LIS is a subsequence where each element is greater than the previous one.",
    difficulty: "Hard",
    avgTime: "12 Min",
    expectedComplexity: "O(n^2)",
    constraints: ["The array will have between 1 and 1000 elements."],
    examples: [
      {
        input: "Array: [10, 22, 9, 33, 21, 50, 41, 60]",
        output: "LIS Length: 5",
      },
      { input: "Array: [3, 10, 2, 1, 20]", output: "LIS Length: 3" },
      { input: "Array: [3, 2]", output: "LIS Length: 1" },
    ],
    testCases: [
      {
        input: "Array: [10, 22, 9, 33, 21, 50, 41, 60]",
        output: "LIS Length: 5",
      },
      { input: "Array: [3, 10, 2, 1, 20]", output: "LIS Length: 3" },
      { input: "Array: [3, 2]", output: "LIS Length: 1" },
    ],
  },
  {
    title:
      "5. Knapsack with large Weights",
    description:
      "This is the classic 0/1 Knapsack problem. Given a set of weights and corresponding values, determine the maximum value that can be carried in a knapsack with a given weight capacity.",
    difficulty: "Hard",
    avgTime: "10 Min",
    expectedComplexity: "O(n * W)",
    constraints: ["The number of items will be between 1 and 100."],
    examples: [
      {
        input: "Items: weights=[1, 3, 4, 5], values=[1, 4, 5, 7], Capacity=7",
        output: "Maximum Value: 9",
      },
      {
        input: "Items: weights=[2, 3, 4], values=[3, 4, 5], Capacity=5",
        output: "Maximum Value: 7",
      },
      {
        input: "Items: weights=[1, 2, 3], values=[10, 20, 30], Capacity=5",
        output: "Maximum Value: 50",
      },
    ],
    testCases: [
      {
        input: "Items: weights=[1, 3, 4, 5], values=[1, 4, 5, 7], Capacity=7",
        output: "Maximum Value: 9",
      },
      {
        input: "Items: weights=[2, 3, 4], values=[3, 4, 5], Capacity=5",
        output: "Maximum Value: 7",
      },
      {
        input: "Items: weights=[1, 2, 3], values=[10, 20, 30], Capacity=5",
        output: "Maximum Value: 50",
      },
    ],
  },
];

export default questions;
