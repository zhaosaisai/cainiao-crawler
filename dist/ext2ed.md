# Linux ext2ed命令

Linux ext2ed命令是ext2文件系统编辑程序。

ext2ed可直接处理硬盘分区上的数据，这指令只有Red Hat Linux才提供。

### 语法

    ext2ed

一般指令：

- setdevice[设备名称]   指定要处理的设备。
- disablewrite   将ext2ed设为只读的状态。
- enablewrite   将ext2ed设为可读写的状态。
- help[指令]   显示个别指令的帮助。
- next   移至下一个单位，单位会依目前所在的模式而异。
- prev   移至前一个单位，单位会依目前所在的模式而异。
- pgup   移至下一页。
- pgdn   移至上一页。
- set   修改目前的数据，参数会依目前所在的模式而异。
- writedata   在执行此指令之后，才会实际修改分区中的数据。
- ext2进入3种模式的指令
- super   进入main superblock,即Superblock模式。
- group   进入指定的group，即Group模式。
- cd   在inode模式下，进入指定的目录或文件，即Inode模式。
- Superblock模式
- gocopy   进入指定的superblock备份。
- setactivecopy   将目前所在的superblock，复制到main superblock。
- Group模式
- blockbitmap   显示目前groupo的区块图。
- inode   进入目前group的第一个inode。
- inodebitmap   显示目前group的inode二进制码。
- Inode模式
- dir   进入目录模式。
- file   进入文件模式。