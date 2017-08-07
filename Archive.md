---
layout: page
title: Archive
---
<style>
li{
    list-style-type:none;
}
</style>
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
            <li><a href="{{post.url| prepend: site.url}}">{{post.title}}</a><span style="font-size:0.5em">{{ post.date | date_to_string }}</span></li>
            {% endunless %}
        {% endfor %}
    </div>
</div>
