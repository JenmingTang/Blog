[[toc]]


# Introduction

## Function

### Infix Functions

```kotlin
fun main() {
  infix fun Int.times(str: String) = str.repeat(this)        // 1
  println(2 times "Bye ")
```

### Operator Functions

```kotlin
operator fun Int.times(str: String) = str.repeat(this)       // 1
println(2 * "Bye ")
```

:::danger
看着就恶心，不学，学问机器人找官网
:::

### Functions with vararg Parameters

```kotlin
// prefix为命名参数
fun printAllWithPrefix(vararg messages: String, prefix: String) {
```

## Generics

```kotlin
class MutableStack<E>(vararg items: E) {
// 
fun <E> mutableStackOf(vararg elements: E) = MutableStack(*elements)
```

## Inheritance

```kotlin
open class Dog {                // 1
    open fun sayHello() {
// 
class Yorkshire : Dog() {       // 3
    override fun sayHello() {
// Passing Constructor Arguments to Superclass
class Asiatic(name: String) : Lion(name = name, origin = "India")
```
