# [架构](https://developer.android.com/develop/ui/compose/architecture?hl=zh-cn)

:::info 状态
mutableStateOf(value) 会创建一个 MutableState，后者是 Compose 中的可观察类型。如果其值有任何更改，系统会安排重组读取此值的所有可组合函数。

remember 会将对象存储在组合中，当调用 remember 的可组合项从组合中移除后，它会忘记该对象。

rememberSaveable 通过将状态保存在 Bundle 中来保留状态，使其在配置更改后仍保持不变。
:::

## 定义可组合项参数

>传属性而不是对象

```kotlin
@Composable
fun Header(title: String, subtitle: String) {
    // Recomposes when title or subtitle have changed.

@Composable
fun Header(news: News) {
    // Recomposes when a new instance of News is passed in.
```

## 事件

```kotlin
class MyViewModel : ViewModel() {
    // 登录有四种状态：登录中、登录成功、登录失败、退出登录
    // 这里枚举了
    private val _uiState = mutableStateOf<UiState>(UiState.SignedOut)
    val uiState: State<UiState>
        get() = _uiState
```

:::info
除了 mutableStateOf API 之外，Compose 还提供 LiveData、Flow 和 Observable 的扩展，用于注册为监听器，并将值表示为状态。
:::

```kotlin
class MyViewModel : ViewModel() {
    private val _uiState = mutableStateOf<UiState>(UiState.SignedOut)
    val uiState: LiveData<UiState>
            get() = _uiState

@Composable
fun MyComposable(viewModel: MyViewModel) {
    val uiState = viewModel.uiState.observeAsState()
```
