[[toc]]

# Issue

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
