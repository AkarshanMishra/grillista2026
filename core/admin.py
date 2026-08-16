from django.contrib import admin
from .models import (
    FranchiseLead, MenuItem, TerritoryCity,
    MediaAsset, ExecutiveTeamMember, Testimonial, BlogInsight
)

@admin.register(FranchiseLead)
class FranchiseLeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'city', 'budget', 'model_type', 'created_at')
    search_fields = ('name', 'email', 'phone', 'city')
    list_filter = ('model_type', 'created_at')

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'description')

@admin.register(TerritoryCity)
class TerritoryCityAdmin(admin.ModelAdmin):
    list_display = ('name', 'state', 'status', 'population')
    list_filter = ('state', 'status')
    search_fields = ('name', 'state')

@admin.register(MediaAsset)
class MediaAssetAdmin(admin.ModelAdmin):
    list_display = ('title', 'media_type', 'category')
    list_filter = ('media_type', 'category')

@admin.register(ExecutiveTeamMember)
class ExecutiveTeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role')

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'net_margin')

@admin.register(BlogInsight)
class BlogInsightAdmin(admin.ModelAdmin):
    list_display = ('title', 'category_tag', 'author', 'created_at')
