# Linux stat命令

Linux stat命令用于显示inode内容。

stat以文字的格式来显示inode的内容。

### 语法

    stat [文件或目录]

### 实例

查看 testfile 文件的inode内容内容，可以用以下命令：

# stat testfile 

执行以上命令输出结果：

    # stat testfile                #输入命令
      File: `testfile'
      Size: 102             Blocks: 8          IO Block: 4096   regular file
    Device: 807h/2055d      Inode: 1265161     Links: 1
    Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
    Access: 2014-08-13 14:07:20.000000000 +0800
    Modify: 2014-08-13 14:07:07.000000000 +0800
    Change: 2014-08-13 14:07:07.000000000 +0800
    
    