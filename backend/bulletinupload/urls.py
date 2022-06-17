from django.urls import path, include
from bulletinupload import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_bulletin),
    path('all/', views.get_all_bulletins),
]

# End 