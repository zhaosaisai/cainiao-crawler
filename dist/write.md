# Linux write命令

Linux write命令用于传讯息给其他使用者。

使用权限：所有使用者。

### 语法

    write user [ttyname]

参数说明：

- user : 预备传讯息的使用者帐号
- ttyname : 如果使用者同时有两个以上的 tty 连线，可以自行选择合适的 tty 传讯息

### 实例

传讯息给 Rollaend，此时 Rollaend 只有一个连线

    write Rollaend

接下来就是将讯息打上去，结束请按 ctrl+c

传讯息给 Rollaend，Rollaend 的连线有 pts/2，pts/3

    write Rollaend pts/2

接下来就是将讯息打上去，结束请按 ctrl+c

注意：若对方设定 mesg n，则此时讯席将无法传给对方。