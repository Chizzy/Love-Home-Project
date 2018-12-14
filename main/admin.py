from django.contrib import admin
from .models import Category, Item, Cart, User

admin.site.register([Category, Item, Cart, User])
