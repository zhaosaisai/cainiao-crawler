# Linux setserial命令

Linux setserial命令用于设置或显示串口的相关信息。

setserial可用来设置串口或显示目前的设置。

### 语法

    setserial [-abgGqvVz][设备][串口参数]

参数说明：

- -a   显示详细信息。
- -b   显示摘要信息。
- -g   显示串口的相关信息。
- -G   以指令列表的格式来显示信息。
- -q   执行时显示较少的信息。
- -v   执行时显示较多的信息。
- -V   显示版本信息。
- -z   设置前，先将所有的标记归零。

### 实例

显示串口信息

    # setserial -g /dev/ttyS2 
    /dev/ttyS2, UART: unknown, Port: 0x03e8, IRQ: 4
    