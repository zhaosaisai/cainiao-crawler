# Linux rhmask命令

Linux rhmask命令用于对文件进行加密和解密操作。

执行rhmask指令可制作加密过的文件，方便用户在公开的网络上传输该文件，而不至于被任意盗用。

### 语法

    rhmask [加密文件][输出文件] 或 rhmask [-d][加密文件][源文件][输出文件]

参数：

- -d 　产生加密过的文件。

### 实例

使用指令"rhmask"将加密文件"code.txt"进行加密后，另存为输出文件"demo.txt"，输入如下命令：

    $ rhmask code.txt demo.txt

以上命令执行后，文件"code.txt"将被加密后，另存为已经加密的文件"demo.txt"。

注意：该指令有两种语法，用户可以有选择性地进行使用即可。