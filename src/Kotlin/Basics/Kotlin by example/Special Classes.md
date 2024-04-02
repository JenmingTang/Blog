[[toc]]

# Special Classes

## Enum Classes

```kotlin
enum class Color(val rgb: Int) {
    YELLOW(0xFFFF00);
    // and位运算，函数判断自身是否包含RED(0xFF0000)，显然YELLOW包含
    fun containsRed() = (this.rgb and 0xFF0000 != 0)
```

## Sealed Classes

:::info
密封类允许您限制继承的使用。声明已密封的类后，只能从声明密封类的同一包中对该类进行子类化。它不能在声明密封类的包之外进行子类化。  
就是限制此类只能在同包内继承
:::

```kotlin
sealed class Mammal(val name: String)
class Cat(val catName: String) : Mammal(catName)
```

## Object Keyword

>单例对象，类似Java的静态对象、匿名内部类

```kotlin
// object Expression
val dayRates = object {                                                     //2
        var standard: Int = 30 * standardDays
// object Declaration
object DoAuth {                                                 //1 
    fun takeParams(username: String, password: String) {
DoAuth.takeParams("foo", "qwerty")
// Companion Objects it's similar to the static methods in Java
class BigBen {                                  //1 
    companion object Bonger {                   //2
        fun getBongs(nTimes: Int) {
BigBen.getBongs(12)
```
