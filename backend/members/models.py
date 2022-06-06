from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<< Model for Members >>>>>>

class Member(models.Model):
    # user will handle our foriegn key for members 
    # customerid will hold a key
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    memberId = models.IntegerField() # I wnnt this to be a foriegn key
    firstName = models.CharField(max_length=25)
    lastName = models.CharField(max_length=25)
    city = models.CharField(max_length=25)
    street = models.IntegerField()
    zipcode = models.IntegerField()
    state = models.CharField(max_length=25)

# We will add a line of code in settings file to make sure integerfields only have full number values 
