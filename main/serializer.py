from rest_framework import serializers
from .models import User, Cart, Item, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('pk', 'name', 'description')


class ItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category.name')
    class Meta:
        model = Item
        fields = ('pk', 'type', 'name', 'price', 'description', 'image_url', 'category')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'email','name',  'password', 'address', 'city', 'state', 'zip_code', 'phone_number')


class CartSerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all(), many=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), source='user.name')
    class Meta:
        model = Cart
        fields = ('pk', 'total', 'quantity', 'items', 'user')