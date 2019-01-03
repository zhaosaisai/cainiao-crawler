# Linux compress命令

 Linux compress命令是一个相当古老的 unix 档案压缩指令，压缩后的档案会加上一个 .Z 延伸档名以区别未压缩的档案，压缩后的档案可以以 uncompress 解压。若要将数个档案压成一个压缩档，必须先将档案 tar 起来再压缩。由于 gzip 可以产生更理想的压缩比例，一般人多已改用 gzip 为档案压缩工具。

### 语法

    compress [-dfvcV] [-b maxbits] [file ...]

参数：

- c 输出结果至标准输出设备（一般指荧幕）
- f 强迫写入档案，若目的档已经存在，则会被覆盖 (force)
- v 将程序执行的讯息印在荧幕上 (verbose)
- b 设定共同字串数的上限，以位元计算，可以设定的值为 9 至 16 bits 。由于值越大，能使用的共同字串就 越多，压缩比例就越大，所以一般使用预设值 16 bits (bits)
- d 将压缩档解压缩
- V 列出版本讯息
- 范例：
- 将 source.dat 压缩成 source.dat.Z ，若 source.dat.Z 已经存在，内容则会被压缩档覆盖。
- compress -f source.dat
- 将 source.dat 压缩成 source.dat.Z ，并列印出压缩比例。
- -v 与 -f 可以一起使用
- compress -vf source.dat
- 将压缩后的资料输出后再导入 target.dat.Z 可以改变压缩档名。
- compress -c source.dat > target.dat.Z
- -b 的值越大，压缩比例就越大，范围是 9-16 ，预设值是 16 。
- compress -b 12 source.dat
- 将 source.dat.Z 解压成 source.dat ，若档案已经存在，使用者按 y 以确定覆盖档案，若使用 -df 程序则会自动覆盖档案。由于系统会自动加入 .Z 为延伸档名，所以 source.dat 会自动当作 source.dat.Z 处理。
- compress -d source.dat
- compress -d source.dat.Z

压缩文件

    [root@w3cschool.cc ~]# compress abc.h
    [root@w3cschool.cc ~]# ls
    
    abc.h.Z
    

解压文件

    [root@w3cschool.cc ~]# compress -d abc.h.Z
    [root@w3cschool.cc ~]# ls
    
    abc.h.
    

按指定压缩比例进行压缩

    [root@w3cschool.cc ~]# compress -b 7 abc.h
    

强制压缩文件夹

    [root@w3cschool.cc ~]# compress -rf /home/abc/ 
    