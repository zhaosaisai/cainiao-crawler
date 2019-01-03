# Linux cu命令

Linux cu命令用于连接另一个系统主机。

cu(call up)指令可连接另一台主机，并采用类似拨号终端机的接口工作，也可执行简易的文件传输作业。

### 语法

    cu [dehnotv][-a][-c][-E][-I][-l][-s][-x][-z][--help][-nostop][--parity=none][/]

参数说明：

- -a或-p或--port   使用指定的通信端口进行连线。
- -c或--phone   拨打该电话号码。
- -d   进入排错模式。
- -e或--parity=even   使用双同位检查。
- -E或--escape   设置脱离字符。
- -h或--halfduple   使用半双工模式。
- -I或--config   指定要使用的配置文件。
- -l或--line   指定某项外围设备，作为连接的设备。
- -n或--prompt   拨号时等待用户输入电话号码。
- -o或--parity=odd   使用单同位检查。
- -s或--speed或--baud或-   设置连线的速率，单位以鲍率计算。
- -t或--maper   把CR字符置换成LF+CR字符。
- -v或--version   显示版本信息。
- -x或--debug   使用排错模式。
- -z或--system   连接该系统主机。
- --help   在线帮助。
- --nostop   关闭Xon/Xoff软件流量控制。
- --parity=none   不使用同位检查。

### 实例

与远程主机连接

    # cu -c 0102377765