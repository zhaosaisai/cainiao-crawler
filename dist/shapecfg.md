# Linux shapecfg命令

Linux shapecfg命令用于管制网络设备的流量。

自Linux-2.15开始，便支持流量管制的功能。

### 语法

    shapecfg attach [流量管制器][网络设备]

或

    shapecfg speed [流量管制器][带宽]

参数说明：

- attach   将流量管制器与实际的网络设备结合。
- speed   设置流量管制器的对外传输带宽。