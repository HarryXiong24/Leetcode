package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func postorderTraversalIterative(root *TreeNode) []int {
	res := []int{}
	stack := []*TreeNode{}

	if root == nil {
		return res
	}

	node := root
	preNode := new(TreeNode)

	for len(stack) > 0 || node != nil {
		for node != nil {
			stack = append(stack, node)
			node = node.Left
		}

		node = stack[len(stack)-1]
		stack = stack[0 : len(stack)-1]

		if node.Right == nil || node.Right == preNode {
			res = append(res, node.Val)
			preNode = node
			node = nil
		} else {
			stack = append(stack, node)
			node = node.Right
		}
	}

	return res
}

// test
func main() {
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 4,
			},
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 6,
				Left: &TreeNode{
					Val: 7,
				},
			},
		},
	}

	res := postorderTraversalIterative(root)
	fmt.Println(res)
}
