from rest_framework import serializers
from tweets.models import Tweet
from likes.serializers import LikeSerializer
from comments.serializers import CommentSerializer
from favourites.serializers import FavouriteSerializer


class TweetSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_Id.name', read_only=True)
    userImage = serializers.CharField(source='user_Id.image', read_only=True)
    tweet_likes = LikeSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    tweet_Bookmark = FavouriteSerializer(many=True, read_only=True)

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'tweet', "userImage", 'img', 'pk',
                  'user_Id', 'time', 'tweet_likes', 'comments', 'tweet_Bookmark')
