# Linux chgrp命令

Linux chgrp命令用于变更文件或目录的所属群组。

在UNIX系统家族里，文件或目录权限的掌控以拥有者及所属群组来管理。您可以使用chgrp指令去变更文件与目录的所属群组，设置方式采用群组名称或群组识别码皆可。

### 语法

    chgrp [-cfhRv][--help][--version][所属群组][文件或目录...] 或 chgrp [-cfhRv][--help][--reference=][--version][文件或目录...]

### 参数说明

　　-c或--changes  效果类似"-v"参数，但仅回报更改的部分。

　　-f或--quiet或--silent 　不显示错误信息。

　　-h或--no-dereference 　只对符号连接的文件作修改，而不更动其他任何相关文件。

　　-R或--recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。

　　-v或--verbose 　显示指令执行过程。

　　--help 　在线帮助。

　　--reference= 　把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同。

　　--version 　显示版本信息。

### 实例

实例1：改变文件的群组属性：

    chgrp -v bin log2012.log
    

输出：

    [root@localhost test]# ll
    ---xrw-r-- 1 root root 302108 11-13 06:03 log2012.log
    [root@localhost test]# chgrp -v bin log2012.log
    

"log2012.log" 的所属组已更改为 bin

    [root@localhost test]# ll
    ---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
    

说明：
将log2012.log文件由root群组改为bin群组
 

实例2：根据指定文件改变文件的群组属性
 

    chgrp --reference=log2012.log log2013.log
    

输出：

    [root@localhost test]# ll
    ---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
    -rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
    [root@localhost test]#  chgrp --reference=log2012.log log2013.log 
    [root@localhost test]# ll
    ---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
    -rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
    

说明：
改变文件log2013.log 的群组属性，使得文件log2013.log的群组属性和参考文件log2012.log的群组属性相同