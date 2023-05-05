import graphene
from news.models import Article
from news.types import ArticleType

class Query(graphene.ObjectType):
    all_articles = graphene.List(ArticleType)

    def resolve_all_articles(self, info):
        return Article.objects.all()
