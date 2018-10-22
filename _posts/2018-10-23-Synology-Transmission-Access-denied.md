---
layout: post
title: Synology Transmission, Access Denied
tags: 
 - troubleshooting
---

Synology DS216j를 사용중에 raspbian과 ubuntu mate의 시드 유지를 위해서 NAS를 사용하는 것이 좋겠다는 생각을 했습니다. 맥 미니에서 유지하기에는 몇 가지 애로사항이 있더라구요.

DSM 자체에서 Download Station을 사용하는 방법이 가장 간편하고 추천할 만한 방법이지만(무엇보다도 기본 제공되는 앱이다보니) 저는 예전부터 토렌트 클라이언트로 Transmission을 써왔기 때문에 굳이 패키지를 설치했습니다. 제3자 패키지도 아니고 커뮤니티 패키지에 있어요.

문제는 초기 설정에 할당한 비밀번호를 입력한 새도 없이 Access denied라고 하면서 접근을 차단하는 것이었습니다. 

찾아보니 [시놀로지 포럼(로그인 필요)](https://forum.synology.com/enu/viewtopic.php?t=116881)에 이미 관련된 글이 올라왔었습니다. 그 중 [가장 간단한 방법](https://forum.synology.com/enu/viewtopic.php?t=116881#p431125)으로 start 스크립트를 실행하는 방법이 있었습니다.

```
sudo /var/packages/transmission/scripts/start-stop-status start
```

다행히 이 방법으로 저는 효과를 봤지만 만일 이 방법이 통하지 않는 경우를 위해서 [다른 방법들](https://forum.synology.com/enu/viewtopic.php?t=116881#p432244)도 올라와 있었습니다.

하지만 슬프게도 지금 로컬에 있는 raspbian과 ubuntu mate 모두 최신 버전이 아니기 때문에 찾는 사람이 없군요...

- - -

via
- [No Permissions to start Transmission?? - Synology Forum](https://forum.synology.com/enu/viewtopic.php?f=38&t=116881&sid=4c72bccaef68bd53fb00aca96250a03c)