# Linux screen命令

Linux screen命令用于多重视窗管理程序。

screen为多重视窗管理程序。此处所谓的视窗，是指一个全屏幕的文字模式画面。通常只有在使用telnet登入主机或是使用老式的终端机时，才有可能用到screen程序。

### 语法

    screen [-AmRvx -ls -wipe][-d ][-h ][-r ][-s ][-S ]

参数说明：

- -A 　将所有的视窗都调整为目前终端机的大小。
- -d 　将指定的screen作业离线。
- -h 　指定视窗的缓冲区行数。
- -m 　即使目前已在作业中的screen作业，仍强制建立新的screen作业。
- -r 　恢复离线的screen作业。
- -R 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业。
- -s 　指定建立新视窗时，所要执行的shell。
- -S 　指定screen作业的名称。
- -v 　显示版本信息。
- -x 　恢复之前离线的screen作业。
- -ls或--list 　显示目前所有的screen作业。
- -wipe 　检查目前所有的screen作业，并删除已经无法使用的screen作业。

### 实例

创建 screen 终端

    # screen //创建 screen 终端

创建 screen 终端 并执行任务

    # screen vi ~/main.c //创建 screen 终端 ，并执行 vi命令

离开 screen 终端

    # screen vi ~/main.c //创建 screen 终端 ，并执行 vi命令
    
    #include 
    
    main ()
    {
    
    }
    
    "~/mail.c"       0,0-1    
    
    在 screen 终端 下 按下 Ctrl+a d键
    

重新连接离开的 screen 终端

    # screen -ls  //显示已创建的screen终端 
    There are screens on:
    2433.pts-3.linux    (2013年10月20日 16时48分59秒)    (Detached)
    2428.pts-3.linux    (2013年10月20日 16时48分05秒)    (Detached)
    2284.pts-3.linux    (2013年10月20日 16时14分55秒)    (Detached)
    2276.pts-3.linux    (2013年10月20日 16时13分18秒)    (Detached)
    4 Sockets in /var/run/screen/S-root.
    
    # screen -r 2276 //连接 screen_id 为 2276 的 screen终端
    