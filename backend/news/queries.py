import graphene
from news.models import Article
from news.types import ArticleType, ArticleListType
from graphene_django_extras import DjangoListObjectField

class Query(graphene.ObjectType):
    list_articles = graphene.List(ArticleType)
    all_articles = DjangoListObjectField(ArticleListType)

    def resolve_list_articles(self, info):
        return Article.objects.all()
