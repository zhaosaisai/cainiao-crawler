# Linux zipinfo命令

Linux zipinfo命令用于列出压缩文件信息。

执行zipinfo指令可得知zip压缩文件的详细信息。

### 语法

    zipinfo [-12hlmMstTvz][压缩文件][文件...][-x ]

参数：

- -1   只列出文件名称。
- -2   此参数的效果和指定"-1"参数类似，但可搭配"-h","-t"和"-z"参数使用。
- -h   只列出压缩文件的文件名称。
- -l   此参数的效果和指定"-m"参数类似，但会列出原始文件的大小而非每个文件的压缩率。
- -m   此参数的效果和指定"-s"参数类似，但多会列出每个文件的压缩率。
- -M   若信息内容超过一个画面，则采用类似more指令的方式列出信息。
- -s   用类似执行"ls -l"指令的效果列出压缩文件内容。
- -t   只列出压缩文件内所包含的文件数目，压缩前后的文件大小及压缩率。
- -T   将压缩文件内每个文件的日期时间用年，月，日，时，分，秒的顺序列出。
- -v   详细显示压缩文件内每一个文件的信息。
- -x   不列出符合条件的文件的信息。
- -z   如果压缩文件内含有注释，就将注释显示出来。

### 实例

显示压缩文件信息

    [root@w3cschool.cc a]# zipinfo cp.zip 
    Archive: cp.zip  486 bytes  4 files
    -rw-r--r-- 2.3 unx    0 bx stor 24-May-10 18:54 a.c
    -rw-r--r-- 2.3 unx    0 bx stor 24-May-10 18:54 b.c
    -rw-r--r-- 2.3 unx    0 bx stor 24-May-10 18:54 c.c
    -rw-r--r-- 2.3 unx    0 bx stor 24-May-10 18:54 e.c
    4 files, 0 bytes uncompressed, 0 bytes compressed: 0.0%
    [root@w3cschool.cc a]# 
    

