# Linux bzip2命令

Linux bzip2命令是.bz2文件的压缩程序。

bzip2采用新的压缩演算法，压缩效果比传统的LZ77/LZ78压缩演算法来得好。若没有加上任何参数，bzip2压缩完文件后会产生.bz2的压缩文件，并删除原始的文件。

### 语法

    bzip2 [-cdfhkLstvVz][--repetitive-best][--repetitive-fast][- 压缩等级][要压缩的文件]

参数：

- -c或--stdout 　将压缩与解压缩的结果送到标准输出。
- -d或--decompress 　执行解压缩。
- -f或--force 　bzip2在压缩或解压缩时，若输出文件与现有文件同名，预设不会覆盖现有文件。若要覆盖，请使用此参数。
- -h或--help 　显示帮助。
- -k或--keep 　bzip2在压缩或解压缩后，会删除原始的文件。若要保留原始文件，请使用此参数。
- -s或--small 　降低程序执行时内存的使用量。
- -t或--test 　测试.bz2压缩文件的完整性。
- -v或--verbose 　压缩或解压缩文件时，显示详细的信息。
- -z或--compress 　强制执行压缩。
- -L,--license,
- -V或--version 　显示版本信息。
- --repetitive-best 　若文件中有重复出现的资料时，可利用此参数提高压缩效果。
- --repetitive-fast 　若文件中有重复出现的资料时，可利用此参数加快执行速度。
- -压缩等级 　压缩时的区块大小。

### 实例

解压.bz2文件 

    [root@w3cschool.cc ~]# bzip2 -v temp.bz2 //解压文件显示详细处理信息 
    

 压缩文件

    [root@w3cschool.cc ~]# bzip2 -c a.c b.c c.c
    

检查文件完整性

    [root@w3cschool.cc ~]# bzip2 -t temp.bz2