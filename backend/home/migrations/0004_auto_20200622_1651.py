# Generated by Django 2.2.12 on 2020-06-22 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_customtext_iscelsius'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customtext',
            name='isCelsius',
        ),
        migrations.AddField(
            model_name='customtext',
            name='isSomething',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
