# Linux mcopy命令

Linux mcopy命令用来复制 MSDOS 格式文件到 Linux 中，或是由 Linux 中复制 MSDOS 文件到磁片上。

mcopy 可复制单一的文件到所指定的文件名称，或是复制数个文件到所指定的目录之中。来源与目的文件可为 MSDOS 或是 Linux 文件。

mcopy指令是一种mtools工具指令，可以在DOS系统中复制文件或者在DOS与Linux操作系统之间进行文件复制。

### 语法

    mcopy [-bnmpQt/][源文件][目标文件或目录]
    

参数：

- b 批处理模式。这是为大量的文件复制进行最佳化的选项,但是当在复制文件过程中产生 crash 时，会有安全性的问题产生。/ 递回的复制。包含目录所含文件与其下所有子目录中的文件。
- -n 覆盖其他文件时，不需要进行确认而直接覆盖
- m 将源文件修改时间设置为目标文件的修改时间。
- p 将源文件的属性设置为目标文件的属性。
- Q 当复制多个文件产生错误时，尽快结束程序。
- t 转换为文本文件。
- o 在覆盖 MSDOS 文件时不会出现警示讯息。

### 实例

将 A 盘根目录中的 autoexec.bat 复制到目前工作目录之下：

    mcopy a:autoexec.bat .

当复制的内容包括子目录和文件时，必须使用参数"-/"递归操作，因此该命令为：

    mcopy -/ A:\* 
    

执行该命令前先使用mdir 命令查看原来的目录结构，执行mcopy 之后可使用ls 命令查看复制之后Linux系统中的文件结构，结果如下：

    cmd@cmd-desktop:~$ mdir -/ a:\* #查看A 盘中的文件  
    Volume in drive A has no label #加载信息  
    Volume Serial Number is 13D2~055C  
    Directory for A:/ #以下为目录信息  
    #文件名目录大小 修改时间  
    ./TEST  2009-09-23 16:59  
    AUTORUN.INF 265 2009-09-23 16:53  
    AUTORUN.BAT 43 2009-09-23 16:56  
    3 files 308 bytes #统计总大小  
    724 325 bytes free #剩余空间  
    cmd@cmd-desktop:~$ mcopy -/ A:\* #将A盘上的所有文件复制到当前工作目录  
    cmd@cmd-desktop:~$ls  
    TEST AUTORUN.INF AUTORUN.BAT #A盘中的内容复制到Linux文件系统结构中 
    