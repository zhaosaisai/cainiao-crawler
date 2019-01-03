# Linux sleep命令

Linux sleep命令可以用来将目前动作延迟一段时间。

使用权限：所有使用者。

### 语法

    sleep [--help] [--version] number[smhd]

参数说明：

- --help : 显示辅助讯息
- --version : 显示版本编号
- number : 时间长度，后面可接 s、m、h 或 d
- 其中 s 为秒，m 为 分钟，h 为小时，d 为日数

### 实例

休眠5分钟

    # sleep 5m

显示目前时间后延迟 1 分钟，之后再次显示时间

    date;sleep 1m;date