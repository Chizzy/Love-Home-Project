from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Item(models.Model):
    type = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    description = models.TextField()
    image_url = models.TextField()
    category = models.ForeignKey(Category,  on_delete=models.CASCADE, blank=True, null=True, related_name='items')

    def __str__(self):
        return self.name


class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)


    def __str__(self):
        return self.name


class Cart(models.Model):
    total = models.IntegerField()
    quantity = models.IntegerField()
    items = models.ManyToManyField(Item, blank=True, null=True, related_name='cart')
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True, related_name='cart')



