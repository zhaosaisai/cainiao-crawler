# Linux timeconfig命令

Linux timeconfig命令用于设置时区。

这是Red Hat公司遵循GPL规则所开发的程序，它具有互动式操作界面，您可以轻易地利用方向键和空格键等，设置系统时间所属的时区。

### 语法

    timeconfig [--arc][--back][--test][--utc][时区名称]

参数：

- --arc 　使用Alpha硬件结构的格式存储系统时间。
- --back 　在互动式界面里，显示Back钮而非Cancel钮。
- --test 　仅作测试，并不真的改变系统的时区。
- --utc 　把硬件时钟上的时间视为CUT，有时也称为UTC或UCT。

### 实例

    # timeconfig //设置时区
    