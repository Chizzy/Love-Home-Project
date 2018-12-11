from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('cart', views.CartView)
router.register('item', views.ItemView)
router.register('category', views.CategoryView)


urlpatterns = [
    path('', include(router.urls))
]