# Linux halt命令

若系统的 runlevel 为 0 或 6 ，则Linux halt命令关闭系统，否则以 shutdown 指令（加上 -h 参数）来取代。

使用权限：系统管理者。

### 语法

    halt [-n] [-w] [-d] [-f] [-i] [-p]

参数说明：

- -n : 在关机前不做将记忆体资料写回硬盘的动作
- -w : 并不会真的关机，只是把记录写到 /var/log/wtmp 档案里
- -d : 不把记录写到 /var/log/wtmp 档案里（-n 这个参数包含了 -d） -f : 强迫关机，不呼叫 shutdown 这个指令
- -i : 在关机之前先把所有网络相关的装置先停止
- -p : 当关机的时候，顺便做关闭电源（poweroff）的动作

### 实例

关闭系统

    # halt

关闭系统并关闭电源

    # halt -p

关闭系统，但不留下纪录

    # halt -d