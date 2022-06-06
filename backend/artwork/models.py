from django.db import models
from authentication.models import User
# Create your models here.

# <<<<<< Model for Members >>>>>>

class Artwork(models.Model):
    # user will handle our foriegn key for members 
    # customerid will hold a key
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    artworkId = models.IntegerField()
    artworkTitle = models.CharField(max_length=25)
    artworkStyle = models.CharField(max_length=25)
    artworkAbout = models.CharField(max_length=100)
    artworkPrice = models.IntegerField()
    
# We will add a line of code in settings file to make sure integerfields only have full number values 
