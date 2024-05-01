[[toc]]

# Manage state

## [可组合项中的状态](https://developer.android.com/develop/ui/compose/state?hl=zh-cn#state-in-composables)

```kotlin
/* 
等价的
 */
val mutableState = remember { mutableStateOf(default) }
var value by remember { mutableStateOf(default) }
val (value, setValue) = remember { mutableStateOf(default) }
/* 
旋转屏幕时，可组合项中的状态不会丢失
 */
rememberSaveable 
```

:::danger
不用可变对象（如 ArrayList<> 或 mutableListOf()）  
建议您使用可观察的数据存储器（如 State<List<>>）和不可变的 listOf()
:::

## 其他受支持的状态类型

|库|地址|
|----|----|
|Flow|implementation("androidx.lifecycle:lifecycle-runtime-compose:2.6.2")|
|LiveData|implementation("androidx.compose.runtime:runtime-livedata:1.6.1")|
|RxJava3|implementation("androidx.compose.runtime:runtime-rxjava3:1.6.1")|

## [状态提升](https://developer.android.com/develop/ui/compose/state?hl=zh-cn#state-hoisting)

## 在 Compose 中恢复状态

:::danger
注意 ：如果 activity 被用户完全关闭，rememberSaveable 将不会保留状态。例如，如果用户从“最近用过”屏幕向上滑动当前 activity，它不会保留状态。
:::

### 向对象添加 @Parcelize 注解（旋转屏幕不丢失）

```kotlin
@Parcelize
data class City(val name: String, val country: String) : Parcelable
    var selectedCity = rememberSaveable() {
        mutableStateOf(City("Madrid", "Spain"))
    }
```

#### [@Parcelize 依赖引入文档](https://developer.android.google.cn/kotlin/parcelize?hl=en#kts)

```kotlin
plugins {
    id("kotlin-parcelize")
/* 
需求
@Parcelize requires all serialized properties to be declared in the primary constructor. 
 */
import kotlinx.parcelize.Parcelize
@Parcelize
class User(val firstName: String, val lastName: String, val age: Int): Parcelable
```

可定制get set，我可以学

[Custom Parcelers](https://developer.android.google.cn/kotlin/parcelize?hl=en#custom_parcelers)

### ListSaver

```kotlin
data class City(val name: String, val country: String)

val CitySaver = listSaver<City, Any>(
    save = { listOf(it.name, it.country) },
    restore = { City(it[0] as String, it[1] as String) }
)

@Composable
fun CityScreen() {
    var selectedCity = rememberSaveable(stateSaver = CitySaver) {
        mutableStateOf(City("Madrid", "Spain"))
    }
}
```

## [在键发生变化时重新触发 remember 计算](https://developer.android.com/develop/ui/compose/state?hl=zh-cn#retrigger-remember)

```kotlin
//用 remember 函数可使 MutableState 值在重组后继续有效
// 对定义remember的可组合项的重组
var name by remember { mutableStateOf("") }
```

:::info
用 remember 将初始化或计算成本高昂的对象或操作结果存储在组合中。因此，您可能不会在每次重组时都重复进行这种计算
:::

```kotlin
val brush = remember {
    LoadImage(
// resId变了我就重新计算
val brush = remember(resId) {
    LoadImage(res = resId
```

## 重组后使用键存储状态

:::info
我可以学？？？不仅能让状态在重组后保留下来，还能让状态在重新创建 activity 和系统发起的进程终止后继续留存。  

rememberSaveable 接收 input 参数的目的与 remember 接收 keys 的目的相同。只要输入发生更改，缓存就会失效。下次函数重组时，rememberSaveable 会对 lambda 块重新执行计算。
:::

