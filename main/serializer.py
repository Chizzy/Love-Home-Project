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

class CartSerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all(), many=True)
    class Meta:
        model = Cart
        fields = ('pk', 'total', 'quantity', 'items')

class UserSerializer(serializers.ModelSerializer):
    cart = serializers.PrimaryKeyRelatedField(queryset=Cart.objects.all())
    class Meta:
        model = User
        fields = ('pk', 'name', 'email', 'password', 'address', 'city', 'state', 'zip_code', 'phone_number', 'billing_address', 'billing_city', 'billing_state', 'billing_zip_code', 'cart')
