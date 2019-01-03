# Linux uux命令

Linux uux命令用于在远端的UUCP主机上执行指令。

uux可在远端的UUCP主机上执行指令或是执行本机上的指令，但在执行时会使用远端电脑的文件。

### 语法

    uux [-bcCIjlnrvz][-a][-g][-s][-x][--help][指令]

参数说明：

- -或-p或--stdin   直接从键盘读取要执行的指令。
- -a或--requestor   执行邮件地址，以便寄送状态信息。
- -b或--erturn-stdin   在屏幕上显示状态信息。
- -c或--nocopy   不用将文件复制到缓冲区。
- -C或--copy   将文件复制到缓冲区。
- -g或--grade   指定文件传送作业的优先顺序。
- -I或--config file   指定uux配置文件。
- -j或--jobid   显示作业编号。
- -l或--link   将本机上的文件连接到缓冲区。
- -n或--notification=no   无论发生任何状态，都不寄邮件通知用户。
- -r或--nouucico   不要立即启动uucico服务程序，仅将作业送到队列中，然后再执行。
- -s或--status   将完成状态保存为指定的文件。
- -v或--version   显示版本信息。
- -x或--debug   指定排错层级。
- -z或--notification=error   若发生错误，则以邮件来通知用户。
- --help   显示帮助。

### 实例

在远程主机 uucp 执行命令

    # uux hnlinux! date  /// 在远程主机 指定date命令查看系统时间