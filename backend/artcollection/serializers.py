from rest_framework import serializers
from .models import Art 

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = ['time', 'title', 'price']
        depth = 1
        
        # End