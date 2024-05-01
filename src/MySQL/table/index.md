# 表

以下是 MySQL 表相关操作的 Markdown 整理：

---

## MySQL 表操作

### 创建表

使用 `CREATE TABLE` 语句创建表，指定表名和列信息。例如：

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 一般UUID在编程传入，而不是这里MySQL自动生成。升降序通过创建日期时间字段来实现，而不是自动生成的id
CREATE TABLE users (
    id CHAR(36) DEFAULT UUID() PRIMARY KEY,



-- 这里不通过创建日期时间字段来实现升降序，而是自动生成的id
CREATE TABLE demo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uid char(36) not null,
    username VARCHAR(50) NOT NULL
);
INSERT INTO demo (uid, username) VALUES
('11111111-1111-1111-1111-111111111111', 'user1'),
('22222222-2222-2222-2222-222222222222', 'user2'),
('33333333-3333-3333-3333-333333333333', 'user3'),
('44444444-4444-4444-4444-444444444444', 'user4'),
('55555555-5555-5555-5555-555555555555', 'user5');

```

### 查看表结构

使用 `DESCRIBE` 或 `SHOW COLUMNS FROM` 语句查看表的结构。例如：

```sql
DESCRIBE users;
```

### 修改表结构

使用 `ALTER TABLE` 语句修改表结构，如添加、修改或删除列。例如，添加一个新列：

```sql
ALTER TABLE users ADD COLUMN age INT;
```

### 删除表

使用 `DROP TABLE` 语句删除表。例如：

```sql
DROP TABLE users;
```

### 插入数据

使用 `INSERT INTO` 语句向表中插入数据。例如：

```sql
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');
```

### 更新数据

使用 `UPDATE` 语句更新表中的数据。例如，更新用户名为 'john_smith' 的用户的邮箱：

```sql
UPDATE users SET email = 'john.smith@example.com' WHERE username = 'john_smith';
```

### 删除数据

使用 `DELETE FROM` 语句删除表中的数据。例如，删除用户名为 'john_smith' 的用户：

```sql
DELETE FROM users WHERE username = 'john_smith';
```

这些是 MySQL 中表的常见操作，但请谨慎操作，特别是在生产环境中。
