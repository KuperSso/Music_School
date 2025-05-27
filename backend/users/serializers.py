from rest_framework import serializers
from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ("phone", "full_name", "email", "password")

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user


class PhoneTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        phone = attrs.get("phone")
        password = attrs.get("password")

        if phone and password:
            try:
                user = User.objects.get(phone=phone)
            except User.DoesNotExist:
                raise AuthenticationFailed("Неверный номер телефона или пароль")

            if not user.check_password(password):
                raise AuthenticationFailed("Неверный номер телефона или пароль")

            data = super().get_token(user)
            return {
                "access": str(data.access_token),
                "refresh": str(data),
            }
        else:
            raise AuthenticationFailed("Телефон и пароль обязательны")
