# Linux talk命令

Linux talk命令用于与其他使用者对谈。

使用权限：所有使用者。

### 语法

    talk person [ttyname]

参数说明：

- person : 预备对谈的使用者帐号，如果该使用者在其他机器上，则可输入 person@machine.name
- ttyname : 如果使用者同时有两个以上的 tty 连线，可以自行选择合适的 tty 传讯息

### 实例

与现在机器上的使用者Rollaend对谈，此时 Rollaend 只有一个连线

    talk Rollaend

接下来就是等Rollaend回应，若Rollaend接受，则Rollaend输入 `talk jzlee`即可开始对谈，结束请按 ctrl+c

与linuxfab.cx上的使用者Rollaend对谈，使用pts/2来对谈

    talk Rollaend@linuxfab.cx pts/2

接下来就是等Rollaend回应，若Rollaend接受，则Rollaend输入 `talk jzlee@jzlee.home`即可开始对谈，结束请按 ctrl+c

注意：若萤幕的字会出现不正常的字元，试著按 ctrl+l 更新萤幕画面。