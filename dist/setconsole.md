# Linux setconsole命令

Linux setconsole命令用于设置系统终端。

setconsole可用来指定系统终端。

### 语法

    setconsole [serial][ttya][ttyb]

参数：

- serial 　使用PROM终端。
- ttya,cua0或ttyS0 　使用第１个串口设备作为终端。
- ttyb,cua1或ttyS1 　使用第２个串口设备作为终端。
- video 　使用主机上的现卡作为终端。

### 实例

设置终端

    # setconsole ttyS0
    