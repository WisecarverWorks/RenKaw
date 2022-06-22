from rest_framework import serializers
from .models import Art 

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = ['time', 'title', 'price', 'art_id']
        depth = 1
        
        # End
    art_id = serializers.IntegerField(write_only=True)