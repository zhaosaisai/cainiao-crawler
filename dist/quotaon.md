# Linux quotaon命令

Linux quotaon命令用于开启磁盘空间限制。

执行quotaon指令可开启用户和群组的才磅秒年空间限制，各分区的文件系统根目录必须有quota.user和quota.group配置文件。

### 语法

    quotaon [-aguv][文件系统...]

参数说明：

- -a   开启在/ect/fstab文件里，有加入quota设置的分区的空间限制。
- -g   开启群组的磁盘空间限制。
- -u   开启用户的磁盘空间限制。
- -v   显示指令指令执行过程。