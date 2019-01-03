# Linux whereis命令

Linux whereis命令用于查找文件。

该指令会在特定目录中查找符合条件的文件。这些文件应属于原始代码、二进制文件，或是帮助文件。

该指令只能用于查找二进制文件、源代码文件和man手册页，一般文件的定位需使用locate命令。

### 语法

    whereis [-bfmsu][-B ...][-M ...][-S ...][文件...]

参数：
H2M_LI_HEADER -b 　只查找二进制文件。
H2M_LI_HEADER -B 　只在设置的目录下查找二进制文件。
H2M_LI_HEADER -f 　不显示文件名前的路径名称。
H2M_LI_HEADER -m 　只查找说明文件。
H2M_LI_HEADER -M 　只在设置的目录下查找说明文件。
H2M_LI_HEADER -s 　只查找原始代码文件。
H2M_LI_HEADER -S 　只在设置的目录下查找原始代码文件。
H2M_LI_HEADER -u 　查找不包含指定类型的文件。

### 实例

使用指令"whereis"查看指令"bash"的位置，输入如下命令：

    $ whereis bash 
    

上面的指令执行后，输出信息如下所示：

    bash:/bin/bash/etc/bash.bashrc/usr/share/man/man1/bash.1.gz 
    

注意：以上输出信息从左至右分别为查询的程序名、bash路径、bash的man 手册页路径。

如果用户需要单独查询二进制文件或帮助文件，可使用如下命令：

    $ whereis -b bash 
    $ whereis -m bash 
    

输出信息如下：

    $ whereis -b bash               #显示bash 命令的二进制程序  
    bash: /bin/bash /etc/bash.bashrc /usr/share/bash    # bash命令的二进制程序的地址  
    $ whereis -m bash               #显示bash 命令的帮助文件  
    bash: /usr/share/man/man1/bash.1.gz  #bash命令的帮助文件地址  
    