package main

import (
	"bufio"
	"fmt"
	"strings"
)

func main() {
	txt := "Hello\n How are you?\n Test 1\n Test 2\n"

	scanner := bufio.NewScanner(strings.NewReader(txt))

	scanner.Split(bufio.ScanWords)

	for scanner.Scan() {
		word := scanner.Text()
		fmt.Println(word)
	}
}
