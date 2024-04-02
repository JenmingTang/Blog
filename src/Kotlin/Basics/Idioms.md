[[toc]]

# [Idioms](https://kotlinlang.org/docs/idioms.html)

## Create DTOs (POJOs/POCOs)

```kotlin
data class Customer(val name: String, val email: String)
```

::: info 直接实现了
equals() hashCode() toString() copy() componentX()
:::

## Read-only map

```kotlin
val map = mapOf("a" to 1, "b" to 2, "c" to 3)
```

## Access a map entry

```kotlin
map["key"] = value
```

## Traverse a map or a list of pairs

```kotlin
for ((k, v) in map) {
```

## Iterate over a range

```kotlin
for (i in 1..100) { ... }  // closed-ended range: includes 100
for (i in 1..<100) { ... } // open-ended range: does not include 100
for (x in 2..10 step 2) { ... }
for (x in 10 downTo 1) { ... }
(1..10).forEach { ... }
```

## Lazy property

```kotlin
val p: String by lazy { // the value is computed only on first access
    // compute the string
```

## Extension functions

```kotlin
fun String.spaceToCamelCase() { ... }
```

## Create a singleton

```kotlin
object Resource {
    val name = "Name"
```

## Use inline value classes for type-safe values对类型安全值使用内联值类

```kotlin
@JvmInline
value class EmployeeId(private val id: String)
```

:::info
类通过 @JvmInline 注解被声明为内联类，这意味着在 JVM 字节码级别上，它会被替换为它的底层类型，以避免运行时开销，保持与原始类型的性能接近。  
value class 表示这是一个值类，其主要目的是为基本类型（在这个例子中是 String）提供额外的语义，但不增加额外存储空间。
:::

```kotlin
val employeeId: EmployeeId = EmployeeId("E12345")
```

:::info
虽然在逻辑上我们操作的是 EmployeeId 类型，但在编译后的字节码中，这将被视为直接操作字符串 "E12345"，从而兼顾了类型安全和性能优化。
:::

## Instantiate an abstract class

```kotlin
abstract class MyAbstractClass {
    abstract fun doSomething()
// 单例（Java匿名类）实现了抽象类
val myObject = object : MyAbstractClass() {
        override fun doSomething() {
```

## If-not-null shorthand

```kotlin
println(files?.size) // size is printed if files is not null
```

## If-not-null-else shorthand

```kotlin
val files = File("Test").listFiles()
// 
val result = files?.size ?: "empty"
// 
files?.size ?: run {
```

## Execute a statement if null

```kotlin
values["email"] ?: throw IllegalStateException("Email is missing!")
```

## try-catch expression

```kotlin
val result = try {
        count()
    } catch (e: ArithmeticException) {
        throw IllegalStateException(e)
```

## if expression

```kotlin
val y = if (x == 1) {
    "one"
```

## Call multiple methods on an object instance (with)

```kotlin
with(student){
    student.do()
    student.eat()
```

## Java 7's try-with-resources

```kotlin
// 注意.use{
val stream = Files.newInputStream(Paths.get("/some/file.txt"))
stream.buffered().reader().use { reader ->
    println(reader.readText())
// Java's
try{}catch
try(
    Scanner scanner = new Scanner(System.in)//;
){}catch
```

## Generic function that requires the generic type information
>
>Java、Kotlin的泛型

```kotlin
//  public final class Gson {
//     ...
//     public <T> T fromJson(JsonElement json, Class<T> classOfT) throws JsonSyntaxException {
//     ...

inline fun <reified T: Any> Gson.fromJson(json: JsonElement): T = this.fromJson(json, T::class.java)
```

## Swap two variables

>交换两个变量？？字面意思

```kotlin
var a = 1
var b = 2
a = b.also { b = a }
// a=2
// b=1
```

## Mark code as incomplete (TODO)

```kotlin
// TODO() return Nothing
fun calcTaxes(): BigDecimal = TODO("Waiting for feedback from accounting")
```
