from rest_framework import serializers
from .models import User, Cart, Item, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('fk', 'name', 'description')


class ItemSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = Item
        fields = ('fk', 'type', 'name', 'price', 'description', 'image_url', 'category')


class CartSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)
    class Meta:
        model = Cart
        fields = ('fk', 'total', 'quantity', 'items')

class UserSerializer(serializers.ModelSerializer):
    cart = CartSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('fk', 'name', 'email', 'password', 'address', 'city', 'state', 'zip_code', 'phone_number', 'billing_address', 'billing_city', 'billing_state', 'billing_zip_code', 'cart')
