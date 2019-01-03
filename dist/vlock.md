# Linux vlock命令

Linux vlock命令用于锁住虚拟终端。

执行vlock(virtual console lock)指令可锁住虚拟终端，避免他人使用。

### 语法

    vlock [-achv]

参数说明：

- -a或--all 　锁住所有的终端阶段作业，如果您在全屏幕的终端中使用本参数，则会将用键盘
- 切换终端机的功能一并关闭。
- -c或--current 　锁住目前的终端阶段作业，此为预设值。
- -h或--help 　在线帮助。
- -v或--version 　显示版本信息。

### 实例

锁定虚拟终端

    # vlock