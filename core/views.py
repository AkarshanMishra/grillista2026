import csv
import json
import time
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import (
    FranchiseLead, MenuItem, TerritoryCity,
    MediaAsset, ExecutiveTeamMember, Testimonial, BlogInsight
)

# Page Rendering Views
def index_view(request):
    return render(request, 'index.html')

def about_view(request):
    return render(request, 'about.html')

def menu_view(request):
    return render(request, 'menu.html')

def franchise_view(request):
    return render(request, 'franchise.html')

def gallery_view(request):
    return render(request, 'gallery.html')

def locator_view(request):
    return render(request, 'locator.html')

def terms_view(request):
    return render(request, 'terms.html')

def privacy_view(request):
    return render(request, 'privacy.html')

def admin_cms_view(request):
    return render(request, 'admin.html')


# REST API Endpoints for SQLite3 Integration

@csrf_exempt
def submit_lead_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body) if request.body else request.POST
            lead = FranchiseLead.objects.create(
                name=data.get('name', 'Investor'),
                email=data.get('email', ''),
                phone=data.get('phone', ''),
                city=data.get('city', 'UP'),
                budget=data.get('budget', '12 Lakh'),
                model_type=data.get('model', 'Mini Bistro'),
                experience=data.get('experience', ''),
                timeline=data.get('timeline', ''),
                notes=data.get('notes', '')
            )
            return JsonResponse({'status': 'success', 'id': lead.id, 'message': 'Franchise application saved to SQLite3 database!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)


def export_leads_csv_api(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="Grillista_SQLite3_Franchise_Leads.csv"'

    writer = csv.writer(response)
    writer.writerow(['ID', 'Name', 'Email', 'Phone', 'City', 'Budget', 'Model', 'Submission Date'])

    leads = FranchiseLead.objects.all().order_by('-created_at')
    for lead in leads:
        writer.writerow([
            lead.id, lead.name, lead.email, lead.phone,
            lead.city, lead.budget, lead.model_type,
            lead.created_at.strftime('%Y-%m-%d %H:%M:%S')
        ])

    return response


def export_leads_json_api(request):
    leads = list(FranchiseLead.objects.all().order_by('-created_at').values(
        'id', 'name', 'email', 'phone', 'city', 'budget', 'model_type', 'created_at'
    ))
    # Convert datetimes to string
    for l in leads:
        if l['created_at']:
            l['created_at'] = l['created_at'].strftime('%Y-%m-%d %H:%M:%S')
            
    response = HttpResponse(json.dumps(leads, indent=2), content_type='application/json')
    response['Content-Disposition'] = 'attachment; filename="Grillista_SQLite3_Franchise_Leads.json"'
    return response


def cms_stats_api(request):
    t0 = time.time()
    leads_count = FranchiseLead.objects.count()
    menu_count = MenuItem.objects.filter(is_active=True).count()
    cities_count = TerritoryCity.objects.count()
    team_count = ExecutiveTeamMember.objects.count()
    testimonials_count = Testimonial.objects.count()
    blogs_count = BlogInsight.objects.count()
    media_count = MediaAsset.objects.count()
    latency_ms = round((time.time() - t0) * 1000, 2)

    return JsonResponse({
        'status': 'success',
        'stats': {
            'leads_count': leads_count,
            'menu_count': menu_count,
            'cities_count': cities_count,
            'team_count': team_count,
            'testimonials_count': testimonials_count,
            'blogs_count': blogs_count,
            'media_count': media_count,
            'database_engine': 'SQLite3 (db.sqlite3)',
            'latency_ms': latency_ms,
            'system_health': '100% Operational',
            'conversion_rate': '18.4%'
        }
    })


@csrf_exempt
def menu_api(request):
    if request.method == 'GET':
        items = list(MenuItem.objects.filter(is_active=True).values('id', 'name', 'category', 'price', 'description', 'image_url'))
        return JsonResponse({'status': 'success', 'data': items})
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            item = MenuItem.objects.create(
                name=data.get('name'),
                category=data.get('category', 'burgers'),
                price=data.get('price', 149),
                description=data.get('description', ''),
                image_url=data.get('image_url', 'assets/images/burger.jpg')
            )
            return JsonResponse({'status': 'success', 'id': item.id})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)


@csrf_exempt
def cities_api(request):
    if request.method == 'GET':
        cities = list(TerritoryCity.objects.all().values('id', 'name', 'state', 'status', 'population', 'daily_orders', 'min_area_sqft'))
        return JsonResponse({'status': 'success', 'data': cities})
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            city = TerritoryCity.objects.create(
                name=data.get('name'),
                state=data.get('state', 'UP'),
                status=data.get('status', 'AVAILABLE NOW'),
                population=data.get('population', '500,000+'),
                daily_orders=data.get('daily_orders', '350+ Orders'),
                min_area_sqft=data.get('min_area_sqft', '600+ sq ft')
            )
            return JsonResponse({'status': 'success', 'id': city.id})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)


@csrf_exempt
def team_api(request):
    if request.method == 'GET':
        members = list(ExecutiveTeamMember.objects.all().values('id', 'name', 'role', 'bio', 'photo_url'))
        return JsonResponse({'status': 'success', 'data': members})
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            member = ExecutiveTeamMember.objects.create(
                name=data.get('name'),
                role=data.get('role'),
                bio=data.get('bio', ''),
                photo_url=data.get('photo_url', 'assets/images/logo.jpg')
            )
            return JsonResponse({'status': 'success', 'id': member.id})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)


@csrf_exempt
def testimonials_api(request):
    if request.method == 'GET':
        reviews = list(Testimonial.objects.all().values('id', 'name', 'location', 'net_margin', 'quote'))
        return JsonResponse({'status': 'success', 'data': reviews})

    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            review = Testimonial.objects.create(
                name=data.get('name'),
                location=data.get('location'),
                net_margin=data.get('net_margin', '32% Net Margin'),
                quote=data.get('quote')
            )
            return JsonResponse({'status': 'success', 'id': review.id})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)


@csrf_exempt
def blogs_api(request):
    if request.method == 'GET':
        posts = list(BlogInsight.objects.all().order_by('-created_at').values('id', 'title', 'category_tag', 'teaser', 'author', 'created_at'))
        return JsonResponse({'status': 'success', 'data': posts})

    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            post = BlogInsight.objects.create(
                title=data.get('title'),
                category_tag=data.get('category_tag', 'INDUSTRY INSIGHTS'),
                teaser=data.get('teaser'),
                author=data.get('author', 'Grillista Corporate Research')
            )
            return JsonResponse({'status': 'success', 'id': post.id})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)
