---
layout: post
title: iconservicesagent가 리소스를 과도하게 차지하는 건에 관하여
tags: 
 - troubleshooing
---

특히 맥 미니에서 발생하는 증상인데 iconservicesagent라는 프로세스가 램을 잔뜩 잡아먹는 증상을 보임. 심한 경우 istat menus 기준으로 71GB(MB가 아니라 GB) 까지도 차지함. 물론 물리적으로 그 정도의 램이 없으니 가상 뭐시기겠지만.

![iconservicesagent가 71GB까지 차지함](/images/2018-11-27/iconservicesagent.png){:.center-image}

[이런 글](https://gist.github.com/walesmd/7315613)도 있던 모양인데 그닥 도움은 안 됨. Quicklook 관련해서 생기는 문제라는 것 같은데아무튼 해결은 안 됨

해결은 아니고 더 이상 이 건이 문제가 되지 않게 됐는데, Google Backup and Sync를 사용하면서.

학교가 학교 메일을 구글로 옮기면서 구글 드라이브 무제한 용량이 열림. 덕분에 맥미니와 맥북을 통째로 백업을 할 수 있게 됨.

그래서 맥미니 주요 경로(다운로드 경로나 작업 폴더 정도)를 백업을 걸어두었더니 iconservicesagent의 리소스 차지 용량이 확 줆. 아마도 백업하면서 파일들을 건드리거나 한 게 아닌가 싶긴 한데 아무튼.

대신 Google 백업 동기화가 램을 무쟈게 잡아먹기 시작함. 기록 끝.
