package main

import "fmt"

// KMPSearch function
func KMPSearch(text, pattern string) int {
	if len(pattern) == 0 {
		return 0
	}

	// findLSP finds the Longest Suffix Prefix array
	findLSP := func(pattern string) []int {
		lsp := make([]int, len(pattern))
		j := 0 // j is the tail of the prefix
		lsp[0] = 0

		// i is the tail of the suffix
		for i := 1; i < len(pattern); i++ {
			for j > 0 && pattern[i] != pattern[j] {
				j = lsp[j-1]
			}
			if pattern[i] == pattern[j] {
				j++
			}
			lsp[i] = j
		}

		return lsp
	}

	lsp := findLSP(pattern)
	j := 0

	for i := 0; i < len(text); i++ {
		for j > 0 && text[i] != pattern[j] {
			j = lsp[j-1]
		}
		if text[i] == pattern[j] {
			if j == len(pattern)-1 {
				return i - j
			}
			j++
		}
	}

	return -1
}

func main() {
	// test
	res := KMPSearch("AABABABABC", "ABABC")
	fmt.Println(res) // Output: 5
}