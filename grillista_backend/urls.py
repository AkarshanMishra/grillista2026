from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from core.views import (
    index_view, about_view, menu_view, franchise_view,
    gallery_view, locator_view, terms_view, privacy_view, admin_cms_view,
    submit_lead_api, export_leads_csv_api, menu_api, cities_api,
    team_api, testimonials_api, blogs_api
)

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Page Routes (supporting both clean URLs & .html URLs)
    path('', index_view, name='home'),
    path('index.html', index_view, name='home_html'),
    path('about/', about_view, name='about'),
    path('about.html', about_view, name='about_html'),
    path('menu/', menu_view, name='menu'),
    path('menu.html', menu_view, name='menu_html'),
    path('franchise/', franchise_view, name='franchise'),
    path('franchise.html', franchise_view, name='franchise_html'),
    path('gallery/', gallery_view, name='gallery'),
    path('gallery.html', gallery_view, name='gallery_html'),
    path('locator/', locator_view, name='locator'),
    path('locator.html', locator_view, name='locator_html'),
    path('terms/', terms_view, name='terms'),
    path('terms.html', terms_view, name='terms_html'),
    path('privacy/', privacy_view, name='privacy'),
    path('privacy.html', privacy_view, name='privacy_html'),
    path('admin-cms/', admin_cms_view, name='admin_cms'),
    path('admin.html', admin_cms_view, name='admin_cms_html'),

    # REST API Endpoints for SQLite3
    path('api/leads/submit/', submit_lead_api, name='api_submit_lead'),
    path('api/leads/export-csv/', export_leads_csv_api, name='api_export_leads_csv'),
    path('api/menu/', menu_api, name='api_menu'),
    path('api/cities/', cities_api, name='api_cities'),
    path('api/team/', team_api, name='api_team'),
    path('api/testimonials/', testimonials_api, name='api_testimonials'),
    path('api/blogs/', blogs_api, name='api_blogs'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.BASE_DIR)
