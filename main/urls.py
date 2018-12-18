from django.urls import path, include
from rest_framework import routers
from .views import current_user, UserList

from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('cart', views.CartView)
router.register('items', views.ItemView)
router.register('categories', views.CategoryView)


urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('', include(router.urls))
]