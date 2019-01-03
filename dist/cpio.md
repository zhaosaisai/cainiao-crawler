# Linux cpio命令

Linux cpio命令用于备份文件。

cpio是用来建立，还原备份档的工具程序，它可以加入，解开cpio或tra备份档内的文件。

### 语法

    cpio [-0aABckLovV][-C ][-F ][-H ][-O ][--block-size=][--force-local][--help][--quiet][--version] 或 cpio [-bBcdfikmnrsStuvV][-C ][-E ][-F ][-H ][-I ][-M ][-R ][--block-size=][--force-local][--help][--no-absolute-filenames][--no-preserve-owner][--only-verify-crc][--quiet][--sparse][--version][范本样式...] 或 cpio [-0adkiLmpuvV][-R ][--help][--no-preserve-owner][--quiet][--sparse][--version][目的目]
    

参数：

- -0或--null 　接受新增列控制字符，通常配合find指令的"-print0"参数使用。
- -a或--reset-access-time 　重新设置文件的存取时间。
- -A或--append 　附加到已存在的备份档中，且这个备份档必须存放在磁盘上，而不能放置于磁带机里。
- -b或--swap 　此参数的效果和同时指定"-sS"参数相同。
- -B 　将输入/输出的区块大小改成5210 Bytes。
- -c 　使用旧ASCII备份格式。
- -C或--io-size= 　设置输入/输出的区块大小，单位是Byte。
- -d或--make-directories 　如有需要cpio会自行建立目录。
- -E或--pattern-file= 　指定范本文件，其内含有一个或多个范本样式，让cpio解开符合范本条件的文件，格式为每列一个范本样式。
- -f或--nonmatching 　让cpio解开所有不符合范本条件的文件。
- -F或--file= 　指定备份档的名称，用来取代标准输入或输出，也能借此通过网络使用另一台主机的保存设备存取备份档。
- -H 　指定备份时欲使用的文件格式。
- -i或--extract 　执行copy-in模式，还原备份档。
- -l 　指定备份档的名称，用来取代标准输入，也能借此通过网络使用另一台主机的保存设备读取备份档。
- -k 　此参数将忽略不予处理，仅负责解决cpio不同版本间的兼容性问题。
- -l或--link 　以硬连接的方式取代复制文件，可在copy-pass模式下运用。
- -L或--dereference 　不建立符号连接，直接复制该连接所指向的原始文件。
- -m或preserve-modification-time 　不去更换文件的更改时间。
- -M或--message= 　设置更换保存媒体的信息。
- -n或--numeric-uid-gid 　使用"-tv"参数列出备份档的内容时，若再加上参数"-n"，则会以用户识别码和群组识别码替代拥有者和群组名称列出文件清单。
- -o或--create 　执行copy-out模式，建立备份档。
- -O 　指定备份档的名称，用来取代标准输出，也能借此通过网络　使用另一台主机的保存设备存放备份档。
- -p或--pass-through 　执行copy-pass模式，略过备份步骤，直接将文件复制到目的目录。
- -r或--rename 　当有文件名称需要更动时，采用互动模式。
- -R或
- ----owner 　在copy-in模式还原备份档，或copy-pass模式复制文件时，可指定这些备份，复制的文件的拥有者与所属群组。
- -s或--swap-bytes 　交换每对字节的内容。
- -S或--swap-halfwords 　交换每半个字节的内容。
- -t或--list 　将输入的内容呈现出来。
- -u或--unconditional 　置换所有文件，不论日期时间的新旧与否，皆不予询问而直接覆盖。
- -v或--verbose 　详细显示指令的执行过程。
- -V或--dot 　执行指令时，在每个文件的执行程序前面加上"."号
- --block-size= 　设置输入/输出的区块大小，假如设置数值为5，则区块大小为2500，若设置成10，则区块大小为5120，依次类推。
- --force-local 　强制将备份档存放在本地主机。
- --help 　在线帮助。
- --no-absolute-filenames 　使用相对路径建立文件名称。
- --no-preserve-owner 　不保留文件的拥有者，谁解开了备份档，那些文件就归谁所有。
- -only-verify-crc 　当备份档采用CRC备份格式时，可使用这项参数检查备份档内的每个文件是否正确无误。
- --quiet 　不显示复制了多少区块。
- --sparse 　倘若一个文件内含大量的连续0字节，则将此文件存成稀疏文件。
- --version 　显示版本信息。

### 实例

