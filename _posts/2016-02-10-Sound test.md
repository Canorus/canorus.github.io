---
layout: post
---

<html>
<head>

</head>
<body>
    <script type="text/javascript" src="/player/js/mootools-cnet-debug.js"></script> 
    <script type="text/javascript" src="/player/js/mootools-1.2.4-core.js "></script>
    <script type="text/javascript" src="/player/js/IdleTimer.js"></script>
    <script type="text/javascript" src="/player/js/AudioCheck-nc.js"></script>
    <script type="text/javascript" src="/player/js/mtAudioPlayer-nc.js"></script>
    <script type="text/javascript" src="/player/js/mtAudioPlayerUI-nc.js"></script>
    <script type="text/javascript" src="/player/js/mtAudioPlaylist-nc.js"></script>

    <style type="text/css" media="screen">
        #mooTunes{
            margin:0 auto 100px;
            width:300px;
        }
    </style>

    <link rel="stylesheet" href="/player/css/mooTunes/mooTunes-nc.css" type="text/css" media="screen" title="mtAudio Player Style Sheet" charset="utf-8" />
    
    <script type="text/javascript" charset="utf-8">
        var mooTunes, playlist, mtPlayer, tinyToggle, tinyToggleTimer;

        tinyToggle = function(){
            this.name.fade("toggle");
            this.artist.fade("toggle");
        }
        
        

        window.addEvent("domready", function(){
            if(! new AudioCheck().check()){
                document.body.adopt(new Element("p", { html : "Your browser does not support HTML5 audio"}));
                return;
            }
            
           playlist = [ {artist : "레베(Reve)", name : "바람의 꽃이 되어서", mp3:"/Resources/2016-02-10/A flower of the wind.mp3",}/*, 
                        {artist : "Artist Two", mp3:"player/media/2.mp3",ogg:"player/media/2.ogg"}, 
                        {artist : "Artist Three", mp3:"player/media/3.mp3",ogg:"player/media/3.ogg"}*/
                        ];
     

            
           playlist = new mtAudioPlaylist( { tracks : playlist, parent : $("mooTunes") });
           $(playlist).store("shrink", new Fx.Tween($(playlist), { onComplete: function(){ dbug.log("complete"); $(playlist).setStyle("display", "none"); } } ));
           
           mtPlayer = new mtAudioPlayer({ auto : true, volume : 10, tracks : playlist })
                playlist.setPlayer(mtPlayer);
          
           mooTunes = new mtAudioPlayerUI( mtPlayer, { player : mtPlayer, parent : $('mooTunes'), noShrinker : $('mooTunes'), shrinkable : true, 
                                            onShrink : function(){ 
                                                    $(playlist).retrieve("shrink").start("opacity",0);
                                                    mooTunes.readoutElems.artist.fade("hide");
                                                    tinyToggleTimer = tinyToggle.periodical(2500, mooTunes.readoutElems);
                                            }, 
                                            onGrow : function(){ 
                                                $(playlist).fade("in").setStyle("display", ""); 
                                                tinyToggleTimer = $clear(tinyToggleTimer); 
                                                 mooTunes.readoutElems.name.fade("show");
                                                 mooTunes.readoutElems.artist.fade("show");
                                            } 
                                            }).inject();
           playlist.inject();

        });
    </script>
</body>
</html>