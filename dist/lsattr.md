# Linux lsattr命令

Linux lsattr命令用于显示文件属性。

用chattr执行改变文件或目录的属性，可执行lsattr指令查询其属性。

### 语法

    lsattr [-adlRvV][文件或目录...]

参数：

- -a 　显示所有文件和目录，包括以"."为名称开头字符的额外内建，现行目录"."与上层目录".."。
- -d 　显示，目录名称，而非其内容。
- -l 　此参数目前没有任何作用。
- -R 　递归处理，将指定目录下的所有文件及子目录一并处理。
- -v 　显示文件或目录版本。
- -V 　显示版本信息。

### 实例

1、用chattr命令防止系统中某个关键文件被修改：

    # chattr +i /etc/resolv.conf
    

然后用mv /etc/resolv.conf等命令操作于该文件，都是得到Operation not permitted 的结果。

vim编辑该文件时会提示W10: Warning: Changing a readonly file错误。要想修改此文件就要把i属性去掉：

    chattr -i /etc/resolv.conf
    

使用 lsattr 命令来显示文件属性：

    # lsattr /etc/resolv.conf
    

输出结果为:

    ----i-------- /etc/resolv.conf
    

2、让某个文件只能往里面追加数据，但不能删除，适用于各种日志文件：

    # chattr +a /var/log/messages
    