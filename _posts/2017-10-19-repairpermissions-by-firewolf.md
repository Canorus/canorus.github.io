---
layout: "post"
title: "RepairPermissions by FireWolf"
date: "2017-10-19 00:55"
---

10.11 El Capitan까지만 해도 `/usr/libexec` 이하의 `repair_packages`를 이용해서 권한을 수정할 수 있었습니다. 그 이전에는 아예 disk utility 앱에 GUI로 내장이 되어 있었고요.

그 `repair_packages` 마저도 10.12 Sierra에 올라와서는 없어졌습니다. 10.13 High Sierra부터는 AFPS 덕분에 아예 필요가 없다고는 하더군요.

그래도 사람 습성이라는 게 안 변해서 트러블슈팅의 시작은 권한 수정으로 해야 할 것 같은 느낌이 있습니다. 그걸 위해서 FireWolf라는 개발자[^1]가 [RepairPermissions](https://www.firewolf.science/2016/07/repairpermissions-v3-now-supports-repairing-permissions-on-macos-sierra/)라는 걸 만들었나 봅니다. High Sierra까지 지원한다고 적어놨군요.

[^1]: 아마도 일본인 개발자 같습니다.

내려 받아서 써보니 알아서 권한을 수정해 줍니다… 만 제가 기대했던 문제는 역시 해결이 되지 않네요.

10.13 올라갈 때에는 완전히 밀고 설정없이 데이터만 넘겨올까도 생각중입니다.
