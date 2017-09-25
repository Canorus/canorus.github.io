---
layout: "post"
title: "커맨드라인으로 유투브 내려받기 youtube-dl"
date: "2017-09-25 21:43"
tags: 
 - study
---

세상 어딜 가나 마찬가지겠지만 *돈을 쓰면 편하다*. 돈을 쓰면 *대체로* 더 많고 빠른 지원을 받을 수 있고 더 잦은 업데이트를 받을 수 있다. 물론 먹튀라는 예외는 있다.

다만 문제라면 이런 서비스들은 지속적인 지출을 요구하는 경우가 많다. 소규모 개인 개발자들은 소규모 개인 개발자라서, 회사 단위 대규모 서비스는 가족이 많아서, 거의 모든 판올림마다 추가 지출을 요구한다. 이 방면에서는 [트윗봇](https://tapbots.com/tweetbot/)이 단연 압권이다.[^1]

[^1]: 사실 내가 트윗봇을 욕하는 건 매 판올림마다 수금하는 것도 있지만 평균 어플리케이션 가격을 아득히 뛰어넘는 가격을 받아~~처~~먹어놓고서도 매번 수금하고 심지어 싱크도 불안정하다는 점도 크다.

당연히 개발자들이 땅파서 개발하는 게 아니니 매번 돈을 걷는다고 욕만 하기도 어려운 점이 있다. 나 같아도 계속 공짜로 풀거면 안 하지. *꼬우면 니가 하든가*

**그래서 직접 내려받는 방법을 찾아봤다.**

# youtube-dl

[ssyoutube](http://en.savefrom.net/1-how-to-download-youtube-video/)처럼 youtube 앞에 ss를 붙인다든가 플러그인들이 있지만 굳이 터미널에서 받는 방법을 찾아보았다.[^2]

[^2]: 경우에 따라서 나중에 가족이 다운받을 때 쓴다거나 할 수 있기 때문에.

우선 페이지는 [이 쪽](https://rg3.github.io/youtube-dl/), [github](https://github.com/rg3/youtube-dl/blob/master/README.md#readme)이라거나 [iRC](irc://chat.freenode.net/#youtube-dl)도 있고 별의별 게 다 있는 듯하다.

설치는 HomeBrew를 통해서 했는데 [다운로드 페이지](https://rg3.github.io/youtube-dl/download.html)에 가보면 각 플랫폼별로 준비되어 있다. 하지마 HomeBrew가 쓰기 가장 편하니.

```
brew install
```

Python 2.6이나 2.7, 혹은 3.2 이상의 버전이 설치되어 있어야 한다.

최신 버전의 macOS[^3]에는 설치되어 있을 것이므로 상관없지만, 윈도우에서는 별도의 설치 과정이 필요할지도.

![](http://d.pr/i/v17U6m+){:.center-image}

[^3]: 이 글을 작성하는 2017-09-25 23:09에는 macOS 10.12.6. ~~몇 시간 후에는 10.13이 정식 출시된다~~

## 용법

기본적으로 `youtube-dl 링크`의 형식으로 사용할 수 있다.

```
youtube-dl [각종 옵션 플래그] [링크]
```

여러가지 옵션 플래그들은 [이 쪽](https://github.com/rg3/youtube-dl/blob/master/README.md#options)에서 확인할 수 있다.

## 설정

별도의 설정을 할 수 있다.

시스템 광역 설정 파일은 `/etc/youtube-dl.conf` 파일에 저장되고 사용자 별 설정은 `~/.config/youtube-dl/config`에 저장된다고 하는데, *처음에는 파일이 없었다*.

그냥 가서 `sudo touch /etc/youtube-dl.conf` 해서 파일을 만들어주니까 적용은 된다. `youtube-dl --config-location PATH` 명령어를 입력해도 위치를 못 찾아서 문제긴 한데 작동은 한다. ~~그럼 된거지 뭐~~

지금 설정은 아래처럼 해두었다.

```
# Lines starting with # are comments

# Always extract audio
-x

# Audio format to mp3

--audio-format mp3

# Save all videos under synced dir
-o ~/Desktoped/downloads/music/%(title)s.%(ext)s

# no Last-modified header
--no-mtime
```

- 다운로드 후 자동으로 오디오 파일로 변환(ffmpeg 필요)
- 오디오 포맷 mp3로 지정
- 다운로드 위치 지정
- 시간 태그 유지하지 않고 다운로드한 시점을 기준으로 수정시간 설정.
