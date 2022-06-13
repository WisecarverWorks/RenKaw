from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ptype = models.CharField(max_length=30)
    title = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.IntegerField()
    