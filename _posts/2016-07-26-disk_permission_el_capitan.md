---
layout: post
title: El Capitan에서 디스크 권한 복구하기
---

OS X 10.11에서부터는 디스크 유틸리티에 디스크 권한 복구가 없어졌습니다. Rootless 등으로 중요한 파일에 대한 권한이 변경될 일이 없어졌기 때문이라는 시각이 지배적입니다.

하지만 여전히 디스크 권한 복구의 필요성은 남아있는데요, 개인적인 사례로 최근에 DEVONthink.dmg 파일을 맥북에서 열었을 때 '마운트 가능한 파일 시스템 없음'이라는 에러를 보이면서 마운트하지 못하는 일이 있었습니다. DEVONthink 홈페이지에서 바로 내려받은 파일인데도 불구하고 말이죠.

그래서 찾아보니 El Capitan에도 권한 복구 기능이 있었습니다. 다만 GUI가 아닌 command line을 이용해야 합니다.

##### 1. /Applications/Utilities 폴더 아래 Terminal.app을 열어줍니다.

![](/Resources/2016-07-26/openterminal.png){: .center-image }

##### 2. 아래의 터미널 명령어를 입력하여 디스크 권한을 복구합니다.

`sudo /usr/libexec/repair_packages --repair --standard-pkgs --volume /`

관리자 비밀번호를 요구하며 입력하더라도 화면에는 나타나지 않으니 이상하게 생각하지 마시고 입력하시면 됩니다.

------

via [osxdaily: How to Verify & Repair Permissions in OS X El Capitan](http://osxdaily.com/2015/11/04/verify-repair-permissions-mac-os-x/)