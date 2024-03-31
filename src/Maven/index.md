---
# title: title
---
[[toc]]
# Maven
## Aliyun Mirror
```xml
<!-- 
网站
    https://developer.aliyun.com/mvn/view
<mirrors>
    <mirror>
 -->
<mirror>
    <id>public</id>
    <name>public</name>
    <url>https://maven.aliyun.com/repository/public</url>
    <mirrorOf>public</mirrorOf>
  </mirror>
  <mirror>
    <id>apache-snapshots</id>
    <url>https://maven.aliyun.com/repository/apache-snapshots</url>
    <mirrorOf>apache-snapshots</mirrorOf>
  </mirror>
  <mirror>
    <id>central</id>
    <url>https://maven.aliyun.com/repository/central</url>
    <mirrorOf>central</mirrorOf>
  </mirror>
  <mirror>
    <id>google</id>
    <url>https://maven.aliyun.com/repository/google</url>
    <mirrorOf>google</mirrorOf>
  </mirror>
  <mirror>
    <id>gradle-plugin</id>
    <url>https://maven.aliyun.com/repository/gradle-plugin</url>
    <mirrorOf>gradle-plugin</mirrorOf>
  </mirror>
  <mirror>
    <id>jcenter</id>
    <url>https://maven.aliyun.com/repository/jcenter</url>
    <mirrorOf>jcenter</mirrorOf>
  </mirror>
  <mirror>
    <id>spring</id>
    <url>https://maven.aliyun.com/repository/spring</url>
    <mirrorOf>spring</mirrorOf>
  </mirror>
  <mirror>
    <id>spring-plugin</id>
    <url>https://maven.aliyun.com/repository/spring-plugin</url>
    <mirrorOf>spring-plugin</mirrorOf>
  </mirror>
  <mirror>
    <id>releases</id>
    <url>https://maven.aliyun.com/repository/releases</url>
    <mirrorOf>releases</mirrorOf>
  </mirror>
  <mirror>
    <id>snapshots</id>
    <url>https://maven.aliyun.com/repository/snapshots</url>
    <mirrorOf>snapshots</mirrorOf>
  </mirror>
  <mirror>
    <id>grails-core</id>
    <url>https://maven.aliyun.com/repository/grails-core</url>
    <mirrorOf>grails-core</mirrorOf>
  </mirror>
  <mirror>
    <id>mapr-public</id>
    <url>https://maven.aliyun.com/repository/mapr-public</url>
    <mirrorOf>mapr-public</mirrorOf>
  </mirror>
  <mirror>
    <id>staging-alpha</id>
    <url>https://maven.aliyun.com/repository/staging-alpha</url>
    <mirrorOf>staging-alpha</mirrorOf>
  </mirror>
  <mirror>
    <id>staging-alpha-group</id>
    <url>https://maven.aliyun.com/repository/staging-alpha-group</url>
    <mirrorOf>staging-alpha-group</mirrorOf>
  </mirror>
```

```xml
阶段 clean 和目标 dependency:copy-dependencies 可以按顺序执行
    mvn clean dependency:copy-dependencies package
    mvn clean verify
```

## [Maven in 5 Minutes](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)
```Java
/* 
Prerequisites
    maven 1.9.* required java 8 and up
 */

/* 
mvn --version
 */

/* 
Creating a Project
    mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
 */

/* 
Build the Project
    mvn package
run jar
    java -cp target/my-app-1.0-SNAPSHOT.jar com.mycompany.app.App
 */

```
### Java 9 or later
>默认情况下，您的 Maven 版本可能使用与 Java 9 或更高版本不兼容的旧版本 maven-compiler-plugin 
```xml
    <properties>
    <!-- 指定Java几 -->
        <maven.compiler.release>11</maven.compiler.release>
    </properties>
 
    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <!-- 至少使用 3.6.0 版本 用Java9及以上的话-->
                    <version>3.8.1</version>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>
```
### Running Maven Tools
#### Maven Phases
>尽管这不是一个全面的列表，但这些是执行的最常见的默认生命周期阶段。

