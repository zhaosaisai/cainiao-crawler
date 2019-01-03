# Linux httpd命令

Linux httpd命令是Apache HTTP服务器程序。

httpd为Apache HTTP服务器程序。直接执行程序可启动服务器的服务。

### 语法

    httpd [-hlLStvVX][-c][-C][-d][-D][-f]

参数说明：

- -c   在读取配置文件前，先执行选项中的指令。
- -C   在读取配置文件后，再执行选项中的指令。
- -d   指定服务器的根目录。
- -D   指定要传入配置文件的参数。
- -f   指定配置文件。
- -h   显示帮助。
- -l   显示服务器编译时所包含的模块。
- -L   显示httpd指令的说明。
- -S   显示配置文件中的设定。
- -t   测试配置文件的语法是否正确。
- -v   显示版本信息。
- -V   显示版本信息以及建立环境。
- -X   以单一程序的方式来启动服务器。

### 实例

检查配置文件语法错误

    # httpd -t
    httpd: Could not determine the server's fully qualified domain name, using 127.0.0.1 for ServerName
    Syntax OK
    

启动httpd

    httpd
    httpd: Could not determine the server's fully qualified domain name, using 127.0.0.1 for ServerName
    

显示编译模块

    # httpd -l 
    Compiled in modules:
     core.c
     prefork.c
     http_core.c
     mod_so.c
    

显示配置文件

    # httpd -L>1.log|tail -n 20 1.log
    Maximum number of children alive at the same time
    Allowed in *.conf only outside , or 
    ServerLimit (prefork.c)
    Maximum value of MaxClients for this run of Apache
    Allowed in *.conf only outside , or 
    KeepAliveTimeout (http_core.c)
    Keep-Alive timeout duration (sec)
    Allowed in *.conf only outside , or 
    MaxKeepAliveRequests (http_core.c)
    Maximum number of Keep-Alive requests per connection, or 0 for infinite
    Allowed in *.conf only outside , or 
    KeepAlive (http_core.c)
    Whether persistent connections should be On or Off
    Allowed in *.conf only outside , or 
    LoadModule (mod_so.c)
    a module name and the name of a shared object file to load it from
    Allowed in *.conf only outside , or 
    LoadFile (mod_so.c)
    shared object file or library to load into the server at runtime
    Allowed in *.conf only outside , or 
    