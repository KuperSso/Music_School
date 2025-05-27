import re
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class CustomUserManager(BaseUserManager):
    def create_user(self, phone, full_name, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(phone=phone, full_name=full_name, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, phone, full_name, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(phone, full_name, email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    phone = models.CharField(max_length=18, unique=True)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=100)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "phone"
    REQUIRED_FIELDS = ["full_name", "email"]

    def __str__(self):
        return self.phone

    def save(self, *args, **kwargs):
        digits = re.sub(r"\D", "", self.phone)
        if len(digits) == 11 and digits.startswith("7"):
            self.phone = (
                f"+7 ({digits[1:4]}) {digits[4:7]}-{digits[7:9]}-{digits[9:11]}"
            )
        super().save(*args, **kwargs)
