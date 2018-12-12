from rest_framework import serializers
from .models import User, Cart, Item, Category

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password', 'address', 'city', 'state', 'zip_code', 'phone_number', 'billing_address', 'billing_city', 'billing_state', 'billing_zip_code', 'cart')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'type', 'name', 'price', 'description', 'image_url', 'category')

class CategorySerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'items')

class CartSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)
    class Meta:
        model = Cart
        fields = ('id', 'total', 'quantity', 'items')

