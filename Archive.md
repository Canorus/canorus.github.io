---
layout: page
title: Archive
---
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
                {% endif %}
            <li><a href="{{post.url | prepend: site.baseurl | prepend: site.url}}">{{post.title}}}</a></li></ul>
            {% endunless %}
        {% endfor %}
    </div>
</div>