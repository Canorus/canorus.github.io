---
layout: page
title: Archive
permalink: /archive/
---
<!--This page lists all posts (not pages) organized by date.-->

<div class="post-list">
    
        {% for post in site.posts %}
                <a href="{{ post.url }}">{{ post.title }}</a>
                <time>{{ post.date | date: '%B %d, %Y' }}</time>
        {% endfor %}
    
</div>
