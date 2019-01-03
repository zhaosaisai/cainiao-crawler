# Linux uupick命令

Linux uupick命令处理传送进来的文件。

当其他主机通过UUCP将文件传送进来时，可利用uupick指令取出这些文件。

### 语法

    uupick [-v][-I][-s][-x][--help]

参数：

- -I或--config   指定配置文件。
- -s或--system   处理由指定主机传送过来的文件。
- -v或--version   显示版本信息。
- --help   显示帮助。

### 实例

处理由主机localhost传送过来的文件。在命令行直接输入如下命令：

    uupick-s localhost
    

该命令通常没有输出。