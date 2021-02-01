from django.shortcuts import render
from rest_framework import generics
from tweets.models import Tweet
from tweets.serializers import TweetSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class TweetList(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


@api_view(['POST'])
def details(request):
    tweeeeeets = Tweet.objects.get(pk=request.data['pk'])
    # console.log('dssss', myaccount)
    serializer = TweetSerializer(tweeeeeets, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def bookmakrs(request):
    bookmakrs = []
    for v in request.data['user_Bookmark']:
        tweet = Tweet.objects.get(id=v['tweet_Id'])
        bookmakrs.append(tweet)
    print(bookmakrs)
    serializer = TweetSerializer(bookmakrs, many=True)
    return Response(serializer.data)
