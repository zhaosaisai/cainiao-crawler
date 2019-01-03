# Linux renice命令

Linux renice命令用于重新指定一个或多个行程（Process）的优先序（一个或多个将根据参数而定）。

注意：每一个行程（Process）都有一个唯一的（unique）id。

使用权限：所有使用者。

### 语法

    renice priority [[-p] pid ...] [[-g] pgrp ...] [[-u] user ...]

参数说明：

- -p pid 重新指定行程的 id 为 pid 的行程的优先序
- -g pgrp 重新指定行程群组(process group)的 id 为 pgrp 的行程 (一个或多个) 的优先序
- -u user 重新指定行程拥有者为 user 的行程的优先序

### 实例

将行程 id 为 987 及 32 的行程与行程拥有者为 daemon 及 root 的优先序号码加 1

    renice +1 987 -u daemon root -p 32