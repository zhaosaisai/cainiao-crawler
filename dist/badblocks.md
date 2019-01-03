# Linux badblocks命令

Linux badblocks命令用于检查磁盘装置中损坏的区块。

执行指令时须指定所要检查的磁盘装置，及此装置的磁盘区块数。

### 语法

    badblocks [-svw][-b ][-o ][磁盘装置][磁盘区块数][启始区块]

参数说明：

- -b   指定磁盘的区块大小，单位为字节。
- -o   将检查的结果写入指定的输出文件。
- -s   在检查时显示进度。
- -v   执行时显示详细的信息。
- -w   在检查时，执行写入测试。
- [磁盘装置]   指定要检查的磁盘装置。
- [磁盘区块数]   指定磁盘装置的区块总数。
- [启始区块]   指定要从哪个区块开始检查。

### 实例

查看系统当前硬盘信息。

    # fdisk -l
    

例如，显示信息如下：

    Disk /dev/sda: 298.9 GB, 298999349248 bytes
    255 heads, 63 sectors/track, 36351 cylinders
    Units = cylinders of 16065 * 512 = 8225280 bytes
    
      Device Boot      Start         End      Blocks   Id  System
    /dev/sda1               1         262     2104483+  82  Linux swap / Solaris
    /dev/sda2   *         263       32898   262148670   83  Linux
    /dev/sda3           32899       36351    27736222+  83  Linux
    
    Disk /dev/sdb: 42.9 GB, 42949672960 bytes
    64 heads, 32 sectors/track, 40960 cylinders
    Units = cylinders of 2048 * 512 = 1048576 bytes
    

通过命令扫描硬盘。

    # badblocks -s -v /dev/sdnx
    

其中n表示硬盘设备名，x表示硬盘对应的分区号。例如需要检查"/dev/sda2"，执行命令如下：

    # badblocks -s -v /dev/sda2
    
    Checking blocks 0 to 30681000
    Checking for bad blocks (read-only test): 306809600674112/ 306810000000
    30680964
    30680965
    30680966
    30680967
    30680968
    30680969
    30680970
    30680971
    30680972
    30680973
    ...
    done
    Pass completed, 37 bad blocks found.其中，“37 bad blocks found”表示硬盘存在37个坏块。
    