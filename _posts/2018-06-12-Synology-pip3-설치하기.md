---
layout: post
title: Synology pip3 설치하기
tags: 
 - troubleshooting
---

Synology NAS에는 단순한 저장 기능 외에도 다른 기능들이 꽤 있습니다. Python이라든지 PhpMyAdmin이라든지요.

그 중에서도 Python을 잘 쓰기 위해서는 패키지를 설치해야 하는데 가장 손쉬운 방법은 `pip` 패키지를 통해서 관리하는 것이죠. 문제라면 이 `pip` 패키지를 설치하는 게 그리 녹록치 않더라는 겁니다.

Python2의 경우는 [이 글](https://primalcortex.wordpress.com/2016/01/25/synology-installing-python-pip-package-installer/)을 참고할 수 있습니다.

Python3의 경우 `python3 -m pip`의 형태로 환경 설정을 가져다 쓰는 것이 대세인 듯 합니다만 이리저리 뒤져보니 `/volume1/@appstore/py3k/usr/local/bin/pip3`에 해당 실행 파일이 있는 것을 확인할 수 있었습니다. `/etc/profile`에 `PATH`에 포함시키거나 `alias pip3=`의 꼴로 쓸 수 있겠습니다.

- - -

- [Synology – Installing Python PIP package installer | Primal Cortex's Weblog](https://primalcortex.wordpress.com/2016/01/25/synology-installing-python-pip-package-installer/)

