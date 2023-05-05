import graphene
from django.contrib.auth.models import User
from news.models import Article
from news.types import ArticleType, UserType

class CreateArticle(graphene.Mutation):
    author = graphene.Field(UserType)

    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        url = graphene.String(required=True)
        source = graphene.String(required=True)
        image = graphene.String(required=True)
        category = graphene.String(required=True)
        language = graphene.String(required=True)
        country = graphene.String(required=True)
        published_at = graphene.String(required=False)
    
    def mutate(self, info, title, description, url, source, image, category, language, country):
        author = User.objects.get(username=info.context.user.username)
        article = Article(author=author, title=title, description=description, url=url, source=source, image=image, category=category, language=language, country=country)
        article.save()
        return CreateArticle(article=article)

class Mutation(graphene.ObjectType):
    create_article = CreateArticle.Field()
