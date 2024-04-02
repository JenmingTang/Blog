
[[toc]]

# Collections

```kotlin
// List派生出mutableListOf
listOf
mutableListOf
setOf
mutableSetOf
mapOf("key" to 42)
mutableMapOf
// function
filter
map
any, all, none
find, findLast
first, last
count
associateBy, groupBy
partition分割
flatMap
minOrNull, maxOrNull
sorted
// Map Element Access
    map["key"]
    map.getValue("key")
zip
getOrElse
```

## 与Collections同级的都在下面

:::danger 与Collections同级的都在下面了
:::

## Scope Functions

```kotlin
let
// 用这个
// 用这个
// 用这个
run
with
    with(Object){}
apply
also
```

## Delegation

### Delegation Pattern

```kotlin
// List是接口，mutableList是实现了List的类
// 但是只能使用List的函数，而不是有更多函数的MutableList
class MyListImpl(n:String): List<String> by MutableList<String>(n)
```

### Delegated Properties

```kotlin
class Example {
    var p: String by Delegate()
class Delegate() {
    // thisRef指向类，prop指向属性
    operator fun getValue(thisRef: Any?, prop: KProperty<*>): String {
    operator fun setValue(thisRef: Any?, prop: KProperty<*>, value: String) {
```

## Productivity Boosters

### Named Arguments

```kotlin
format(userName = "foo", domain = "bar.com")
```

### String Templates

```kotlin
"Hello $greeting"
"Hello ${greeting.uppercase()}"
```

### Destructuring Declarations

```kotlin
val (x, y, z) = arrayOf(5, 10, 15)
```

### Smart Casts

```kotlin
// Casts from nullable types to their non-nullable counterparts.
// 从可 null 类型强制转换为不可为 null 的对应项。
// date != null已经走了，所以调用date.isLeapYear必然是安全的
if (date != null && date.isLeapYear) {
// Casts from a supertype to a subtype.
if (date is LocalDate) {
```

## [Kotlin/JS](https://play.kotlinlang.org/byExample/09_Kotlin_JS/01_dynamic)

:::danger 学它干嘛，我颠啊
:::
