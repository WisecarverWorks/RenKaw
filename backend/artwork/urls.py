from django.urls import path, include
from artwork import views 

urlpatterns = [
    path('', views.getArtwork),
    path('', views.getAllArtwork),
]
