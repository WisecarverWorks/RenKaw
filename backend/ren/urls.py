# We must import path and include from django

from django.urls import path, include

# We want to import the views file from our Ren app

from ren import views, art

#<<<<<<<<<<<<<<<<<<<<< Below this line we will provide a variable set equal to a list of url patterns. 

# Our patterns variable will be named ren_urlpatters, here we will route functions 
urlpatterns = [
    # Here we will assign our first path, an open string  
    path('', views.list_art),
    # Here our second path
    path('', views.user_art),
]
