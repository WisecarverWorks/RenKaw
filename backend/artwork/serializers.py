from rest_framework import serializers
from .models import Artwork

#<<<<<<<< Imports 

# determine serializer class model

class ArtworkSerializer(serializers.ModelSerializer):

    class Meta:
        model: Artwork
        fields = ['id', 'user_id','artwork_id','style','about','price']
        depth = 1 # This satisfies our artwork table. We will need to fetch info from here 