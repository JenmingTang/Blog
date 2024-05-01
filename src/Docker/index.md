# Docker

:::danger
Win+R winver 查看系统版本
Edge收藏搜WSL，本机并不支持WSL2，所以只能用Hyper-V
:::

## 常用命令

```bash
docker info # 查看docker信息、镜像源设置
docker pull [mysql] # 下载镜像
# -d 后台运行 -p 端口映射（外：内） -e 环境变量 -v 挂载卷 -it 交互模式 -h 帮助
# mysql:[5.7]镜像标签
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:[5.7] # 启动容器
```

## 直接安装 Docker Desktop

:::info
配置文件在软件设置，docker engine中
:::

```json
// 镜像，edge收藏搜镜像
//root
{

"registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://docker.nju.edu.cn",
        "https://dockerproxy.com"
    ]
}
```

## docker compose

:::info
安装docker附带docker compose  
命令行docker、docker-compose
:::
