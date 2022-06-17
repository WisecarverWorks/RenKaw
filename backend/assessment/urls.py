from django.urls import path, include
from assessment import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_assessment),
    path('all/', views.get_all_assessments),
]
# End 