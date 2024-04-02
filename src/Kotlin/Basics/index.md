[[toc]]

# [Basic syntax](https://kotlinlang.org/docs/basic-syntax.html)

## Program entry point

```kotlin
fun main(args: Array<String>) {
    println(args.contentToString())
```

## Functions

```kotlin
fun sum(a: Int, b: Int): Int {
    return a + b
// 
fun sum(a: Int, b: Int) = a + b
// default return Unit
fun printSum(a: Int, b: Int) {
```

## Variables

```kotlin
// val var +=
val a:Int = 1
var b:Int
b=1
val c = 1
```

## Creating classes and instances

```kotlin
class A
// 
class B(val name:String? = """""")
// 可继承
open class C
class D:C()
```

## String templates

```kotlin
var a = 1
// simple name in template:
val s1 = "a is $a" 
a = 2
// arbitrary expression in template:
val s2 = "${s1.replace("is", "was")}, but now is $a"
```

## Conditional expressions

```kotlin
fun maxOf(a: Int, b: Int) = if (a > b) a else b
```

## Conditional expressions

```kotlin
for (item in items) {
// 
for (index in items.indices) {
```

## when expression

```kotlin
// is 判断类型
fun describe(obj: Any): String =
    when (obj) {
        1          -> "One"
        "Hello"    -> "Greeting"
        is Long    -> "Long"
        !is String -> "Not a string"
        else       -> "Unknown"
    }
```

## Ranges

```kotlin
if (x in 1..y+1) {
// 
if (-1 !in 0..list.lastIndex) {
// 
if (list.size !in list.indices) {
// 
for (x in 1..5) {
// [1,10-1]
for (x in 1..10 step 2) {
// [9,0]
for (x in 9 downTo 0 step 3) {
```

## Collections

```kotlin
for (item in items) {
// 
when {
    "orange" in items -> println("juicy")
```

## Nullable values and null checks

```kotlin
// 可能返回Null
fun parseInt(str: String): Int? {
```

## Type checks and automatic casts

```kotlin
if (obj is String) {
        // `obj` is automatically cast to `String` in this branch
        return obj.length
// 
if (obj !is String) return null
// 
if (obj is String && obj.length > 0) {
        return obj.length
```
