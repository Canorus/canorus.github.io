---
layout: page
title: Archive
---
<style>
li{
    list-style-type:none;
}
#searchBar {
    font-size: 80%;
    padding: 0.43em 0 0.57em;
    #search {
        float: right;
        #searchString {
            width: 283px;
            border: none;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;
            padding: 0.3em 0.6em;
            background-color: #f6f5ea;
            margin-right: 0;
        }
        #searchButton {
            paddign: 0.3em 0.6em;
            background-color: #0B5485;
            border: 1px solid #f6f5ea;
            margin-left: 0;
            color: $white;
            -webkit-appearance: none;
            border-radius: 0;
        }
        #archives {
            line-height: 2;
            float: left;
            color: $black;
            text-wrap: avoid;
        }
    }
}
</style>
<div id="home-search" class="home">
    <script>
        (function() {
            var cx = '[Your CSE Search ID]';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//www.google.com/cse/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        })();
    </script>
    <gcse:search queryParameterName="searchString"></gcse:search>
</div>
<div class="grid" id="searchBar">
    <div>
        <div id="search">
            <form role="search" method="get" action="{{ site.baseurl }}//search/">
                <input id="searchString" name="searchString"
                    placeholder=" " type="text">
                <input id="searchButton" name="googleSearchName" type="button" value="Search">
            </form>
        </div>
    </div>
</div>
<div class="sidebar-archive">
    <div class="post">
        {% for post in site.posts %}
            {% unless post.menu == 'private' %}
            {% capture currentyear %}{{post.date | date: "%Y"}}{% endcapture %}
            {% if currentyear != year %}
                {% unless forloop.first %}{% endunless %}
                    <h5>{{ currentyear }}</h5>
                    <ul class="posts">
                    {% capture year %}{{currentyear}}{% endcapture %}
                    </ul>
                {% endif %}
            <li><a href="{{post.url | prepend: site.baseurl | prepend: site.url}}">{{post.title}}</a><span style="font-size:0.5em">{{ post.date | date_to_string }}</span></li>
            {% endunless %}
        {% endfor %}
    </div>
</div>