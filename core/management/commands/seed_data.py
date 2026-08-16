from django.core.management.base import BaseCommand
from core.models import (
    MenuItem, TerritoryCity, MediaAsset,
    ExecutiveTeamMember, Testimonial, BlogInsight
)

class Command(BaseCommand):
    help = 'Seeds SQLite3 database with initial Grillista website content'

    def handle(self, *args, **kwargs):
        self.stdout.write("Seeding Grillista SQLite3 Database...")

        # 1. Seed Menu Items
        if MenuItem.objects.count() == 0:
            MenuItem.objects.create(name='Charcoal Paneer Tikka Burger', category='burgers', price=149, description='100% Pure Veg flame-grilled paneer patty loaded with tandoori mayo.')
            MenuItem.objects.create(name='Smokey Tandoori Paneer Wrap', category='wraps', price=139, description='Toasted tortilla filled with charred paneer cubes and crunchy veggies.')
            MenuItem.objects.create(name='Charred Soya Malai Chaap Bites', category='bites', price=159, description='Creamy malai marinated soya chaap grilled over charcoal flames.')
            MenuItem.objects.create(name='Loaded Peri-Peri Cheese Fries', category='sides', price=119, description='Crispy golden French fries tossed with spicy peri-peri and warm cheese.')
            MenuItem.objects.create(name='Double Thick Hazelnut Shake', category='shakes', price=129, description='Rich thick hazelnut chocolate shake topped with whipped cream.')
            self.stdout.write("-> 5 Veg Menu Items seeded.")

        # 2. Seed Expansion Cities
        if TerritoryCity.objects.count() == 0:
            cities_data = [
                ('Lucknow', 'UP', 'AVAILABLE NOW', '3,500,000+', '650+ Orders', '600+ sq ft'),
                ('Varanasi', 'UP', 'AVAILABLE NOW', '1,400,000+', '500+ Orders', '600+ sq ft'),
                ('Prayagraj', 'UP', 'AVAILABLE NOW', '1,500,000+', '480+ Orders', '600+ sq ft'),
                ('Agra', 'UP', 'AVAILABLE NOW', '1,700,000+', '550+ Orders', '600+ sq ft'),
                ('Gorakhpur', 'UP', 'AVAILABLE NOW', '800,000+', '400+ Orders', '600+ sq ft'),
                ('Bareilly', 'UP', 'AVAILABLE NOW', '900,000+', '380+ Orders', '600+ sq ft'),
                ('Kanpur', 'UP', 'STORES LIVE', '3,200,000+', '1050+ Orders', '700+ sq ft'),
                ('Noida', 'NCR', 'AVAILABLE NOW', '2,800,000+', '700+ Orders', '600+ sq ft'),
            ]
            for c in cities_data:
                TerritoryCity.objects.create(name=c[0], state=c[1], status=c[2], population=c[3], daily_orders=c[4], min_area_sqft=c[5])
            self.stdout.write("-> 8 Expansion Cities seeded.")

        # 3. Seed Executive Team
        if ExecutiveTeamMember.objects.count() == 0:
            ExecutiveTeamMember.objects.create(name='Akarshan Mishra', role='Founder & Managing Director', bio='RK Group Executive Leadership & Brand Visionary.')
            ExecutiveTeamMember.objects.create(name='R.K. Sharma', role='Chairman & Parent Group Head', bio='RK Group of Industries Kanpur Chairman.')
            ExecutiveTeamMember.objects.create(name='Chef Vikrant Singh', role='Culinary & R&D Director', bio='Master Recipe Developer for 100% Pure Veg QSR Formats.')
            self.stdout.write("-> 3 Executive Team Members seeded.")

        # 4. Seed Testimonials
        if Testimonial.objects.count() == 0:
            Testimonial.objects.create(name='Rajesh Verma', location='Barra 2, Kanpur', net_margin='34% Net Margin', quote='Grillista automated kitchens enabled 14-month payback in Kanpur!')
            Testimonial.objects.create(name='Amit Saxena', location='Kakadeo, Kanpur', net_margin='31% Net Margin', quote='Delivering 600+ orders daily to coaching students effortlessly.')
            Testimonial.objects.create(name='Priya Srivastava', location='Lucknow Master Franchise', net_margin='36% Net Margin', quote='Turnkey store fabrication and 100% pure veg positioning was a huge hit.')
            self.stdout.write("-> 3 Franchisee Testimonials seeded.")

        # 5. Seed Blogs
        if BlogInsight.objects.count() == 0:
            BlogInsight.objects.create(title='Why Tier 2 UP Cities are the Next Big Food Franchise Boom', category_tag='INDUSTRY REPORT', teaser='Detailed market analysis of dining out trends in Kanpur, Lucknow, and Varanasi.')
            BlogInsight.objects.create(title='100% Pure Veg Fast-Casual QSR vs Multi-Cuisine Cloud Kitchens', category_tag='MARKET INSIGHT', teaser='Comparative unit economics and consumer trust in pure veg QSR chains.')
            BlogInsight.objects.create(title='Turnkey Store Fabrication: From Site Approval to Store Launch in 30 Days', category_tag='FRANCHISE GUIDE', teaser='Step-by-step breakdown of Grillista FOFO store setup process.')
            self.stdout.write("-> 3 Blog Insights seeded.")

        # 6. Seed Media Assets
        if MediaAsset.objects.count() == 0:
            MediaAsset.objects.create(title='Yellow Booth Dine-In Lounge', media_type='image', url='assets/images/store_bg.jpg', category='interiors')
            MediaAsset.objects.create(title='Signature Gourmet Veg Burger', media_type='image', url='assets/images/burger.jpg', category='food')
            MediaAsset.objects.create(title='Crispy Flame-Seasoned Fries', media_type='image', url='assets/images/french_fries.jpg', category='food')
            MediaAsset.objects.create(title='Gourmet Creamy Italian Pasta', media_type='image', url='assets/images/pasta.jpg', category='food')
            MediaAsset.objects.create(title='Registered Brand Emblem', media_type='image', url='assets/images/logo.jpg', category='brand')
            MediaAsset.objects.create(title='Kakadeo Express Outlet', media_type='image', url='assets/images/store_bg.jpg', category='interiors')
            self.stdout.write("-> 6 Media Assets seeded.")

        self.stdout.write(self.style.SUCCESS("Grillista SQLite3 Database Seeding Complete!"))
