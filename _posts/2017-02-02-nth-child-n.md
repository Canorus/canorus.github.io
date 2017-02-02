---
layout: "post"
title: ":nth-child(n)"
date: "2017-02-02 11:32"
tags:
  - study
---

RSS Generator를 사용해서 element를 뽑아내다보면 css를 쓰게 될 일이 가끔 생기게 된다. 예를 들어,

![](http://d.pr/i/pF0M+){:.center-image}

중앙일보 페이지에서 문유석 판사의 일상 유감 글을 뽑아내다 보면 날짜를 적는 란과 작성자가 같이 `<em>` 태그로 묶여서 일반적인 방법으로는 구분할 수가 없다.

그래서 구글을 검색해보니 element의 순서로 지정할 수 있는 방법이 있었다.

```css
p:nth-child(n){

}
```

위의 코드는 <p>과 parent를 같이하는 child element 중에서 두 번째 element가 <p>인 element에 적용이 되는 것으로 이해할 수 있을 것 같다.

- - -

via
- [w3school.com](http://www.w3schools.com/cssref/sel_nth-child.asp)
