from django.urls import path, include
from artcollection import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_art),
    path('all/', views.get_all_art),
]

# End 