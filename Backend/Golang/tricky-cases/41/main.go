package main

// func main() {
// 	var x = nil
// 	_ = x
// }

// nil 用于表示 interface、函数、maps、slices 和 channels 的“零值”。如果不指定变量的类型，编译器猜不出变量的具体类型，导致编译错误。

func main() {
	var x interface{} = nil
	_ = x
}

// 在 Go 语言中，空白标识符 (`_`) 是一个特殊的标识符，它不需要也不能被定义。它是语言内置的一个特性，专门用来表示“我不关心这个值”。

// 以下是关于 `_` 的几个特点：

// 1. `_` 不需要定义
// 你可以直接使用 `_`，例如：

// ```go
// value, _ := strconv.Atoi("123")
// ```

// 这里 `value` 是定义的变量，而 `_` 是直接使用的空白标识符，不需要也不能事先声明。

// 2. 不能赋值给 `_`
// 虽然你可以通过 `_` 丢弃值，但不能将 `_` 的值赋回给其他变量，例如：

// ```go
// _ = 10        // 可以，将 10 丢弃
// x := _        // 错误：不能从空白标识符赋值
// ```

// 3. `_` 不占用内存
// 空白标识符从语义上说是“忽略”值的地方，它不会占用任何内存，也不会存储数据。

// 4. 多次使用
// 在同一个作用域中，可以多次使用 `_`，不会引发冲突或错误：

// ```go
// value1, _ := strconv.Atoi("123")
// value2, _ := strconv.Atoi("456")
// ```

// `_` 可以多次使用来忽略不同的值。
