import graphene
from news import queries, mutations

schema = graphene.Schema(query=queries.Query, mutation=mutations.Mutation)
