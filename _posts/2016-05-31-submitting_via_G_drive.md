---
layout: post
title: 구글 드라이브로 파일 제출받기
published: true
---
파일이 제출되면, 새로운 폴더를 생성합니다

[여기](https://script.google.com/d/12EnDFZrsfpBubZ9lM7pnHIsn9M49_vyXm0TLBQ_pyx_ViAJH3HXgkoe9/edit?newcopy=true)를 눌러 구글 드라이브에 구글 스크립트를 생성합니다. 당연히 구글 드라이브에 로그인이 되어 있어야 합니다. 아니면 나중에 저장할 때 사용할 계정으로 로그인해주세요.

초기 화면은 아래와 같습니다.

![initial](/Resources/2016-05-31/initial.png)

`form.html` 파일과 `server.gs` 파일을 잘 매만져서 커스터마이즈 해줍니다.  
제가 SpinFest 영상 제출받을 때 사용했던 스크립트를 올립니다.

*server.gs*

```JavaScript
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {
  
  try {
    
    var dropbox = "SpinFest2016 KPDS Clips";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0
    
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = yyyy+'-'+mm+'-'+dd;
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    file.setName(form.myName+'_'+today);
    file.setDescription(form.myDescription);
        
    return "성공적으로 제출하였습니다.";
    
  } catch (error) {
    
    return error.toString();
  }
  
}
```

*form.html*

```html
<style>
form {
margin: 0 auto;
width: 150px;
</style>
<form id="myForm">
    <input type="text" name="myName" placeholder="닉네임을 적어주세요">
    <input type="file" name="myFile">
    <input type="text" name="myDescription" size="20" placeholder="참조사항을 적어주세요">
    <input type="submit" value="제출하기" 
           onclick="this.value='업로드 중... ';
                    google.script.run.withSuccessHandler(fileUploaded)
                    .uploadFiles(this.parentNode);
                    return false;">
</form>

<div id="output"></div>

<script>
    function fileUploaded(status) {
        document.getElementById('myForm').style.display = 'none';
        document.getElementById('output').innerHTML = status;
    }
</script>

<style>
 input { display:block; margin: 20px; }
</style>
```

주석 좀 달아놓을 걸 그랬네요... 

아무튼 이렇게 스크립트를 ~~얼렁뚱땅~~ 작성해주시고 나면 웹 앱으로 배포해주어야 합니다.

상단의 함수 선택 버튼을 눌러서 doGet를 선택, 실행하고 스크립트를 인증해줍니다. 파일이 구글 드라이브에 업로드 되어야 하므로 권한자의 승인·인증이 필요합니다. 

![doget](/Resources/2016-05-31/doget.png){: .center-image :}*이렇게 생겼습니다*

메뉴 바의 구름모양 아이콘을 클릭해서 *새로 만들기*, 앱을 실행할 사용자는 *나*, 웹에 액세스 할 수 있는 사용자는 *누구나(익명 사용자)*를 선택하고 Deploy 버튼을 눌러줍니다.

![deploy as web app](/Resources/2016-05-31/deployaswebapp.png)

그럼 아래와 같은 팝업이 나타납니다. 저기 있는 링크를 갖다 주면 됩니다.

![deployed](/Resources/2016-05-31/projectdeployed.png)

나타난 URL을 가져다가 주고 해당 URL로 업로드하게 시킵니다.

- - -

via [How to Receive Files in your Google Drive from Anyone](http://www.labnol.org/internet/receive-files-in-google-drive/19697/)
