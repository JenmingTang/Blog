---
# title: title
---
[[toc]]

# [Customize your Java-JSON serialization using Jackson Annotations](https://medium.com/trabe/customize-your-serialization-using-jackson-annotations-d6b81c4785a6)

## [Offical Docs](https://github.com/FasterXML/jackson-docs?tab=readme-ov-file#tutorials)

## [Markdown 官方教程](https://markdown.com.cn/basic-syntax/line-breaks.html)

## Default behavior

### Serialization

```Java
    @Builder
    @Value
    public class JacksonExample {
```

## Customize the serializer

### Exclude fields

```Java
    @Builder
    @Value
    public class JacksonExample {
        @JsonIgnore
        private String fieldOne;
```

### Customize date formats

```Java
/* 
date fields in ISO 8601 format
 */
 @JsonFormat(shape = JsonFormat.Shape.STRING)
 private Calendar someDate;
```

```JSON
{
  "someDate": "2019-02-26T16:33:44.771+0000"
}
```

```Java
/* 
including a specific pattern for the conversion
 */
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern= "yyyy-MM-dd")
private Calendar someDate;
```

```JSON
{
  "someDate": "2019-02-26"
}
```

### Specifying custom names for the fields

```Java
@JsonProperty("date")
private Calendar someDate;
```

```JSON
{
  "date": "2019-02-26"
}
```

### Snake Case? No problem

```Java
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class JacksonExample {
    private String fieldOne;
    /* 
    without
     */
    // @JsonProperty("field_one")
    // private String fieldOne;
```

```JSON
{
  "field_one": "Some text",
}
```

### Strategies for different naming needs

```Java
/* 
field_one
 */
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
/* 
field-one
 */
@JsonNaming(PropertyNamingStrategy.KebabCaseStrategy.class)
/* 
fieldone
 */
@JsonNaming(PropertyNamingStrategy.LowerCaseStrategy.class)
/* 
FieldOne
 */
@JsonNaming(PropertyNamingStrategy.UpperCamelCaseStrategy.class)
public class JacksonExample {
```

### Customize enum representation

```Java
public enum JacksonExampleEnum {
    OPTION_1("0", "0"), OPTION_2("1", "1");
    private String a;
    private String b;

@Builder
@Value
public class JacksonExample {
    private JacksonExampleEnum someEnum;
```

```JSON
{
  "some_enum": "OPTION_1"
}
```

>We can annotate any method of the enum with @JsonValue and the result of that method will be the value used for the serialization.

```Java
public enum JacksonExampleEnum {
    /* 
    。。。接上面类
     */
    @JsonValue
    public String getA() {
        return a;
    }
```

```JSON
{
  "some_enum": "0"
}
```

>Annotate the enum with @JsonFormat(shape = JsonFormat.Shape.OBJECT):

```Java
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum JacksonExampleEnum {
    /* 
    底下没有任何注解
     */
```

```JSON
{
  "some_enum": {
    "a": "0",
    "b": "0"
  }
}
```

## Wrapping up 总结

```
Spring Boot is good enough for a variety of scenarios
    Under without Jackson annotate control.
    在没有杰克逊注释控制的情况下。

A good starting point for those advanced tweaking possibilities can be found [here](https://www.baeldung.com/jackson-advanced-annotations).
```