制作备份文件

    [root@w3cschool.cc var]# ll //显示当前目录下的文件
    总用量 164
    drwxr-xr-x  2 root  root  4096 2008-03-30 account
    drwxr-xr-x  9 root  root  4096 2008-03-30 cache
    drwxr-xr-x  3 netdump netdump 4096 2008-03-30 crash
    drwxr-xr-x  3 root  root  4096 2008-03-30 db
    drwxr-xr-x  3 root  root  4096 2008-03-30 empty
    drwxr-xr-x  3 root  root  4096 2008-03-30 ftp
    drwxrwx--T  2 root  gdm   4096 4月 9 20:17 gdm
    drwxr-xr-x 25 root  root  4096 2008-03-30 lib
    drwxr-xr-x  2 root  root  4096 2004-08-13 local
    drwxrwxr-x  6 root  lock  4096 5月 8 15:25 lock
    drwxr-xr-x 14 root  root  4096 5月 8 15:14 log
    lrwxrwxrwx  1 root  root   10 2008-03-30 mail -> spool/mail
    drwxr-xr-x  2 root  root  4096 2004-08-13 nis
    drwxr-xr-x  2 root  root  4096 2004-08-13 opt
    drwxr-xr-x  2 root  root  4096 2004-08-13 preserve
    drwxr-xr-x 16 root  root  4096 5月 8 15:14 run
    drwxr-xr-x 16 root  root  4096 2008-03-30 spool
    drwxrwxrwt  3 root  root  4096 1月 13 18:53 tmp
    drwx------  2 root  root  4096 2004-07-08 tux
    drwxr-xr-x  8 root  root  4096 1月 19 19:39 www
    drwxr-xr-x  3 root  root  4096 2008-03-30 yp
    [root@w3cschool.cc var]# ls | cpio -o >123.cpio //制作备份文件
    25 blocks
    [root@w3cschool.cc var]# ll //显示当前目录下的文件
    总用量 172
    -rw-r--r--  1 root  root  1024 5月 24 13:06 123.cpio
    drwxr-xr-x  2 root  root  4096 2008-03-30 account
    drwxr-xr-x  9 root  root  4096 2008-03-30 cache
    drwxr-xr-x  3 netdump netdump 4096 2008-03-30 crash
    drwxr-xr-x  3 root  root  4096 2008-03-30 db
    drwxr-xr-x  3 root  root  4096 2008-03-30 empty
    drwxr-xr-x  3 root  root  4096 2008-03-30 ftp
    drwxrwx--T  2 root  gdm   4096 4月 9 20:17 gdm
    drwxr-xr-x 25 root  root  4096 2008-03-30 lib
    drwxr-xr-x  2 root  root  4096 2004-08-13 local
    drwxrwxr-x  6 root  lock  4096 5月 8 15:25 lock
    drwxr-xr-x 14 root  root  4096 5月 8 15:14 log
    lrwxrwxrwx  1 root  root   10 2008-03-30 mail -> spool/mail
    drwxr-xr-x  2 root  root  4096 2004-08-13 nis
    drwxr-xr-x  2 root  root  4096 2004-08-13 opt
    drwxr-xr-x  2 root  root  4096 2004-08-13 preserve
    drwxr-xr-x 16 root  root  4096 5月 8 15:14 run
    drwxr-xr-x 16 root  root  4096 2008-03-30 spool
    drwxrwxrwt  3 root  root  4096 1月 13 18:53 tmp
    drwx------  2 root  root  4096 2004-07-08 tux
    drwxr-xr-x  8 root  root  4096 1月 19 19:39 www
    drwxr-xr-x  3 root  root  4096 2008-03-30 yp
    [root@w3cschool.cc var]# 
    

解压备份文件

    [root@w3cschool.cc var]# ls | cpio -i -l 123.cpio
    

解压缩备份文件，并列出详细信息

    [root@w3cschool.cc var]# cpio -t -I 123.cpio  
    123.cpio
    a.c
    b.c
    c.c
    ……省略部分结果
    

强制解压缩

    [root@w3cschool.cc var]# cpio -i -u -I 123.cpio 
    

解压缩时进行反向匹配，指定不解压的文件

    [root@w3cschool.cc var]# cpio -i -I 123.cpio -f *.c 
    
    //不解压.c结尾的文件
    

向指定的.cpio文件添加文件

    [root@w3cschool.cc var]# ls
    123.cpio crash ftp local mail preserve tmp yp
    account  db    gdm lock  nis  run       tux
    cache     empty lib log  opt  spool   www
    [root@w3cschool.cc var]# cpio -o -O 123.cpio -A
    db  //用户输入 按下Ctrl+D结束输入
    1 block
    [root@w3cschool.cc var]# 
    

从标准输入备份文件

    [root@w3cschool.cc test]# ls              
    a. a.c b.c c.c d.c    f.c
    [root@w3cschool.cc test]# cpio -o >123.cpio
    a.c  //用户输入
    b.c
    c.c  //按下Ctrl+D完成输入
    3 block
    [root@w3cschool.cc test]# 
    

复制文件

    [root@w3cschool.cc test]# cpio -p /root
    a.c  //用户输入
    b.c
    c.c  //按下Ctrl+D完成输入
    3 block
    