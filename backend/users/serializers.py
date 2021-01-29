from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from tweets.serializers import TweetSerializer
from comments.serializers import CommentSerializer
from likes.serializers import LikeSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password', 'image')


class UserSerializered(serializers.ModelSerializer):
    tweets = TweetSerializer(many=True, read_only=True)
    user_comments = CommentSerializer(many=True, read_only=True)
    user_likes = LikeSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'pk', 'email', 'name', 'image',
                  'tweets', 'user_comments', 'user_likes')
