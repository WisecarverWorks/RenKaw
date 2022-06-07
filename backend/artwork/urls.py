"""artwork URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
"""


from django.urls import path, include
from artwork import views

# <<<<<<<<<<<<<<<<< Paths for app Artwork

urlpatterns = [
    path('', views.user_artwork, name='artwork'),
    path('', views.get_all_artwork, name='artwork'), 
]