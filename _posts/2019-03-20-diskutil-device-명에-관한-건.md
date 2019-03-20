---
layout: post
title: diskutil device 명에 관한 건
tags: 
 - study
---

일반적으로 `diskutil`[^1]을 사용함에 있어서 명령의 대상이 되는 디스크는 disk identifier(disk1, disk2, disk3 등의 disk+숫자조합의 형식)나 disk identifier를 포함하는 node entry를 사용합니다(`/dev/disk1`이나 `/dev/rdisk2` 등의 형식)

[^1]: 외부 저장장치 등을 마운트/마운트 해제하거나 포맷하는 등의 용도로 사용합니다.

다른 형식의 운영체제에서는 어떨지 모르겠습니다만 macOS(10.14 mojave 기준)에서는 위의 `disk*` 나 `/dev/disk3` 외에도 **볼륨 이름**이나 **마운트 포인트**를 device 명으로 사용할 수 있습니다.

macOS의 커맨드라인에서 `man diskutil` 을 쳐서 확인을 해보면 명령어 형식은 다음과 같습니다.

> mountDisk device
>
> unmountDisk \| umountDisk [force] device
>
> eject device
> 
> eraseDisk format name \[APM\[Format] \| MBR[Format] \| GPT[Format]] device
>
> eraseVolume format name device
> 
> partitionDisk device \[numberOfPartitions] \[APM\[Format] \| MBR\[Format] \| GPT\[Format]] [part1Format
>                part1Name part1Size part2Format part2Name part2Size part3Format part3Name part3Size
>               ...]
>
> resizeVolume device limits \| mapsize \[-plist] \| R \| size \[numberOfPartitions] [part1Format
>                part1Name part1Size part2Format part2Name part2Size part3Format part3Name part3Size
>                ...]

일관되게 `device` 파라미터가 등장합니다. 아래 쪽으로 내려가면 `device` 파라미터에 대한 설명이 나옵니다.


> DEVICES
>      A device parameter for any of the above commands (except where explicitly required otherwise) can
>      usually be any of the following:
>
>            o   The disk identifier (see below).  Any entry of the form of disk*, e.g.  disk1s9.
>        
>            o   The device node entry containing the disk identifier.  Any entry of the form of
>                /dev/[r]disk*, e.g.  /dev/disk2.
>        
>            o   The volume mount point.  Any entry of the form of /Volumes/*, e.g.  /Volumes/Untitled.
>                In most cases, a "custom" mount point e.g.  /your/custom/mountpoint/here is also
>                accepted.
>        
>            o   The URL form of any of the volume mount point forms described above.  E.g.
>                file:///Volumes/Untitled or file:///.
>        
>            o   A UUID.  Any entry of the form of e.g.  11111111-2222-3333-4444-555555555555.  The UUID
>                can be a "media" UUID which IOKit places in an IOMedia node as derived from e.g. a GPT
>                map's partition UUID, or it can be an AppleRAID (or CoreStorage) set (LV) or member
>                (PV) UUID.
>        
>            o   A volume name, e.g.  Untitled.  This match is only attempted if the given device is not
>                of the form \[/dev/]\[r]disk*, nor [/Volumes/]*.  The match attempt is against the
>                intrinsic volume label, not against the terminal component, if mounted, of its mount
>                point.

그러니까 disk identifier나 node entry 외에도 마운트 포인트나 마운트 포인트를 가리키는 URL 형식, 기기 UUID나 볼륨 명도 deivce 파라미터로 쓸 수 있다는 겁니다. 볼륨 이름은 유용하겠네요.

`diskutil` 명령어에 대한 추가적인 자세한 설명은 터미널에 `man diskutil`을 입력하거나 [구글에 검색](https://www.google.co.kr/search?q=man+diskutil)해서 볼 수 있습니다. 