```java
mvn validate
    使用

validate

package
    生成两边class、jar
compile
    没有jar
test
    两边的class都生成，业务的、测试的
integration-test
    没用过
    集成测试：如有必要，处理包并将其部署到可以运行集成测试的环境中
verify
    同package，但多验证
install
    下载包到本地仓库 C:\Users\Jenming\.m2\repository\com\mycompany\app\my-app\1.0-SNAPSHOT
    同package
deploy
    没用过
    在集成或发布环境中完成，将最终包复制到远程存储库，以便与其他开发人员和项目共享。


clean
    删除target目录
site

```


```xml
阶段 clean 和目标 dependency:copy-dependencies 可以按顺序执行
    mvn clean dependency:copy-dependencies package
    mvn clean verify

```
```xml
dependency:copy-dependencies
    这是 Maven 的 Dependency 插件的一个目标（Goal）。
dependency:copy-dependencies 目标用于将项目的依赖项（JAR 文件）复制到指定的目录。通常，这个目录是 target/dependency。
```

## Getting Started Guide
### How do I add resources to my JAR?
>这个项目结构放置资源文件
```
my-app
|-- pom.xml
`-- src
    |-- main
    |   |-- java
    |   |   `-- com
    |   |       `-- mycompany
    |   |           `-- app
    |   |               `-- App.java
    |   `-- resources
    |       `-- META-INF
    |           |-- application.properties
    `-- test
        |-- java
        |   `-- com
        |       `-- mycompany
        |           `-- app
        |               `-- AppTest.java
        `-- resources
            `-- test.properties
```
>拿
```java

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
// InputStream is = getClass().getResourceAsStream("/test.properties");
            InputStream is = getClass().getResourceAsStream("/META-INF/application.properties");
            if (is != null) {
                try (BufferedReader br = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))) {
                    StringBuilder sb = new StringBuilder();
                    String line;
                    while ((line = br.readLine()) != null) {
                        sb.append(line).append(System.lineSeparator());
                    }
                    System.out.println(sb.toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
```
### How do I filter resource files?
>将包含该值的属性的引用放入资源文件中。该属性可以是 pom.xml 中定义的值之一、用户的 settings.xml 中定义的值、外部属性文件中定义的属性或系统属性。

预配置
```xml
<!-- pom.xml -->
<build>
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
      </resource>
    </resources>
  </build>
</project>
```
usage

- ${project.name}
- ${project.version}
- ${project.build.finalName} 指的是构建时创建的文件的最终名称项目已打包
- ${settings.localRepository} .m2下，例如阿里云镜像

>系统属性、Java系统属性
- ${user.home} 用户的主目录
- ${user.dir} 用户的当前工作目录
- ${java.io.tmpdir} 默认的临时文件目录
- ${java.version} Java 运行时环境版本

>自定义要 mvn process-resources "-Dcommand.line.prop=hello again"
- ${command.line.prop} 命令行参数
>在资源文件中使用
```properties
# application.properties
application.name=${project.name}
application.version=${project.version}
```
执行

```powershell
# 进程资源是复制和过滤资源的构建生命周期阶段
mvn process-resources
```
conclusion

```properties
#在 target\classes\META-INF\application.properties
# application.properties
application.name=my-app
application.version=1.0-SNAPSHOT
```
#### 外部文件
```xml

  <build>
  <!-- here -->
    <filters>
      <filter>src/main/filters/filter.properties</filter>
    </filters>
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
      </resource>
    </resources>
  </build>
</project>
```
Conclusion
```properties
# filter.properties
my.filter.value=hello!
#资源目录下的文件引用
# application.properties
message=${my.filter.value}

```
或者
```xml
<!-- 不需要 filters 标签 -->
  <properties>
    <my.filter.value>hello</my.filter.value>
  </properties>
</project>
```
### [How do I use external dependencies?](https://maven.apache.org/guides/getting-started/index.html#how-do-i-use-external-dependencies)

```xml

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
<!-- 编译时、测试时、运行时 -->
<!-- compile test runtime -->
```
```
By default the remote repository Maven uses is
https://repo.maven.apache.org/maven2/

其他的包
/maven2/log4j/log4j
    的 maven-metadata.xml 文件有 artifactId 等信息

应用依赖，无关 <scope>test</scope>
mvn compile
```