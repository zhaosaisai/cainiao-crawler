# Linux dumpkeys命令

Linux dumpkeys命令用于显示键盘映射表，输出的内容可以被loadkeys命令识别,改变映射关系。

### 语法

    dumpkey[选择参数]
    

参数说明:

- 
-i 驱动信息(键码范围、数量、状态键)
- 
-l 详细驱动信息
- 
-n 十六进制显示
- 
-f 显示全部信息
- 
-1 分行显示按键组合
- 
-S 设定输出格式(0：预设 1：完整 2：分行 3简单)
- 
--funcs-only 功能键信息
- 
--keys-only 键组合信息
- 
--compose-only 普通键信息 

### 实例

显示功能键信息 

    # dumpkeys --funcs-only 
    string F1 = "\033[[A"
    string F2 = "\033[[B"
    string F3 = "\033[[C"
    string F4 = "\033[[D"
    string F5 = "\033[[E"
    string F6 = "\033[17~"
    string F7 = "\033[18~"
    string F8 = "\033[19~"
    string F9 = "\033[20~"
    string F10 = "\033[21~"
    string F11 = "\033[23~"
    string F12 = "\033[24~"
    string F13 = "\033[25~"
    string F14 = "\033[26~"
    string F15 = "\033[28~"
    string F16 = "\033[29~"
    string F17 = "\033[31~"
    string F18 = "\033[32~"
    string F19 = "\033[33~"
    string F20 = "\033[34~"
    string Find = "\033[1~"
    string Insert = "\033[2~"
    string Remove = "\033[3~"
    string Select = "\033[4~"
    string Prior = "\033[5~"
    string Next = "\033[6~"
    string Macro = "\033[M"
    string Pause = "\033[P"
    root@snail-hnlinux:~# 
    

显示驱动信息

    # dumpkeys -i
    键值码范围被内核支持: 1 - 255
    可绑定到键值的动作最大值: 256
    实际使用的键值数: 128
    其中 121 已动态分配
    被内核支持的动作码值范围
    0x0000 - 0x00ff
    0x0100 - 0x01ff
    0x0200 - 0x0213
    0x0300 - 0x0313
    0x0400 - 0x0405
    0x0500 - 0x05ff
    0x0600 - 0x0603
    0x0700 - 0x0708
    0x0800 - 0x08ff
    0x0900 - 0x0919
    0x0a00 - 0x0a08
    0x0b00 - 0x0bff
    0x0c00 - 0x0c08
    0x0d00 - 0x0dff
    0x0e00 - 0x0e0a
    内核支持的功能键数：256
    编写定义的最大nr: 256
    实际使用的编写定义nr: 68
    