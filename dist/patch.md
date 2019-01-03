# Linux patch命令

Linux patch命令用于修补文件。

patch指令让用户利用设置修补文件的方式，修改，更新原始文件。倘若一次仅修改一个文件，可直接在指令列中下达指令依序执行。如果配合修补文件的方式则能一次修补大批文件，这也是Linux系统核心的升级方法之一。

### 语法

    patch [-bceEflnNRstTuvZ][-B ][-d ][-D ][-F ][-g ][-i ][-o ][-p ][-r ][-V ][-Y ][-z ][--backup-if -mismatch][--binary][--help][--nobackup-if-mismatch][--verbose][原始文件 ] 或 path [-p ] < [修补文件]

参数：

- -b或--backup 　备份每一个原始文件。
- -B或--prefix= 　设置文件备份时，附加在文件名称前面的字首字符串，该字符串可以是路径名称。
- -c或--context 　把修补数据解译成关联性的差异。
- -d或--directory= 　设置工作目录。
- -D或--ifdef= 　用指定的符号把改变的地方标示出来。
- -e或--ed 　把修补数据解译成ed指令可用的叙述文件。
- -E或--remove-empty-files 　若修补过后输出的文件其内容是一片空白，则移除该文件。
- -f或--force 　此参数的效果和指定"-t"参数类似，但会假设修补数据的版本为新　版本。
- -F或--fuzz 　设置监别列数的最大值。
- -g或--get= 　设置以RSC或SCCS控制修补作业。
- -i或--input= 　读取指定的修补问家你。
- -l或--ignore-whitespace 　忽略修补数据与输入数据的跳格，空格字符。
- -n或--normal 　把修补数据解译成一般性的差异。
- -N或--forward 　忽略修补的数据较原始文件的版本更旧，或该版本的修补数据已使　用过。
- -o或--output= 　设置输出文件的名称，修补过的文件会以该名称存放。
- -p或--strip= 　设置欲剥离几层路径名称。
- -f或--reject-file= 　设置保存拒绝修补相关信息的文件名称，预设的文件名称为.rej。
- -R或--reverse 　假设修补数据是由新旧文件交换位置而产生。
- -s或--quiet或--silent 　不显示指令执行过程，除非发生错误。
- -t或--batch 　自动略过错误，不询问任何问题。
- -T或--set-time 　此参数的效果和指定"-Z"参数类似，但以本地时间为主。
- -u或--unified 　把修补数据解译成一致化的差异。
- -v或--version 　显示版本信息。
- -V或--version-control= 　用"-b"参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，这个字符串不仅可用"-z"参数变更，当使用"-V"参数指定不同备份方式时，也会产生不同字尾的备份字符串。
- -Y或--basename-prefix=-- 　设置文件备份时，附加在文件基本名称开头的字首字符串。
- -z或--suffix= 　此参数的效果和指定"-B"参数类似，差别在于修补作业使用的路径与文件名若为src/linux/fs/super.c，加上"backup/"字符串后，文件super.c会备份于/src/linux/fs/backup目录里。
- -Z或--set-utc 　把修补过的文件更改，存取时间设为UTC。
- --backup-if-mismatch 　在修补数据不完全吻合，且没有刻意指定要备份文件时，才备份文件。
- --binary 　以二进制模式读写数据，而不通过标准输出设备。
- --help 　在线帮助。
- --nobackup-if-mismatch 　在修补数据不完全吻合，且没有刻意指定要备份文件时，不要备份文件。
- --verbose 　详细显示指令的执行过程。

### 实例

使用patch指令将文件"testfile1"升级，其升级补丁文件为"testfile.patch"，输入如下命令：

    $ patch -p0 testfile1 testfile.patch    #使用补丁程序升级文件 
    

使用该命令前，可以先使用指令"cat"查看"testfile1"的内容。在需要修改升级的文件与原文件之间使用指令"diff"比较可以生成补丁文件。具体操作如下所示：

    $ cat testfile1                 #查看testfile1的内容  
    Hello,This is the firstfile!  
    $ cat testfile2                 #查看testfile2的内容  
    Hello,Thisisthesecondfile!  
    $ diff testfile1 testfile2          #比较两个文件  
    1c1  
    Hello,Thisisthesecondfile!  
    #将比较结果保存到tetsfile.patch文件  
    $ diff testfile1 testfile2>testfile.patch     
    $ cat testfile.patch                #查看补丁包的内容  
    1c1  
    Hello,Thisisthesecondfile!  
    #使用补丁包升级testfile1文件  
    $ patch -p0 testfile1 testfile.patch      
    patching file testfile1  
    $cat testfile1                  #再次查看testfile1的内容  
    #testfile1文件被修改为与testfile2一样的内容  
    Hello,This is the secondfile!   
    

注意：上述命令代码中，"$ diff testfile1 testfile2>testfile. patch"所使用的操作符"＞"表示将该操作符左边的文件数据写入到右边所指向的文件中。在这里，即是指将两个文件比较后的结果写入到文件"testfile.patch"中。