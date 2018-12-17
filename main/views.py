from rest_framework import viewsets
from .serializer import UserSerializer, CategorySerializer, ItemSerializer, CartSerializer
from .models import User, Cart, Item, Category


class UserView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CartView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class ItemView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class CategoryView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Category.objects.all()
    serializer_class = CategorySerializer