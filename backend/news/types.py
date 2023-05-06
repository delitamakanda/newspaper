import graphene
from graphene_django_extras import DjangoSerializerType, DjangoListObjectType, DjangoObjectType
from graphene_django_extras.paginations import LimitOffsetGraphqlPagination
from news.models import Article
from django.contrib.auth.models import User

class UserType(DjangoObjectType):
    class Meta:
        model = User


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article
        filter_fields = {
            'id': ('exact', ),
            'title': ('exact', 'icontains', ),
            'description': ('exact', 'icontains',),
            'category': ('exact', 'icontains',),
            'source': ('exact', 'icontains',),
        }

class ArticleListType(DjangoListObjectType):
    class Meta:
        model = Article
        pagination = LimitOffsetGraphqlPagination(default_limit=5, ordering='-published_at')
        
