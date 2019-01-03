# Linux bunzip2命令

Linux bunzip2命令是.bz2文件的解压缩程序。

bunzip2可解压缩.bz2格式的压缩文件。bunzip2实际上是bzip2的符号连接，执行bunzip2与bzip2 -d的效果相同。

语法：bunzip2 [-fkLsvV][.bz2压缩文件]

参数：

- -f或--force 　解压缩时，若输出的文件与现有文件同名时，预设不会覆盖现有的文件。若要覆盖，请使用此参数。
- -k或--keep 　在解压缩后，预设会删除原来的压缩文件。若要保留压缩文件，请使用此参数。
- -s或--small 　降低程序执行时，内存的使用量。
- -v或--verbose 　解压缩文件时，显示详细的信息。
- -l,--license,-V或--version 　显示版本信息。

### 实例

解压.bz2文件 

    # bunzip2 -v temp.bz2 //解压文件显示详细处理信息
    