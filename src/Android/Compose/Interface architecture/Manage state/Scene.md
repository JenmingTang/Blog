
[[toc]]

# 场景

## [最佳实践](https://developer.android.com/develop/ui/compose/state-hoisting?hl=zh-cn#hoisting-composables)

:::danger 提升状态的场景
界面逻辑：将状态提升到当前界面的最高层可组合项或上一层；外层不需要控制内层的状态就不用提升了（例如内层某些元素的显隐显示）  

Screen是最低共同祖先，一般基于屏幕作为根级的可组合项  

将状态移至可组合项的调用方，使可组合项变成无状态
:::

## 界面逻辑

![图 2. 聊天可组合项树](/public/Android/state-hoisting-initial-tree.png "图 2. 聊天可组合项树")
图 2. 聊天可组合项树

![图 3. 将 LazyColumn 状态从 LazyColumn 提升到 ConversationScreen](/public/Android/state-hoisting-animated.gif "图 3. 将 LazyColumn 状态从 LazyColumn 提升到 ConversationScreen")
图 3. 将 LazyColumn 状态从 LazyColumn 提升到 ConversationScreen

![图 4. 聊天可组合项树，其中 LazyListState 提升到 ConversationScreen](/public/Android/state-hoisting-passing-state.png "图 4. 聊天可组合项树，其中 LazyListState 提升到 ConversationScreen")
图 4. 聊天可组合项树，其中 LazyListState 提升到 ConversationScreen

```kotlin
value: T：要显示的当前值
onValueChange: (T) -> Unit：请求更改值的事件，其中 T 是建议的新值
```

### [以普通状态容器类作为状态所有者](https://developer.android.com/develop/ui/compose/state-hoisting?hl=zh-cn#classes-as-state-owner)

:::info 解耦、专注分离点
遵循可组合项的生命周期，rememberNavController() 或 rememberLazyListState()，LazyListState 普通状态容器类，用于控制 LazyColumn 或 LazyRow 的界面复杂性。
:::
:::warning
注意：如果普通状态容器类包含您在重新创建 activity 或进程后要保留的状态，请使用 rememberSaveable 并创建自定义 Saver。  

[参考在 Compose 中恢复状态](./index.md#listsaver)
:::

## [业务逻辑 ViewModel](https://developer.android.com/develop/ui/compose/state-hoisting?hl=zh-cn#business-logic)

:::info
网络请求、数据库访问、持有界面状态适时控制等等  

androidx.lifecycle:lifecycle-viewmodel-compose依赖  

如果 ViewModels 包含要在系统启动的进程重新创建后保留的状态，请使用 [SavedStateHandle](https://developer.android.com/reference/androidx/lifecycle/SavedStateHandle?hl=zh-cn) 保留该状态，替代PreferencesDataStore或数据库存储保存用户偏好？？？  

[SavedStateHandle](#savedstatehandle)
:::

### ViewModel 作为状态所有者

:::info
作用域限定为 ViewModelStoreOwner  

ViewModel 是界面状态的可信来源和最低共同祖先实体。
:::

### 屏幕界面状态

:::info
应在屏幕级可组合项中注入 ViewModel 实例，以提供对业务逻辑的访问
:::

```kotlin
class ConversationViewModel(
    channelId: String,
    messagesRepository: MessagesRepository
) : ViewModel() {
    // Hoisted state
    var inputMessage by mutableStateOf("")
        private set
/* 
？？？还能这样重载玩
 */
@Composable
private fun ConversationScreen(
    conversationViewModel: ConversationViewModel = viewModel()
) {

    val messages by conversationViewModel.messages.collectAsStateWithLifecycle()

    ConversationScreen(
        messages = messages,
        onSendMessage = { message: Message -> conversationViewModel.sendMessage(message) }
    )
}

@Composable
private fun ConversationScreen(
    messages: List<Message>,
    onSendMessage: (Message) -> Unit
```

## SavedStateHandle

作用域在ViewModel，可以跨Activity、跨Compose根屏幕界面  

没rememberSaveable方便，推荐这个  

[文档](https://developer.android.com/reference/androidx/lifecycle/SavedStateHandle)

无法替代PreferencesDataStore或数据库存储保存用户偏好  

与rememberSaveable区别，机器人理解，可以放自定义数据类型，而rememberSaveable要配置
@Parcelize等等  

```md
`SavedStateHandle` 和 `rememberSaveable` 在 Android 开发中的作用相似，都是为了处理 UI 状态的持久化，但它们分别应用于不同的场景，并且与 Jetpack 组件的不同部分相关联。

**SavedStateHandle**：
- 是 Jetpack 架构组件的一部分，主要用于配合 `ViewModel` 类一起工作。
- 提供了一种跨配置更改（例如屏幕旋转）或进程死亡时保存和恢复界面状态的方法。
- 可以在不依赖 `Bundle` 的情况下存储任意类型的数据，尤其适合于存储那些无法直接放入 `Bundle` 中的对象，如序列化复杂对象。
- 使用时，ViewModel 可以注入一个 `SavedStateHandle` 实例，开发者可以在其中设置和获取键值对形式的状态数据。

**rememberSaveable**：
- 是 Jetpack Compose 框架中的函数，用于在 Compose 视图重新组合时保持其可恢复状态。
- 当视图因配置变化（例如屏幕旋转）而重新创建时，`rememberSaveable` 可以自动保存并恢复状态，类似于传统的 `onSaveInstanceState` 和 `onRestoreInstanceState`。
- 它通常与可组合项（Composable functions）一起使用，确保即使在Compose树重建时也能保留某些UI元素的状态。
- `rememberSaveable` 内部使用 `Bundle` 对状态进行序列化和反序列化，因此传递给它的 lambda 函数应该返回可以写入 `Bundle` 的类型的数据。

总结来说，如果你是在原生Android开发中使用Jetpack ViewModel来管理界面状态，则可能会用到 `SavedStateHandle`；而在基于Jetpack Compose构建的应用程序中，你会用到 `rememberSaveable` 来保存和恢复可组合项的状态。两者都服务于状态持久化的目的，但在实现机制和使用场景上有所差异。
```

### Use

```kotlin
class MyViewModel(val savedStateHandle: SavedStateHandle) : ViewModel() {
// 
fun saveUserName(name: String) {
    savedStateHandle.set("username", name)
// 推荐用这个可以订阅
val userName: LiveData<String> = savedStateHandle.getLiveData("username")
// 或者直接获取非LiveData形式的数据
val immediateUserName: String? = savedStateHandle.get<String>("username")
```
