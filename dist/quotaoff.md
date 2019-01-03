# Linux quotaoff命令

Linux quotaoff命令关闭磁盘空间限制。

执行quotaoff指令可关闭用户和群组的磁盘空间限制。

### 语法

    quotaoff [-aguv][文件系统...]

参数说明：

- -a   关闭在/etc/fstab文件里，有加入quota设置的分区的空间限制。
- -g   关闭群组的磁盘空间限制。
- -u   关闭用户的磁盘空间限制。
- -v   显示指令执行过程。

### 实例

关闭配额限制:

    # quotaoff -a
    