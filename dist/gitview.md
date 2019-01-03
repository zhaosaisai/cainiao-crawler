# Linux gitview命令

Linux gitview命令用于观看文件的内容，它会同时显示十六进制和ASCII格式的字码。

### 语法

    gitview [-bchilv][文件]

参数：

- -b 　单色模式，不使用ANSI控制码显示彩色。
- -c 　彩色模式，使用ANSI控制码显示色彩。
- -h 　在线帮助。
- -i 　显示存放gitview程序的所在位置。
- -l 　不使用先前的显示字符。
- -v 　显示版本信息。

### 实例

使用指令gitview以彩色模式观看文件"/home/ rootlocal/demo.txt"中的内容，输入如下命令：

    $ gitview -c /home/rootlocal/demo.txt      #使用gitview指令观看指定文件内容
    