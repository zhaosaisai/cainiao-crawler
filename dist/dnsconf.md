# Linux dnsconf命令

Linux dnsconf命令用于设置DNS服务器组态。

dnsconf实际上为linuxconf的符号连接，提供图形截面的操作方式，供管理员管理DNS服务器。

### 语法

    dnsconf [--deldomain][--delsecondary][--newdomain][--set][--setcname][--setmx][--setns][--unset]

参数说明：

- --deldomain   删除域。
- --delsecondary   删除次级域。
- --newdomain   新增域。
- --set   新增主机记录。
- --setcname   设置。
- --setmx   指定域的邮件主机。
- --setns   指定域的DNS服务器。
- --unset   删除DNS中某台主机的记录。