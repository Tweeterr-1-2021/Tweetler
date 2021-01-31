from rest_framework import serializers
from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_Id.name', read_only=True)
    tweet = serializers.CharField(source='tweet_Id.tweet', read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'user', 'tweet', 'user_Id',
                  "tweet_Id", 'comment', 'img', 'time')
