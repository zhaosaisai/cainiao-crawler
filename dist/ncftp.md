# Linux ncftp命令

Linux ncftp命令用于传输文件。

FTP让用户得以下载存放于服务器主机的文件，也能将文件上传到远端主机放置。

NcFTP是文字模式FTP程序的佼佼者，它具备多样特色， 包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。

当不指定用户名时，ncftp 命令会自动尝试使用匿名账户anonymous 去连接远程FTP 服

务器，不需要用户输入账号和密码。

### 语法

    ncftp [主机或IP地址]

参数说明：

- 
-u 指定登录FTP服务器的用户名
- 
-p 设置用户密码
- 
-P 指定FTP端口号，默认为21
- 
-j 指定账号
- 
-h 帮助信息
- 
-v 版本信息 

### 
实例

使用ncftp命令匿名连接FTP服务器。

例如想匿名连接ftp.kernel.org服务器，同时不想输入anonymous等匿名用户名，可直接使用ncftp命令：

    ncftp ftp.kernel.org
    

得到如下信息：

    $ ncftp ftp.kernel.org #匿名连接ftp.kernel.org服务器  
    NcFTP 3.2.1 (Jul 29, 2007) by Mike Gleason (http://www.NcFTP.com/contact/).  
    #ncftp版权、版本等信息  
    Copyright (c) 1992-2005 by Mike Gleason.  
    All rights reserved.  
    Connecting to 149.20.20.133... #连接服务器  
    Welcome to ftp.kernel.org.  
    Logging in... #匿名登录  
    Welcome to the #欢迎信息  
    LINUX KERNEL ARCHIVES  
    ftp.kernel.org  
    "Much more than just kernels"  
    IF YOU'RE ACCESSING THIS SITE VIA A WEB BROWSER  
    PLEASE USE THE HTTP URL BELOW INSTEAD!  
    ----> If you are looking for mirror sites, please go  to mirrors.kernel.org instead .  
    Please do not use this address for questions that are not related to  
    the operation of this site. Please see our homepage at  
    http://www.kernel.org/ for links to Linux documentation resources.  
    Login successful.  
    Logged in to ftp.kernel.org.  
    ncftp / > 
    

提示：ncftp的命令提示符为"ncftp / >"，而不是ftp中的"ftp / >"。

使用ncftp命令操作、下载文件。

ncftp的命令基本上与ftp相同，例如可以使用"cd"命令切换在FTP服务器中的当前目录，使用"ls"命令列出当前目录内容，使用"get"命令下载"/pub"目录下的README文件、使用"quit"离开ncftp等。操作结果如下：

    ncftp / > pwd               #查看当前路径  
    ftp://ftp.kernel.org        #当前路径为根目录  
    ncftp / > ls                #查看当前目录列表  
    bin/ for_mirrors_only/ pub/  
    dev/ lib/ usr@  
    etc/ lost+found/ welcome.msg@  
    ncftp / > cd pub            #切换目录到pub 子目录  
    Directory successfully changed.  
    ncftp /pub > ls             #查看pub 的目录列表  
    dist/ media/ scm/  
    index.html RCS/ site/  
    linux/ README software/  
    lost+found/ README_ABOUT_BZ2_FILES tools/  
    ncftp /pub > get README     #下载README 文件  
    README: 1.87 KB 10.39 KB/s  
    ncftp /pub > quit           #离开ncftp 
    

与ftp不同的是，ncftp此时会提示用户是否将FTP服务器保存为书签，以便于下次登录，用户可以进行自定义书签名等操作，如下所示：

    You have not saved a bookmark for this site.  #离开提示信息  
    Would you like to save a bookmark to:  
    ftp://ftp.kernel.org/pub/  
    Save? (yes/no) yes                            #确认是否保存  
    Enter a name for this bookmark, or hit enter for "kernel": kernel #输入书签名  
    Bookmark "kernel" saved. 
    