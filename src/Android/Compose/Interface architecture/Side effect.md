# [Compose 中的附带效应 Hook](https://developer.android.com/develop/ui/compose/side-effects?hl=zh-cn)
>
>触发一次性事件（例如显示信息提示控件），或在满足特定状态条件时进入另一个屏幕

## LaunchedEffect：在可组合项的作用域内运行挂起函数

```kotlin
// 开个协程让它一直挂着，而不是阻塞住主线程
// `LaunchedEffect` will cancel and re-launch if
// `scaffoldState.snackbarHostState` changes
// 注意参数
LaunchedEffect(snackbarHostState) {
            snackbarHostState.showSnackbar(
```

## rememberCoroutineScope：获取组合感知作用域，以在可组合项外启动协程
>
>注意调用点和领域

```kotlin
@Composable
fun MoviesScreen(snackbarHostState: SnackbarHostState) {
    // Creates a CoroutineScope bound to the MoviesScreen's lifecycle
    val scope = rememberCoroutineScope()
// use
scope.launch {
                        snackbarHostState.showSnackbar("Something happened!")
```

## 我可以学rememberUpdatedState：在效应中引用值，该值在值发生更改时不应重启

```kotlin
/* 
持有对 onTimeout 的最新引用（只有当它们真正发生变化时才更新引用，onTimeout内容变了我就变，持有第一次的引用）
因为每次重组时都会重新创建 onTimeout，所以 onTimeout 的引用会更新，从而导致倒计时重新开始，但是LaunchedEffect(true) {进一步防范了倒计时的重启
 */

// 开屏广告倒计时
// 两者结合可以实现对长期操作（如倒计时）的良好控制，避免不必要的重启。
@Composable
fun LandingScreen(onTimeout: () -> Unit) {
    // 无论 LandingScreen 如何重组，只要 onTimeout 函数本身没有改变，currentOnTimeout 就会保持最新的函数引用
    val currentOnTimeout by rememberUpdatedState(onTimeout)
// 永不发生变化的常量（如 Unit 或 true）
// 效果只会在组件初次绘制时启动一次，后续即使组件重组也不会再次启动
    LaunchedEffect(true) {
        delay(SplashWaitTimeMillis)
        currentOnTimeout()
    }
```

## 我可以学DisposableEffect：需要清理的效果

```kotlin
    // If `lifecycleOwner` changes, dispose and reset the effect
    DisposableEffect(lifecycleOwner) {
        // 注册监听
        // 清除监听
        onDispose {
```

## 我可以学SideEffect：将 Compose 状态发布到非 Compose 代码

>如需与非 Compose 管理的对象共享 Compose 状态，请使用 SideEffect 可组合项。使用 SideEffect 可保证效果在每次成功重组后都会执行。

```kotlin
val analytics: FirebaseAnalytics = remember {
        FirebaseAnalytics()
    }
    // 无需看analytics变不变化（看它脸色），我每次重组都会执行
    SideEffect {
        analytics.setUserProperty("userType", user.userType)
    }
```

## [produceState：将非 Compose 状态转换为 Compose 状态](https://developer.android.com/develop/ui/compose/side-effects?hl=zh-cn#producestate)
>
>启动协程，将异步结果转为响应式对象。后续结果变了，其依赖响应式结果的组件会重新重组。

## [derivedStateOf：将一个或多个状态对象转换为其他状态](https://developer.android.com/develop/ui/compose/side-effects?hl=zh-cn#derivedstateof)

```kotlin
// 这样，即使 firstVisibleItemIndex 频繁改变，showButton 只会在从0变成大于0或反之时更新，从而避免了不必要的重组。
val showButton by remember {
    derivedStateOf {
        listState.firstVisibleItemIndex > 0
    }
}


// ！！！看变量的变化频率，以下为错误案例
// DO NOT USE. Incorrect usage of derivedStateOf.
var firstName by remember { mutableStateOf("") }
var lastName by remember { mutableStateOf("") }

val fullNameBad by remember { derivedStateOf { "$firstName $lastName" } } // This is bad!!!
val fullNameCorrect = "$firstName $lastName" // This is correct
```

## 我可以学snapshotFlow：将 Compose 的 State 转换为 Flow
