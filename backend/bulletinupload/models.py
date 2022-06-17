from django.db import models
from authentication.models import User
# Create your models here.


# <============== We are going to create a class called BulletinUpload
class BulletinUpload(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    
# <============== Enough for user stories