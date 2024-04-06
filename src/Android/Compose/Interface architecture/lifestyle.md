# [生命周期](https://developer.android.com/develop/ui/compose/lifecycle?hl=zh-cn)

## [添加额外信息以促进智能重组](https://developer.android.com/develop/ui/compose/lifecycle?hl=zh-cn#add-info-smart-recomposition)

```kotlin
@Composable
fun MoviesScreenWithKey(movies: List<Movie>) {
    Column {
        // 保证key在Column此域中唯一即可，全局不限
        for (movie in movies) {
            key(movie.id) { // Unique ID for this movie
                MovieOverview(movie)

//一些可组合项提供对 key 可组合项的内置支持 
LazyColumn {
        items(movies, key = { movie -> movie.id }) { movie ->
```

## 如果输入未更改，则跳过（重组）

:::info
对于相同的两个实例，其 equals 的结果将始终相同。（用==而不是===，系统只用==）  

所有基元值类型：Boolean、Int、Long、Float、Char 等。
字符串
所有函数类型 (lambda)
:::

>将对象标记为稳定，它的类型作为输入传递给重组函数，如果equals相同（对象的为成员元素？），并不会触发重组。

```kotlin
// Marking the type as stable to favor skipping and smart recompositions.
@Stable
interface UiState<T : Result<T>> {
```
