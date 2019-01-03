# Linux kbdconfig命令

Linux kbdconfig命令用于设置键盘类型。

kbdconfig(Red Hat Linux才有的指令)是一个用来设置键盘的程序，提供图形化的操作界面。kbdconfig实际上是修改/etc/sysconfig/keyboard的键盘配置文件。

### 语法

    kbdconfig [--back][--test]

参数：

- --back 　执行时将预设的Cancel按钮更改为Back按钮。
- --test 　仅作测试，不会实际更改设置。

### 实例

键盘设置：

    # kdbconfig //设置键盘
    