from rest_framework import serializers
from favourites.models import Favourite


class FavouriteSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_Id.name', read_only=True)
    tweet_Contact = serializers.CharField(
        source='tweet_Id.tweet', read_only=True)
    user_Image = serializers.CharField(
        source='user_Id.Image', default='', read_only=True)

    class Meta:
        model = Favourite
        fields = ('id', 'pk', 'tweet_Id', 'user_Id', 'user',
                  'user_Image', 'tweet_Contact')
