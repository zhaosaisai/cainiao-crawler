# Linux mouseconfig命令

Linux mouseconfig命令用于设置鼠标相关参数。

mouseconfig为鼠标设置程序，可自动设置相关参数，或者用户也可以利用所提供互动模式自行设置鼠标。mouseconfig是Red Hat Linux才有的命令。

### 语法

    mouseconfig [--back][--emulthree][--help][--expert][--kickstart][--noprobe][--test][--device ][鼠标类型]
    

参数：

- --back 　在设置画面上显示Back按钮，而取代预设的Cancel按钮。
- --device 　指定硬件连接端口。可用的选项有ttyS0，ttyS1，ttyS2，ttyS3与orpsaux。
- --emulthree 　将二钮鼠标模拟成三钮鼠标。
- --help 　显示帮助以及所有支持的鼠标类型。
- --expert 　程序预设可自动判断部分设置值。若要自行设置，请使用--expert参数。
- --kickstart 　让程序自动检测并保存所有的鼠标设置。
- --noprobe 　不要检测鼠标设备。
- --test 　测试模式，不会改变任何设置。

### 
实例

以交互模式配置鼠标：

    # mouseconfig -text