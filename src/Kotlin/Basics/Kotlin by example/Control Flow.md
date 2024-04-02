[[toc]]

# Control Flow

## When

>可以作表达式，也可顺序语句

```kotlin
when (obj) {                                     // 1   
        1 -> println("One")
// 
val result = when (obj) {                   // 1
        1 -> "one"
```

## Loops

### Iterators

```kotlin
class Zoo(val animals: List<Animal>) {
    operator fun iterator(): Iterator<Animal> {             // 1
        return animals.iterator()
// 
for (animal in zoo) {
```

## Ranges

```kotlin
for(i in 0..3) {
for(i in 0 until 3) {
for(i in 2..8 step 2) {
for (i in 3 downTo 0) {
for (c in 'a'..'d') {
for (c in 'z' downTo 's' step 2) {
if (x in 1..5) {
if (x !in 6..10) {
```
