# Linux mshowfat命令

Linux mshowfat命令用于显示MS-DOS文件在FAT中的记录。

mshowfat为mtools工具指令，可显示MS-DOS文件在FAT中的记录编号。

### 语法

    mshowfat [文件...]

参数说明：

[文件…]：
执行操作的文件相对路径或者绝对路径

### 实例

使用指令mshowfat查看文件"autorun.bat"的FAT信息，输入如下命令：

    $ mshowfat autorun.bat 
    

以上命令执行后，文件"autorun.bat"的FAT相关信息将会被显示出来。

注意：执行操作的文件必须是DOS文件系统下的文件。