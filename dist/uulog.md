# Linux uulog命令

Linux uulog命令用于显示UUCP记录文件。

uulog可用来显示UUCP记录文件中记录。

### 语法

    uulog [-DFISv][-][-f][-I][-n][-s][-u][-X][--help]

参数说明：

- -D或--debuglog   显示排错记录。
- -f或--follow   与-F参数类似，但仅显示与指定主机相关的记录。
- -I或--config   指定程序的配置文件。
- -,-n或--lines   显示记录文件中，从最后算起指定行数的数值。
- -s   仅显示记录文件中，与指定文件相关的记录。
- -S或--statslog   显示统计记录。
- -u或--suer   仅显示记录文件中，与指定用户相关的记录。
- -v或--version   显示版本信息。
- -X或--debug   设定排错层级。
- --help   显示帮助。

### 实例

显示uucp log信息

    # uulog