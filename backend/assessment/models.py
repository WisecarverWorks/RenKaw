from django.db import models
from authentication.models import User
# Create your models here.


# <============== We are going to create a class called Assessment
class Assessment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    questions = models.CharField(max_length=300)
    date = models.DateField()
    
# <============== Enough for user stories