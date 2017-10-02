---
layout: post
title: YouTube Downloader Alfred workflow
tags: 
 - study
---
# 알프레드 유투브 다운로더 워크플로우

얼마 전에 비디오 다운로드 툴인 [youtube-dl](https://github.com/rg3/youtube-dl)에 대해서 [다루었습니다.](http://canor.cf/2017/09/25/%EC%BB%A4%EB%A7%A8%EB%93%9C%EB%9D%BC%EC%9D%B8%EC%9C%BC%EB%A1%9C-%EC%9C%A0%ED%88%AC%EB%B8%8C-%EB%82%B4%EB%A0%A4%EB%B0%9B%EA%B8%B0-youtube-dl/) 글에서 굳이 커맨드라인을 사용하는 쪽으로 찾아보았는데 이런 식으로 활용이 가능하기 때문이었죠.

사실 [유투브 서비스 약관](https://www.youtube.com/static?gl=KR&template=terms) 5조 B항을 보면 `귀하는 해당 콘텐츠에 대하여 본 서비스에서 YouTube가 표시한 “다운로드” 또는 그와 유사한 링크를 발견하지 않는 한 콘텐츠를 다운로드 하면 안 됩니다.`라고 적고 있기 때문에 유투브 비디오의 다운로드는 엄밀히 말하면 서비스 약관 위반입니다. 구글 쪽에서 그리 개의치 않고 있는 것 같기는 하지만.

### 설치 및 사용

Workflow는 [링크](http://d.pr/f/rOg6NR)를 눌러서 내려받을 수 있습니다. 설치는 내려받아서 더블클릭하면 알아서 설치할 것이고.

사용은 다운로드할 유투브 페이지에서 알프레드를 호출한 뒤에 키워드를 입력해서 사용할 수 있습니다. 기본 키워드는 yd로 설정되어 있습니다.

### 기타

사실 Workflow 설명을 보면 거의 똑같은 내용을 적어두고도 귀찮게 또 적는 이유는 이하 내용 때문에-내가 고생한 부분

받는 것 까지는 잘 됐는데 어째서인지 `ffmpeg`를 사용해서 변환이 안 되는 것이었다. `ffprobe` 또는 `libavutil`이 없다나. 문제는 터미널에서 쳐보면 확실하게 설치가 되어 있고 변환도 멀쩡하게 잘 되더라는 것.

거의 반나절 동안 구글링을 한 결과, [Alfred Forum에 해답](https://www.alfredforum.com/topic/2431-weird-behavior-of-youtube-dl/?do=findComment&comment=13933)이 있었다. 요컨대 Alfred에서 `/bin/bash`로 코드를 실행할 때에는 프로파일이 그대로 들어오는 게 아니라 `/bin;/sbin;/usr/sbin;/usr/bin`만 프로파일에 들어있는 채로 시작하기 때문에 `/usr/local/bin/`이하에 위치하고 있는 Homebrew 패키지들은 인식이 안 된다는 것이었다. ~~그런데 youtube-dl은 잘 찾던데~~

따라서 해결책은 시작하기 전에 `export PATH=$PATH:[나머지 경로들]`을 넣어서 참조 경로를 재정립해주거나 일일이 위치를 콕 집어서 실행하면 되겠다. 물론 이런 경우는 `ffmpeg`를 별도로 실행하는 구간이 없기 때문에 참조 경로에 포함시키는 수 밖에 없었지만.

- - -

이외 기능들도 *심심하면* 추가할 요량이지만 이 이상은 그리 자주 쓸 일이 없을 것 같아서 순위가 한참 뒤로 처질 것 같은 느낌적 느낌. 혹시나 작동이 안 된다거나 하는 분은 아래 댓글로 달아주시면 감사하겠스빈다.

