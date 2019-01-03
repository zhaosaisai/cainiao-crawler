# Linux statserial命令

Linux statserial命令用于显示串口状态。

statserial(status ofserial port)可显示各个接脚的状态，常用来判断串口是否正常。

### 语法

    statserial [-dnx][串口设备名称]

参数说明：

- -d   以10进制数字来表示串口的状态。
- -n   仅显示一次串口的状态后即结束程序。
- -x   与-n参数类似，但是以16进制来表示。

### 实例

显示串口状态

    # statserial /dev/tty1

只显示一次串口状态

    # statserial -n /dev/tty1