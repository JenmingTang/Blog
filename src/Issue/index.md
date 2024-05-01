[[toc]]

# Issue

## IDEA

:::danger push代码报错 schannel: SEC_E_UNTRUSTED_ROOT (0x80090325) - The certificate chain was issued by an authority that is not trusted. 此错误将会影响所以使用git
😁搜索GitHub hosts关键字  
修改hosts文件前修改win用户对该文件的权限  
DNS域名搜索github.com和api.github.com  
20.205.243.166 github.com  
20.205.243.168 api.github.com
:::

:::warning 显示Untrusted Server's Certificate sh证书文件
起因：使用了学习版IDEA，在本地hosts配置了映射，然后idea检测出来弹出警告 服务器证书不可用  
解决：不让他弹出的方法。打开idea--->file-->Settings然后搜索Server Certificates把下图中的选项勾上就ok
:::

## Git

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
