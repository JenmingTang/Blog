[[toc]]
# Android Studio
## 镜像源
```properties
#项目根下/gradle/wrapper/gradle-wrapper.properties
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-8.4-bin.zip

```

```kts
//单个项目下根下settings.gradle.kts
//不懂问阿里机器人

pluginManagement {
    repositories {
        maven(url = "https://mirrors.cloud.tencent.com/gradle/")
        maven(url = "https://maven.aliyun.com/repository/central")
        maven(url = "https://maven.aliyun.com/repository/public")
        maven(url = "https://maven.aliyun.com/repository/google")
        maven(url = "https://maven.aliyun.com/repository/gradle-plugin")
//        maven(url = "http://mirrors.cloud.tencent.com/nexus/repository/maven-public/")
        mavenLocal()

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        maven(url = "https://mirrors.cloud.tencent.com/gradle/")
        maven(url = "https://maven.aliyun.com/repository/central")
        maven(url = "https://maven.aliyun.com/repository/public")
        maven(url = "https://maven.aliyun.com/repository/google")
        maven(url = "https://maven.aliyun.com/repository/gradle-plugin")
//        maven(url = "http://mirrors.cloud.tencent.com/nexus/repository/maven-public/")
        mavenLocal()
```


:::danger insecure protocols
如果镜像源非https就报错Using insecure protocols with repositories  
.kts下，在前面下，.gradle家目录init.gradle下试来试去不得，说与项目settings或build的镜像源有冲突，索性全部作项目级别的镜像源
:::

## Version Control
>AS新UI左上角界面

## 软件、插件配置
>阿里云盘-Software-Android-settings.zip
