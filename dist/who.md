# Linux who命令

Linux who命令用于显示系统中有哪些使用者正在上面，显示的资料包含了使用者 ID、使用的终端机、从哪边连上来的、上线时间、呆滞时间、CPU 使用量、动作等等。

使用权限：所有使用者都可使用。

### 语法

    who - [husfV] [user]

参数说明：

- 
-H 或 --heading：显示各栏位的标题信息列；
- 
-i 或 -u 或 --idle：显示闲置时间，若该用户在前一分钟之内有进行任何动作，将标示成"."号，如果该用户已超过24小时没有任何动作，则标示出"old"字符串；
- 
-m：此参数的效果和指定"am i"字符串相同；
- 
-q 或--count：只显示登入系统的帐号名称和总人数；
- 
-s：此参数将忽略不予处理，仅负责解决who指令其他版本的兼容性问题；
- 
-w 或-T或--mesg或--message或--writable：显示用户的信息状态栏；
- 
--help：在线帮助；
- 
--version：显示版本信息。

### 实例

显示当前登录系统的用户

    # who  //显示当前登录系统的用户
    root   tty7     2014-05-13 12:12 (:0)
    root   pts/0    2014-05-14 17:09 (:0.0)
    root   pts/1    2014-05-14 18:51 (192.168.1.17)
    root   pts/2    2014-05-14 19:48 (192.168.1.17)
    

显示标题栏

    # who -H
    NAME   LINE     TIME       COMMENT
    root   tty7     2014-05-13 12:12 (:0)
    root   pts/0    2014-05-14 17:09 (:0.0)
    root   pts/1    2014-05-14 18:51 (192.168.1.17)
    root   pts/2    2014-05-14 19:48 (192.168.1.17)
    

显示用户登录来源

    # who -l -H
    NAME   LINE     TIME       IDLE     PID COMMENT
    LOGIN  tty4     2014-05-13 12:11        852 id=4
    LOGIN  tty5     2014-05-13 12:11        855 id=5
    LOGIN  tty2     2014-05-13 12:11        862 id=2
    LOGIN  tty3     2014-05-13 12:11        864 id=3
    LOGIN  tty6     2014-05-13 12:11        867 id=6
    LOGIN  tty1     2014-05-13 12:11       1021 id=1
    

显示终端属性

    # who -T -H
    NAME    LINE     TIME       COMMENT
    root   + tty7     2014-05-13 12:12 (:0)
    root   + pts/0    2014-05-14 17:09 (:0.0)
    root   - pts/1    2014-05-14 18:51 (192.168.1.17)
    root   - pts/2    2014-05-14 19:48 (192.168.1.17)
    

只显示当前用户

    # who -m -H
    NAME   LINE     TIME       COMMENT
    root   pts/1    2014-05-14 18:51 (192.168.1.17)
    

精简模式显示

    # who -q
    root root root root
    # users=4
    