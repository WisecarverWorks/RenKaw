from django.db import models

# Create your models here.
class Artwork(models.Model):
    
    types = models.CharField(max_length=30)
    title = models.CharField(max_length=30)
    price = models.IntegerField()