---
group:
  title: 玩转 Linux 系统
  order: 4
---

# Linux 远程登录欢迎语

## 远程登录欢迎语解析

> /etc/issue 与 /etc/motd 作用一致，都是用于显示欢迎信息。
>
> 区别在于 /etc/issue 是在 login 提示符之前显示，而 /etc/motd 则在在用户成功登录系统之后显示。

下面是实战操作

```bash
➜  ~ cd /etc
➜  /etc ls -l|grep issue
  -rw-r--r--   1 root  root issue // 本地登陆（前）显示的信息
  -rw-r--r--   1 root  root issue.cockpit // cockpit 控制台登录界面显示的欢迎语
  drwxr-xr-x.  2 root  root issue.d  // 本地登陆（后）显示的其他信息（cockpit 的欢迎信息就在这）
  -rw-r--r--   1 root  root issue.net // 网络登陆（后）显示的信息，登录后显示，需要由sshd配置
 
➜  /etc ls -l|grep motd
	drwxr-xr-x.  2 root  root motd.d // 常用于通告信息，如计划关机时间的警告等，登陆后的提示信息
	
➜  /etc neofetch 

                 ..                    
               .PLTJ.                  
              <><><><>                 
     KKSSV' 4KKK LJ KKKL.'VSSKK        root@www.google.com
     KKV' 4KKKKK LJ KKKKAL 'VKK        ------------------------
     V' ' 'VKKKK LJ KKKKV' ' 'V        OS: CentOS Stream 8 x86_64
     .4MA.' 'VKK LJ KKV' '.4Mb.        Host: CVM 3.0
   . KKKKKA.' 'V LJ V' '.4KKKKK .      Kernel: 4.18.0-348.7.1.el8_5.x86_64
 .4D KKKKKKKA.'' LJ ''.4KKKKKKK FA.    Uptime: 1 hour, 11 mins
<QDD ++++++++++++  ++++++++++++ GFD>   Packages: 794 (rpm)
 'VD KKKKKKKK'.. LJ ..'KKKKKKKK FV     Shell: zsh 5.5.1
   ' VKKKKK'. .4 LJ K. .'KKKKKV '      Resolution: 1024x768
      'VK'. .4KK LJ KKA. .'KV'         Terminal: /dev/pts/0
     A. . .4KKKK LJ KKKKA. . .4        CPU: AMD EPYC 7K62 (2) @ 2.595GHz
     KKA. 'KKKKK LJ KKKKK' .4KK        GPU: 00:02.0 Cirrus Logic GD 5446
     KKSSA. VKKK LJ KKKV .4SSKK        Memory: 747MiB / 3736MiB
              <><><><>
               'MKKM'
                 ''
```

## 登录系统后自动执行 Neofetch

在 /etc/profile.d/ `(登录系统后会自动执行该目录的脚本)`创建一个名为 neofetch.sh 的脚本，填入执行命令，保存后重新登入 SSH 即可。

```bash
#/bin/bash
neofetch
```

