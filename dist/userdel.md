# Linux userdel命令

Linux userdel命令用于删除用户帐号。

userdel可删除用户帐号与相关的文件。若不加参数，则仅删除用户帐号，而不删除相关文件。

### 语法

    userdel [-r][用户帐号]

参数说明：

- -r 　删除用户登入目录以及目录中所有文件。

### 实例

删除用户账号

    # userdel hnlinux