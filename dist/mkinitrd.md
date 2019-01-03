# Linux mkinitrd命令

Linux mkinitrd命令用于建立要载入ramdisk的映像文件。

mkinitrd可建立映像文件，以供Linux开机时载入ramdisk。

### 语法

    mkinitrd [-fv][--omit-scsi-modules][--version][--preload=][--with=][映像文件][Kernel 版本]

参数：

- -f   若指定的映像问家名称与现有文件重复，则覆盖现有的文件。
- -v执行时显示详细的信息。
- --omit-scsi-modules   不要载入SCSI模块。
- --preload=   指定要载入的模块。
- --with=   指定要载入的模块。
- --version   显示版本信息。