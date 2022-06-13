from django.urls import path, include
from projects import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.project_projects),
    path('', views.get_all_projects),
]