显示压缩文件中每个文件的信息

    [root@w3cschool.cc a]# zipinfo -v cp.zip 
    Archive: cp.zip  486 bytes  4 files
    
    End-of-central-directory record:
    -------------------------------
    
     Actual offset of end-of-central-dir record:     464 (000001D0h)
     Expected offset of end-of-central-dir record:    464 (000001D0h)
     (based on the length of the central directory and its expected offset)
    
     This zipfile constitutes the sole disk of a single-part archive; its
     central directory contains 4 entries. The central directory is 248
     (000000F8h) bytes long, and its (expected) offset in bytes from the
     beginning of the zipfile is 216 (000000D8h).
    
     There is no zipfile comment.
    
    Central directory entry #1:
    ---------------------------
    
     a.c
    
     offset of local header from start of archive:   0 (00000000h) bytes
     file system or operating system of origin:    Unix
     version of encoding software:           2.3
     minimum file system compatibility required:    MS-DOS, OS/2 or NT FAT
     minimum software version required to extract:   1.0
     compression method:                none (stored)
     file security status:               not encrypted
     extended local header:              no
     file last modified on (DOS date/time):      2010 May 24 18:54:26
     file last modified on (UT extra field modtime):  2010 May 24 18:54:26 local
     file last modified on (UT extra field modtime):  2010 May 24 10:54:26 UTC
     32-bit CRC value (hex):              00000000
     compressed size:                 0 bytes
     uncompressed size:                0 bytes
     length of filename:                3 characters
     length of extra field:              13 bytes
     length of file comment:              0 characters
     disk number on which file begins:         disk 1
     apparent file type:                binary
     Unix file attributes (100644 octal):       -rw-r--r--
     MS-DOS file attributes (00 hex):         none
    
     The central-directory extra field contains:
     - A subfield with ID 0x5455 (universal time) and 5 data bytes.
      The local extra field has UTC/GMT modification/access times.
     - A subfield with ID 0x7855 (Unix UID/GID) and 0 data bytes.
    
     There is no file comment.
    
    Central directory entry #2:
    ---------------------------
    
     b.c
    
     offset of local header from start of archive:   54 (00000036h) bytes
     file system or operating system of origin:    Unix
     version of encoding software:           2.3
     minimum file system compatibility required:    MS-DOS, OS/2 or NT FAT
     minimum software version required to extract:   1.0
     compression method:                none (stored)
     file security status:               not encrypted
     extended local header:              no
     file last modified on (DOS date/time):      2010 May 24 18:54:26
     file last modified on (UT extra field modtime):  2010 May 24 18:54:26 local
     file last modified on (UT extra field modtime):  2010 May 24 10:54:26 UTC
     32-bit CRC value (hex):              00000000
     compressed size:                 0 bytes
     uncompressed size:                0 bytes
     length of filename:                3 characters
     length of extra field:              13 bytes
     length of file comment:              0 characters
     disk number on which file begins:         disk 1
     apparent file type:                binary
     Unix file attributes (100644 octal):       -rw-r--r--
     MS-DOS file attributes (00 hex):         none
    
     The central-directory extra field contains:
     - A subfield with ID 0x5455 (universal time) and 5 data bytes.
      The local extra field has UTC/GMT modification/access times.
     - A subfield with ID 0x7855 (Unix UID/GID) and 0 data bytes.
    
     There is no file comment.
    
    Central directory entry #3:
    ---------------------------
    
     c.c
    
     offset of local header from start of archive:   108 (0000006Ch) bytes
     file system or operating system of origin:    Unix
     version of encoding software:           2.3
     minimum file system compatibility required:    MS-DOS, OS/2 or NT FAT
     minimum software version required to extract:   1.0
     compression method:                none (stored)
     file security status:               not encrypted
     extended local header:              no
     file last modified on (DOS date/time):      2010 May 24 18:54:26
     file last modified on (UT extra field modtime):  2010 May 24 18:54:26 local
     file last modified on (UT extra field modtime):  2010 May 24 10:54:26 UTC
     32-bit CRC value (hex):              00000000
     compressed size:                 0 bytes
     uncompressed size:                0 bytes
     length of filename:                3 characters
     length of extra field:              13 bytes
     length of file comment:              0 characters
     disk number on which file begins:         disk 1
     apparent file type:                binary
     Unix file attributes (100644 octal):       -rw-r--r--
     MS-DOS file attributes (00 hex):         none
    
     The central-directory extra field contains:
     - A subfield with ID 0x5455 (universal time) and 5 data bytes.
      The local extra field has UTC/GMT modification/access times.
     - A subfield with ID 0x7855 (Unix UID/GID) and 0 data bytes.
    
     There is no file comment.
    
    Central directory entry #4:
    ---------------------------
    
     e.c
    
     offset of local header from start of archive:   162 (000000A2h) bytes
     file system or operating system of origin:    Unix
     version of encoding software:           2.3
     minimum file system compatibility required:    MS-DOS, OS/2 or NT FAT
     minimum software version required to extract:   1.0
     compression method:                none (stored)
     file security status:               not encrypted
     extended local header:              no
     file last modified on (DOS date/time):      2010 May 24 18:54:26
     file last modified on (UT extra field modtime):  2010 May 24 18:54:26 local
     file last modified on (UT extra field modtime):  2010 May 24 10:54:26 UTC
     32-bit CRC value (hex):              00000000
     compressed size:                 0 bytes
     uncompressed size:                0 bytes
     length of filename:                3 characters
     length of extra field:              13 bytes
     length of file comment:              0 characters
     disk number on which file begins:         disk 1
     apparent file type:                binary
     Unix file attributes (100644 octal):       -rw-r--r--
     MS-DOS file attributes (00 hex):         none
    
     The central-directory extra field contains:
     - A subfield with ID 0x5455 (universal time) and 5 data bytes.
      The local extra field has UTC/GMT modification/access times.
     - A subfield with ID 0x7855 (Unix UID/GID) and 0 data bytes.
    
     There is no file comment.
    