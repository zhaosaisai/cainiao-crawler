# Linux userconf命令

Linux userconf命令用于用户帐号设置程序。

userconf实际上为linuxconf的符号连接，提供图形界面的操作方式，供管理员建立与管理各类帐号。若不加任何参数，即进入图形界面。

### 语法

    userconf [--addgroup ][--adduser ][--delgroup ][--deluser ][--help]

参数说明：

- --addgroup 　新增群组。
- --adduser 　新增用户帐号。
- --delgroup 　删除群组。
- --deluser 　删除用户帐号。
- --help 　显示帮助。

### 实例

新增用户

    # userconf --adduser 666 tt lord /bin/bash //新增用户账号