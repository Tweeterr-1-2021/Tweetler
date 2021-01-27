from rest_framework import serializers
from tweets.models import Tweet
from likes.serializers import LikeSerializer
from comments.serializers import CommentSerializer


class TweetSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True)
    tweet_likes = LikeSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'tweet', 'img', 'pk',
                  'time', 'tweet_likes', 'comments')
