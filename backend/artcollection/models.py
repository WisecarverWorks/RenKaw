from django.db import models

# Create your models here.
class Art(models.Model):
   time = models.DateTimeField(_(""), auto_now=False, auto_now_add=False)
   title = models.CharField(max_length=25)
   price = models.SmallIntegerField()

# End 