# [MySQL 下载 选ZIP](https://dev.mysql.com/downloads/mysql/)

## 初始步骤

```bash
# 创建默认表和超级用户（无密码），Windows、Linux
bin\mysqld --initialize-insecure


# 启动服务器 Windows
bin\mysqld --console
# Linux
bin/mysqld_safe --user=mysql &


# 客户端连接
bin/mysql -u root -p
# 客户端关闭服务器
mysql> shutdown
# 客户端退出
mysql> quit
```

## 以下开始直接问阿里机器人即可

## 常用查询命令

```bash
# 当前用户
SELECT USER();
# 查询所有数据库
show databases;
# 切换数据库
USE database_name;
# 查询所有表
show tables;
# 查询所有表结构
DESCRIBE table_name;
# 查询所有字段,同表结构
show columns from table_name;
# 查询所有索引
show index from table_name;
# 查询服务器状态
SHOW STATUS;
# 查询所有变量
SHOW VARIABLES;
# 查询服务器版本
SELECT VERSION();
# 查询数据目录（库文件放在那里）
SHOW VARIABLES LIKE 'datadir';
#=============================================
# 查询所有视图
show full tables where table_type = 'VIEW';
# 查询所有存储过程
show full tables where table_type = 'PROCEDURE';
# 查询所有函数
show full tables where table_type = 'FUNCTION';
# 查询所有触发器
show triggers;
# 查询所有事件
show events;
# 查询所有存储过程
show procedure status;
# 查询所有函数
show function status;
# 查询所有视图
show view status;
# 查询所有触发器
show trigger status;
# 查询所有事件
show event status;
# 查询所有数据库权限
show grants;
# 查询所有用户
show users;
```

## 编码

```bash
# 要查看表的编码集
SHOW FULL COLUMNS FROM table_name;
SHOW CREATE TABLE table_name;
# //   字段非utf-8编码，直接报错
# //   db.setHost(resultSet.getNString(1));
#    db.setHost(resultSet.getString(1));

```

## 数据库操作

```bash
# 默认编码和排序规则
SHOW VARIABLES LIKE 'character_set_database';
SHOW VARIABLES LIKE 'collation_database';
# 创建一个名为 database_name 的数据库
CREATE DATABASE database_name;
# 删除一个名为 database_name 的数据库
DROP DATABASE database_name;
# 修改数据库名称
ALTER DATABASE database_name RENAME TO new_database_name;
# 修改数据库字符集
ALTER DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
# 备份整个数据库
mysqldump -u [username] -p database_name > backup.sql
# 备份单个表
mysqldump -u [username] -p database_name table_name > backup.sql
# 恢复数据库或表
mysql -u [username] -p database_name < backup.sql
```

## [表的操作](./table/)

## 用户及权限操作

```bash
# 默认创建用户后权限
# 授予了用户 demo 在 localhost 上连接到任何数据库的权限，但是没有其他的操作权限。
GRANT USAGE ON *.* TO 'demo'@'localhost'
# 创建一个名为 username 的用户，只允许从本地主机登录，密码是 password
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
# 授予用户权限
# permissions 是用户被授予的权限，如 SELECT, INSERT, UPDATE, DELETE 等，database_name.table_name 是要授权的数据库和表，username 是要授权的用户
GRANT [permissions] ON database_name.table_name TO 'username'@'localhost';
# 撤销用户权限，注意 FROM
REVOKE [permissions] ON database_name.table_name FROM 'username'@'localhost';
# 删除用户
DROP USER 'username'@'localhost';
# 查看用户权限
SHOW GRANTS FOR 'username'@'localhost';
# 修改用户密码
SET PASSWORD FOR 'username'@'localhost' = PASSWORD('newpassword');
# 刷新权限：在对用户权限进行修改后，需要刷新权限使更改生效
FLUSH PRIVILEGES;
# 授予用户 user1 对 mydatabase 数据库的所有权限，并允许从任何主机连接
GRANT ALL PRIVILEGES ON mydatabase.* TO 'user1'@'%';
# database_name.*，这个数据库下所有表的权限
GRANT SELECT, INSERT, UPDATE, DELETE ON database_name.* TO 'username'@'host';

```

## 授权主机地址选值

- 具体的 IP 地址：'192.168.1.100'
- 本地主机：'localhost'
- 主机名：'example.com'
- 通配符：
  - '%'：表示任意主机
  - '192.168.1.%'：表示具有特定 IP 段的主机

### 修改某用户主机选值

```bash
# 查看用户权限
SHOW GRANTS FOR 'username'@'localhost';
REVOKE ALL PRIVILEGES ON database_name.* FROM 'username'@'old_host';
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'new_host';
# 刷新权限：在对用户权限进行修改后，需要刷新权限使更改生效
FLUSH PRIVILEGES;
```
