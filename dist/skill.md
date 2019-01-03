# Linux skill命令

Linux skill命令送个讯号给正在执行的程序，预设的讯息为 TERM (中断)，较常使用的讯息为 HUP、INT、KILL、STOP、CONT 和 0。

讯息有三种写法：分别为 -9、-SIGKILL、-KILL，可以使用 -l 或 -L 已列出可使用的讯息。

使用权限：所有使用者。

其他相关的命令：kill

### 语法

    skill [signal to send] [options] 选择程序的规则

一般参数：

- -f 快速模式/尚未完成
- -i 互动模式/ 每个动作将要被确认
- -v 详细输出/ 列出所选择程序的资讯
- -w 智能警告讯息/ 尚未完成
- -n 没有动作/ 显示程序代号

参数：选择程序的规则可以是：终端机代号、使用者名称、程序代号、命令名称。

- -t 终端机代号 ( tty 或 pty )
- -u 使用者名称
- -p 程序代号 ( pid )
- -c 命令名称可使用的讯号

以下列出已知的讯号名称、讯号代号、功能。
名称（代号）功能/描述ALRM 14离开HUP 1离开INT 2离开KILL 9离开/强迫关闭PIPE 13离开POLL离开PROF离开TERM 15离开USR1离开USR2离开VTALRM离开STKFLT离开/只适用于i386、m68k、arm 和 ppc 硬件UNUSED离开/只适用于i386、m68k、arm 和 ppc 硬件TSTP停止/产生与内容相关的行为TTIN停止/产生与内容相关的行为TTOU停止/产生与内容相关的行为STOP停止/强迫关闭CONT重新启动/如果在停止状态则重新启动，否则忽略PWR忽略/在某些系统中会离开WINCH忽略CHLD忽略ABRT 6核心FPE 8核心ILL 4核心QUIT 3核心SEGV 11核心TRAP 5核心SYS核心/或许尚未实作EMT核心/或许尚未实作BUS核心/核心失败XCPU核心/核心失败XFSZ核心/核心失败
### 实例

停止所有在 PTY 装置上的程序

    skill -KILL -v pts/*

停止三个使用者 user1、user2、user3

    skill -STOP user1 user2 user3