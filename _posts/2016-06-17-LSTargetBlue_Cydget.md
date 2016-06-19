---
layout: post
title: LSTargetBlue Cydget
tags:
- Cydget
- iPhone
- Theme
---

예전에 어디선가 받았던 Cydget 테마가 있었다. 이름은 LSTargetRed로 되어 있었는데 앞에 `<head>` 부분만 어찌어찌 수정하고 Info.plist 파일을 만들어서 Cydget 용으로 잘 쓰고 있었다.

그리고 [야후는 3월 15일에 날씨 API를 완전히 갈아엎어버렸다!!](https://www.igorkromin.net/index.php/2016/03/27/yahoo-effectively-shut-down-its-weather-api-by-forcing-oauth-10-and-crippling-it/) 대단해 야후.

적지 않은 iWidget과 Cydget, Winterboard, GroovyLock 기타 날씨를 지원하는 테마가 야후 웨더 API - 주로 rss 피드 - 에서 날씨 데이터를 가져오는데 야후는 OAuth 1.0을 적용해버림으로써 이걸 쿨하게 막아버렸다. 야후 만세다(?)

사실 야후 웨더가 날씨 데이터 원천(?)으로써 작용하는 건 탈옥 테마 뿐이 아닌지라 야후 개발자 사이에서도 난리가 났던 모양이다. [4월에 다시 퍼블릭 API를 열었으되](https://www.igorkromin.net/index.php/2016/04/14/yahoo-returns-its-weather-api-to-public-access-switches-to-yql-for-query/) YQL을 통해 쿼리를 요청하는 방식으로 바꿨다나. 어찌됐든, 이전 코드는 못 쓴다는 모양이다.

그래서 [저 블로그 주인장이 만든 예시 코드](https://github.com/ikromin/misc/blob/master/yahooweather/weather_yql_example.html)에서 통째로 가져다가 기존 테마에 우겨 넣었다.

![Cydget](/Resources/2016-06-17/Cydget.png){: .center-image }

사실 우겨넣으면서 몇가지 더 수정했다.

- 배경화면 색을 #333333 으로 바꿨다. 검정색은 너무 심심하고 식상해서
- 원래는 #FF0000 (붉은색 계열)이지만 #2EACFF (푸른색 계열)로 바꿨다. 검빨은 너무 흔해… 
- 도시 이름 가져오던 스크립트는 그냥 통째로 지웠다. 능력 부족.
- 아마 레이아웃도 원본과는 약간 바뀌었을 걸로 생각한다.

적용방법은 이전과 같다. `/System/Library/LockCydgets`[^dir]에 폴더채로 집어넣고 그 안에 Config.js 파일에서 `var locale = 뭐라뭐라;` 된 부분에서 `뭐라뭐라` 부분을 야후 날씨 코드로 대체하면 된다.[^ywc]

[다운로드 download](/Resources/2016-06-17/LSTargetBlue.zip)

[^dir]: `/var/mobile/{고유번호}/LockCydgets/`로 접근하는 방법도 있긴 있다.
[^ywc]: 야후 날씨 코드 찾는 건 인터넷에 치면 글이 수 백개도 더 있을테니 굳이 기술하지 않는다.

- - -

Thanks to [Igor's blog](https://www.igorkromin.net) and [jpedroribeiro from stackoverflow](http://stackoverflow.com/questions/37774819/yahoo-weather-yql-data-limit)

- - -