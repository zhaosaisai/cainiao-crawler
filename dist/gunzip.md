# Linux gunzip命令

Linux gunzip命令用于解压文件。

gunzip是个使用广泛的解压缩程序，它用于解开被gzip压缩过的文件，这些压缩文件预设最后的扩展名为".gz"。事实上gunzip就是gzip的硬连接，因此不论是压缩或解压缩，都可通过gzip指令单独完成。

### 语法

参数：

    gunzip [-acfhlLnNqrtvV][-s ][文件...] 或 gunzip [-acfhlLnNqrtvV][-s ][目录]

- -a或--ascii 　使用ASCII文字模式。
- -c或--stdout或--to-stdout 　把解压后的文件输出到标准输出设备。
- -f或-force 　强行解开压缩文件，不理会文件名称或硬连接是否存在以及该文件是否为符号连接。
- -h或--help 　在线帮助。
- -l或--list 　列出压缩文件的相关信息。
- -L或--license 　显示版本与版权信息。
- -n或--no-name 　解压缩时，若压缩文件内含有远来的文件名称及时间戳记，则将其忽略不予处理。
- -N或--name 　解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其回存到解开的文件上。
- -q或--quiet 　不显示警告信息。
- -r或--recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。
- -S或--suffix 　更改压缩字尾字符串。
- -t或--test 　测试压缩文件是否正确无误。
- -v或--verbose 　显示指令执行过程。
- -V或--version 显示版本信息。

### 实例

    
    解压文件
    
    
        
        # gunzip ab.gz 
        
    
    