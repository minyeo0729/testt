# Library for book reviews 
------------
## Purpose 
+ practicing bookAPI from kakaoAPI
+ add interaction with GSAP
+ turn it in to fullstack project
you can actually search and see a brief description of books you are looking for and write a review on your own and grow cactus from leaving more reviews
-----------

self-note // develop todo 

search the book and click 'click to write' to write a review -> confetti motion 

write something and click add btn -> modal dissapear, add review on board 
// .review-index:after(or inside span) show number of reviews 

when review-index is clicked, 
show review-board.html

connect growCactus() when review is added 

finish review-board delete btn, {{ content.title }}, 

<!--source-->
maybe author is for login feature?? but then how will you join? 

if i do it with django, i need to make login btn 😅
<!--
방법1.
    {% if user.is_anonymous %}
    <a href="{% url 'admin' %}">login</a>
    클릭하면 /admin으로 로그인 화면이 전환
    https://d3v3lop3r.tistory.com/26
    view.py, url.py에 admin view랑 페이지 추가? 

방법2.
    https://byoul14.tistory.com/9
    form action="{% url 'login' %}으로 화면에서 로그인하는 방법 


finalizing djangogirls blog 
https://tutorial-extensions.djangogirls.org/ko/homework 
maybe add comment?

-->
