# Linux chroot命令

Linux chroot命令用于改变根目录。

chroot(change root)命令把根目录换成指定的目的目录。
、

### 语法

    chroot [--help][--version][目的目录][执行指令...]

参数说明：

- --help 　在线帮助。
- --version 　显示版本信息。

### 实例

改变根目录

    # chroot /mnt/ls //改变根目录