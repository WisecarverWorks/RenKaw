from rest_framework import serializers
from .models import BulletinUpload

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class BulletinUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = BulletinUpload
        fields = ['id', 'date', 'bulletin_id']
        depth = 1
        
        # End 
        
    bulletin_id = serializers.IntegerField(write_only=True)