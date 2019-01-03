# Linux fdisk命令

Linux fdisk是一个创建和维护分区表的程序，它兼容DOS类型的分区表、BSD或者SUN类型的磁盘列表。

### 语法

    fdisk [必要参数][选择参数]
    

必要参数：

- -l 列出素所有分区表
- 
-u 与"-l"搭配使用，显示分区数目

选择参数：

- 

-s 指定分区
- 
-v 版本信息

菜单操作说明

- m ：显示菜单和帮助信息
- 
a ：活动分区标记/引导分区
- 
d ：删除分区
- 
l ：显示分区类型
- 
n ：新建分区
- 
p ：显示分区信息
- 
q ：退出不保存
- 
t ：设置分区号
- 
v ：进行分区检查
- 
w ：保存修改
- 
x ：扩展应用，高级功能

### 实例

显示当前分区情况：

    # fdisk -l
    
    Disk /dev/sda: 10.7 GB, 10737418240 bytes
    255 heads, 63 sectors/track, 1305 cylinders
    Units = cylinders of 16065 * 512 = 8225280 bytes
    
      Device Boot   Start     End   Blocks  Id System
    /dev/sda1  *      1     13   104391  83 Linux
    /dev/sda2       14    1305  10377990  8e Linux LVM
    
    Disk /dev/sdb: 5368 MB, 5368709120 bytes
    255 heads, 63 sectors/track, 652 cylinders
    Units = cylinders of 16065 * 512 = 8225280 bytes
    
    Disk /dev/sdb doesn't contain a valid partition table
    

显示SCSI硬盘的每个分区情况

    # fdisk -lu  
    
    Disk /dev/sda: 10.7 GB, 10737418240 bytes
    255 heads, 63 sectors/track, 1305 cylinders, total 20971520 sectors
    Units = sectors of 1 * 512 = 512 bytes
    
      Device Boot   Start     End   Blocks  Id System
    /dev/sda1  *     63   208844   104391  83 Linux
    /dev/sda2     208845  20964824  10377990  8e Linux LVM
    
    Disk /dev/sdb: 5368 MB, 5368709120 bytes
    255 heads, 63 sectors/track, 652 cylinders, total 10485760 sectors
    Units = sectors of 1 * 512 = 512 bytes
    
    Disk /dev/sdb doesn't contain a valid partition table
    