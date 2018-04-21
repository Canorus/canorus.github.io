---
layout: "post"
title: "Synology Resilio Sync 비밀번호 초기화"
date: "2018-04-22 01:10"
tags:
  - troubleshooting
---

일종의 백업 용도로 Synology 나스에 Resilio Sync를 설치해서 사용하고 있는데 [맥북을 클린 설치](https://canor.cf/2018/04/22/맥북-에어-macos-10-13-클린-설치)하면서 동기화 세션을 끌어올 필요가 생겼습니다. 문제는, 로그인 할 때 설정한 비밀번호가 생각이 나지 않는다는 거였죠.

### 해결

**1\.** 구동되고 있는 Resilio Sync 패키지를 중단시킵니다. **2\.** 그 다음에 나스에 ssh로 접속해서 **3\.** `/usr/local/resiliosync/var/` 경로에 있는 `settings.dat` 파일과 `settings.dat.old` 파일을 삭제합니다. **4\.** 끝으로 중단되었던 패키지를 다시 시작하고 WebUI로 접속하면 비밀번호가 초기화되면서 초기 설정 화면이 다시 나타나게 됩니다. 기존의 동기화되는 파일들은 남아 있습니다.

- via [help.resilio.com](https://help.resilio.com/hc/en-us/articles/205450295-How-do-I-reset-my-WebUI-password-)
