# Linux swapoff命令

Linux swapoff命令用于关闭系统交换区(swap area)。

swapoff实际上为swapon的符号连接，可用来关闭系统的交换区。

### 语法

    swapoff [设备]

参数：

- 
-a  将/etc/fstab文件中所有设置为swap的设备关闭
- 
-h 帮助信息
- -V 版本信息 

### 实例

显示分区信息:

    # sfdisk -l //显示分区信息
    
    Disk /dev/sda: 1305 cylinders, 255 heads, 63 sectors/track
    Units = cylinders of 8225280 bytes, blocks of 1024 bytes, counting from 0
    
      Device Boot Start   End  #cyls  #blocks  Id System
    /dev/sda1  *   0+   12   13-  104391  83 Linux
    /dev/sda2     13  1304  1292  10377990  8e Linux LVM
    /dev/sda3     0    -    0     0  0 Empty
    /dev/sda4     0    -    0     0  0 Empty
    
    Disk /dev/sdb: 652 cylinders, 255 heads, 63 sectors/track
    
    sfdisk: ERROR: sector 0 does not have an msdos signature
    /dev/sdb: unrecognized partition
    No partitions found
    

关闭交换分区。

    # swapoff /dev/sda2 // 关闭交换分区
    