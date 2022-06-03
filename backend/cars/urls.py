from django.urls import path, include
from cars import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_cars), ## Notice these are routing to functions not classes. 
    path('all/', views.get_all_cars),
]
