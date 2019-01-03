# Linux apachectl命令

Linux apachectl命令可用来控制Apache HTTP服务器的程序。

apachectl是slackware内附Apache HTTP服务器的script文件，可供管理员控制服务器，但在其他Linux的Apache HTTP服务器不一定有这个文件。

### 语法

    apachectl [configtest][fullstatus][graceful][help][restart][start][status][stop]
    

参数：

- configtest   检查设置文件中的语法是否正确。
- fullstatus   显示服务器完整的状态信息。
- graceful   重新启动Apache服务器，但不会中断原有的连接。
- help   显示帮助信息。
- restart   重新启动Apache服务器。
- start   启动Apache服务器。
- status   显示服务器摘要的状态信息。
- stop   停止Apache服务器。