# Linux pppstats命令

Linux pppstats命令用于显示PPP连线状态。

利用pppstats(point to point protocol status)指令可让你得知PPP连接网络的相关信息。

### 语法

    pppstats [-adrv][-c][-w][网络界面]

参数说明：

- -a   显示绝对统计值。
- -c   设置回报状况的次数。
- -d   显示相对统计值。
- -r   显示数据包压缩比率的统计值。
- -v   显示VJTCP文件头的压缩效率统计值。
- -w   设置显示统计信息的间隔时间。

### 实例

显示ppp的了连接状态

    # pppstats