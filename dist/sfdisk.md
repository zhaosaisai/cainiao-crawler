# Linux sfdisk命令

Linux sfdisk命令是硬盘分区工具程序。

sfdisk为硬盘分区工具程序，可显示分区的设置信息，并检查分区是否正常。

### 语法

    sfdisk [-?Tvx][-d ][-g ][-l ][-s ][-V ]

参数：

- -?或--help   显示帮助。
- -d   显示硬盘分区的设置。
- -g或--show-geometry   显示硬盘的CHS参数。
- -l   显示后硬盘分区的相关设置。
- -s   显示分区的大小，单位为区块。
- -T或--list-types   显示所有sfdisk能辨识的文件系统ID。
- -v或--version   显示版本信息。
- -V或--verify   检查硬盘分区是否正常。
- -x或--show-extend   显示扩展分区中的逻辑分区。

### 实例

显示分区信息：

    # sfdisk -l
    
    Disk /dev/sda: 1305 cylinders, 255 heads, 63 sectors/track
    Units = cylinders of 8225280 bytes, blocks of 1024 bytes, counting from 0
    
    Device Boot Start End #cyls #blocks Id System
    /dev/sda1 * 0+ 12 13- 104391 83 Linux
    /dev/sda2 13 1304 1292 10377990 8e Linux LVM
    /dev/sda3 0 - 0 0 0 Empty
    /dev/sda4 0 - 0 0 0 Empty
    
    Disk /dev/sdb: 652 cylinders, 255 heads, 63 sectors/track
    
    sfdisk: ERROR: sector 0 does not have an msdos signature
    /dev/sdb: unrecognized partition
    No partitions found
    