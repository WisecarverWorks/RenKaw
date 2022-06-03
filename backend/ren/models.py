# We want to import models from django
from django.db import models
# We want to import User from out authentication app
from authentication.models import User

#<<<<<<<<<<<<<<<<<<<<<<<<< Below this line Model creation begins
# Create your models here.

# We will create a class named Art 
class Art(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    # This is a one to many relationship, A work of art will have one user, but one user can have many works of art. 
    type = models.CharField(max_length=30)
    year = models.IntegerField()
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    # We will need the different types of art, the year it was made, the name and the price of the item. 


# Do we need a class for members? 


