import graphene
from graphene_django import DjangoObjectType
from news.models import Article
from django.contrib.auth.models import User

class UserType(DjangoObjectType):
    class Meta:
        model = User


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article
