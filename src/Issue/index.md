[[toc]]

# Issue

## IDEA

:::warning 显示Untrusted Server's Certificate sh证书文件
起因：使用了学习版IDEA，在本地hosts配置了映射，然后idea检测出来弹出警告 服务器证书不可用  
解决：不让他弹出的方法。打开idea--->file-->Settings然后搜索Server Certificates把下图中的选项勾上就ok
:::

:::warn lgnored pom.xml
settings > build > maven > lgnored file  
右边栏maven刷新
:::

## Git

:::danger push代码报错 schannel: SEC_E_UNTRUSTED_ROOT (0x80090325) - The certificate chain was issued by an authority that is not trusted.
😁搜索GitHub hosts关键字  
修改hosts文件前修改win用户对该文件的权限  
C:\Windows\System32\drivers\etc\  
在线工具DNS域名搜索github.com和api.github.com  
20.205.243.166 github.com  
20.205.243.168 api.github.com
:::

:::info schannel: failed to receive handshake, SSL/TLS connection failed
解决SEC_E_UNTRUSTED_ROOT后未出现  
默认schannel  
git config --global http.sslBackend "openssl"
:::

:::info 设置http.sslBackend "openssl"后出现 SSL certificate problem: self-signed certificate
git config --global http.sslVerify false
:::

---
:::danger
绝对不能在项目出现Git Access Token
:::

:::danger 错误原因：远端版本高于本地，本地无法提交。本地也新增文件
报错需要git pull一下先  
git pull  
默认origin/main，将远端有但本地没有的拉下啦，合并到本地，不会减少本地的文件  

我pull了还是错误，问阿里机器人  
git pull --rebase --tags origin main  
设置每次pull时都执行rebase操作，这会将本地分支的未推送提交重新应用到远程分支最新的提交之上，从而创建一个线性的提交历史。  

执行以上命令后再次push，ok了
:::

## Github

:::danger
Pages 用VitePress官方的方式有错误，对比了是配置pages有问题，版本可能低了
Path: project setting > GitHub Pages > Build and deployment with Actions > choose static.yaml
:::

## Edge

:::danger 访问GitHub.com显示证书无效
😀删掉cookie刷新网页或  
😁搜索GitHub hosts关键字
:::

## Maven

:::danger No such host is known (archiva-maven-storage-prod.oss-cn-beijing.aliyuncs.com)
起因，下载什么依赖都报错  
解决：先去.m2仓库删掉对应失败的条目  
在线域名工具https://ping.chinaz.com/  
找archiva-maven-storage-prod.oss-cn-beijing.aliyuncs.com ip  
添加到hosts文件  
可能与IDEA学习版有关  
或  
    1.看配置文件maven的本地仓库
    2.注意删除.lastUpdate文件
    3.更换配置镜像
:::


### .lastUpdated文件所在目录删除（maven下载错误产生此文件并占用位置）

```bat

chcp 65001
rem 打印文件，cmd执行，find_last_updated.bat 目录（传入绝对相对，相对和跨盘符没试过）

@echo off
setlocal enabledelayedexpansion

rem Check if directory parameter is provided
if "%1" == "" (
    echo Usage: %0 directory_path
    exit /b 1
)

rem Set the directory path
set "directory=%1"

rem Traverse all files and directories recursively
for /r "%directory%" %%F in (*) do (
    rem Check if the file ends with .lastUpdated
    if "%%~xF" == ".lastUpdated" (
        rem Get the relative path of the file
        set "file_path=%%~pnxF"
        rem Remove the leading backslash if present
        if "!file_path:~0,1!" == "\" set "file_path=!file_path:~1!"
        rem Print the relative path
        echo !file_path!
    )
)

endlocal


```

```bat
chcp 65001
rem 打印文件，cmd执行，find_last_updated_file_and_delete.bat 目录（传入绝对相对，相对和跨盘符没试过）
@echo off
setlocal enabledelayedexpansion

rem Check if directory parameter is provided
if "%1" == "" (
    echo Usage: %0 directory_path
    exit /b 1
)

rem Set the directory path
set "directory=%1"

rem Initialize a flag to check if any .lastUpdated file is found
set "found_last_updated=0"

rem Create a temporary directory for moving files
set "temp_dir=%TEMP%\temp_delete_dir"
md "%temp_dir%" 2>nul

rem Traverse all files and directories recursively
for /r "%directory%" %%F in (*) do (
    rem Check if the file ends with .lastUpdated
    if "%%~xF" == ".lastUpdated" (
        rem Set the flag to indicate a .lastUpdated file is found
        set "found_last_updated=1"
        rem Get the directory of the file
        set "file_dir=%%~dpF"
        rem Remove the trailing backslash if present
        if "!file_dir:~-1!" == "\" set "file_dir=!file_dir:~0,-1!"
        rem Move the directory to the temporary directory
        move "!file_dir!" "%temp_dir%" >nul 2>nul
        if not exist "!file_dir!" (
            echo Moved !file_dir! to temporary directory.
        ) else (
            echo Failed to move !file_dir! to temporary directory.
        )
    )
)

rem Move the temporary directory to recycle bin
if exist "%temp_dir%" (
    echo Moving temporary directory to recycle bin...
    robocopy "%temp_dir%" "%TEMP%\DeleteMe" /mov /s /e /zb >nul
    rd /s /q "%temp_dir%"
    if not exist "%temp_dir%" (
        echo Temporary directory moved to recycle bin.
    ) else (
        echo Failed to move temporary directory to recycle bin.
    )
)

rem Check if any .lastUpdated file is found
if %found_last_updated% equ 0 (
    echo No .lastUpdated file found.
)

endlocal

```