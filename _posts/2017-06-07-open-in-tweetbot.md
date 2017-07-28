---
layout: "post"
title: "open in Tweetbot"
date: "2017-06-07 22:19"
---

앱을 사용하다보면 *더 많은 소식을 얻으려면 트위터에서 팔로우하세요* 같은 메세지를 보게 됩니다. 문제는, 저는 웹 트위터보다는 서드파티 클라이언트를 더 많이 쓴다는 거죠.

일일이 아이디를 입력해서 팔로우하기는 귀찮고 팔로우는 하고 싶을 때 아주 유용합니다.

일단 가장 기본이 되는 스크립트는 동일합니다.

```
javascript:var%20url=document.URL;var%20match=url.match(/status(?:es)?%5C/(%5Cd+)/i);var%20tweetbotUrl;if(match==null)%7BtweetbotUrl=url.replace(/https?:%5C/%5C/(mobile%5C.)?twitter%5C.com%5C//i,%22tweetbot:///user_profile/%22)%7Delse%7BtweetbotUrl=%22tweetbot:///status/%22+match%5B1%5D%7Dwindow.location=tweetbotUrl;
```

### Chrome

1\. 우선 첫 화면에서 북마크 아이콘을 클릭하고 수정 버튼을 클릭합니다.
![](http://d.pr/i/bxBq2V+){:.center-image}
2\. 이름 란에는 맘대로 집어넣고 URL 란에 위 코드를 복사-붙여넣기 합니다.
![](http://d.pr/i/gNR7X7+){:.center-image}
3\. 끝

### Safari

1\. 우선 주소창에 `about:blank`를 입력하고 책갈피 메뉴에서 책갈피 추가를 누릅니다. 단축키는 cmd + d 입니다.
![](http://d.pr/i/R7Sv6l+){:.center-image}
2\. 똑같이 제목란에는 위 코드를 붙여넣고 설명란에는 맘대로 설명을 적어 넣습니다.
![](http://d.pr/i/uq4Xjq+){:.center-image}
3\. 끝

- - -

via [ebetancourt/bookmarklet-twitter-profie-ios](https://gist.github.com/ebetancourt/9744723)
