# Functional

## Higher-Order Functions

### Taking Functions as Parameters

```kotlin
fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int)
calculate(4, 5) { a, b -> a * b }
// 方法引用
calculate(4, 5, ::sum)
```

### Returning Functions

```kotlin
fun operation(): (Int) -> Int {                                     // 1
    return ::square
```

## Lambda Functions

```kotlin
val upperCase1: (String) -> String = { str: String -> str.uppercase() } // 1

val upperCase2: (String) -> String = { str -> str.uppercase() }         // 2
// XXX ->
// 必须指定XXX，不然报错
val upperCase3 = { str: String -> str.uppercase() }                     // 3
// Cannot infer a type for this parameter. Please specify it explicitly.
// val upperCase4 = { str -> str.uppercase() }                          // 4
// 建议这个
// 建议这个
// 建议这个
val upperCase5: (String) -> String = { it.uppercase() }                 // 5

val upperCase6: (String) -> String = String::uppercase
```

## [Extension Functions and Properties](https://play.kotlinlang.org/byExample/04_functional/03_extensionFunctions)

```kotlin
fun Order.maxPricedItemValue(): Float = this.items.maxByOrNull { it.price }?.price ?: 0F    // 2  
val Order.commaDelimitedItemNames: String                                                   // 3
    get() = items.map { it.name }.joinToString()
// 
fun <T> T?.nullSafeToString() = this?.toString() ?: "NULL"  // 1
