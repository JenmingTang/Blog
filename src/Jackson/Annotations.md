[[toc]]

# [Jackson Annotation Examples](https://www.baeldung.com/jackson-annotations)

## @JsonAnyGetter

```java
@JsonAnyGetter
    public Map<String, String> getProperties() {
// 
String result = new ObjectMapper().writeValueAsString(bean);
// 
{
    "name":"My bean",
    "attr2":"val2",
```

## @JsonGetter

```java
@JsonGetter("name")
    public String getTheName() {
// 
String result = new ObjectMapper().writeValueAsString(bean);
```

## @JsonPropertyOrder

```java
// @JsonPropertyOrder(alphabetic=true) 
@JsonPropertyOrder({ "name", "id" })
public class MyBean {
// 
String result = new ObjectMapper().writeValueAsString(bean);
// 
{
    "name":"My bean",
```

## @JsonRawValue

```java
@JsonRawValue
    public String json;
// 
{
    "name":"My bean",
    "json":{
        "attr":false
    }    
```

## @JsonValue 我可以学

## @JsonRootName(value = "user")

>mapper.enable(SerializationFeature.WRAP_ROOT_VALUE);  
>在序列化时，多套一层对象且用这个名字，类上用

```xml
<!-- @JsonRootName(value = "user", namespace="users") -->
<!-- 对于XML -->
<user xmlns="users">
```

## [@JsonSerialize](https://www.baeldung.com/jackson-annotations#7-jsonserialize) 属性定制器，日期时间等等 我可以学

```java
@JsonSerialize(using = CustomDateSerializer.class)
    public Date eventDate;
```

## @JsonCreator

:::info
Jackson Deserialization Annotations
:::
