# Linux slocate命令

Linux slocate命令查找文件或目录。

slocate本身具有一个数据库，里面存放了系统中文件与目录的相关信息。

### 语法

    slocate [-u][--help][--version][-d ][查找的文件]

参数：

- -d或--database= 　指定数据库所在的目录。
- -u 　更新slocate数据库。
- --help 　显示帮助。
- --version 　显示版本信息。

### 实例

使用指令"slocate"显示文件名中含有关键字"fdisk"的文件路径信息，输入如下命令：

    $ slocate fdisk #显示文件名中含有fdisk关键字的文件的路径信息 
    

执行以上命令后，指令执行的输出信息如下：

    $ slocate fdisk #显示文件名中含有fdisk 关键字的文件的路径信息  
    /root/cfdisk        #搜索到的文件路径列表  
    /root/fdisk  
    /root/sfdisk  
    /usr/include/grub/ieee1275/ofdisk.h  
    /usr/share/doc/util-Linux/README.cfdisk  
    /usr/share/doc/util-Linux/README.fdisk.gz  
    /usr/share/doc/util-Linux/examples/sfdisk.examples.gz  
    