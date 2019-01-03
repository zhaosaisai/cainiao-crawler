# Linux minfo命令

Linux minfo命令用于显示MS-DOS文件系统的各项参数。

minfo为mtools工具指令，可显示MS-DOS系统磁盘的各项参数，包括磁区数，磁头数...等。

### 语法

    </>minfo [-v][驱动器代号]

参数说明：

- -v 　除了一般信息外，并显示可开机磁区的内容。

### 实例

显示DOS系统参数

    # minfo -v C: //显示系统参数