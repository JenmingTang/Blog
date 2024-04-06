[[toc]]

# Miscellaneous

## 函数变量

```kotlin
// 重复器
repeat(50_000){
    launch {}
}
```

## 协程

```kotlin
// 常规函数可直接调用，阻塞当前线程
// 其内会从上往下
runBlocking{
    // 开个新的范围，可脱离从上往下
    val a = launch{
        delay(1000)
    }
    println()
    // 将新范围插回去，再次从上往下，其下方代码将阻塞
    a.join()
}

```

```kotlin
runBlocking{
    // 只是一个挂起函数域
    coroutineScope{

    }
}
// suspend fun域内无launch引用，故需要coroutineScope
suspend fun doWorld() = coroutineScope {
    launch{}
    launch{}
}
```

```kotlin
// 类似JS的Promise
val result = async {
            delay(1000)
            service.todos().toString()
        }
//        async类似launch，返回单个对象
        result.await()
        // 返回列表
        result.awaitAll().sum()
```

### Android 专用

:::info Dispatchers.Default
公共线程池中的不同线程上运行“contributors”协程  
async(Dispatchers.Default) { }  
launch(Dispatchers.Main) {  
最好从外部作用域使用调度程序，而不是在每个端点上显式指定调度程序。
:::

```kotlin
// launch(Dispatchers.Default)可以不指定Dispatcher
launch(Dispatchers.Default) { // Step 1: 启动一个新的协程
    val users = loadContributorsConcurrent(service, req) // Step 2: 在后台线程加载数据
    withContext(Dispatchers.Main) { // Step 3: 切换到主线程
        updateResults(users, startTime) // Step 4: 更新UI界面
    }
}

```

### Android 专专专用

:::info
只要 Composable 组件还在屏幕上显示，其对应的 CoroutineScope 就会持续有效。当 Composable 组件离开屏幕（例如由于导航或条件渲染导致不可见）时，相应的 CoroutineScope 会被自动取消，确保相关协程在组件不再需要时能被正确清理。  

能在不阻塞主线程的情况下执行异步任务和适时更新 UI
:::

```kotlin
@Composable
fun MyScreen() {
    val coroutineScope = rememberCoroutineScope()
    // 鼠标点击
    LaunchedEffect(Unit) { // 或其他合适的触发键值
        coroutineScope.launch {
            // 使用这个 CoroutineScope 启动协程
            // 这里的代码将在后台线程执行，比如网络请求、数据库操作等
            val result = async(Dispatchers.IO) { performSomeLongRunningTask() }

            // 在这里切换到主线程更新 UI
            withContext(Dispatchers.Main) {
                // 使用 result.await() 获取异步操作的结果，并更新 Compose UI
                // ...
            }
        }
    }

    // 其他 Compose UI 组件
}

```

### [到这接不学了](https://kotlinlang.org/docs/coroutines-and-channels.html#structured-concurrency)
