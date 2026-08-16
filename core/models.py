from django.db import models

class FranchiseLead(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    city = models.CharField(max_length=100, blank=True, null=True)
    budget = models.CharField(max_length=100, blank=True, null=True)
    model_type = models.CharField(max_length=100, blank=True, null=True)
    experience = models.CharField(max_length=100, blank=True, null=True)
    timeline = models.CharField(max_length=100, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.city}) - {self.phone}"


class MenuItem(models.Model):
    CATEGORY_CHOICES = [
        ('burgers', 'Veg Flame Burgers'),
        ('wraps', 'Tandoori Wraps'),
        ('bites', 'Charred Soya Starters'),
        ('sides', 'Loaded Sides'),
        ('shakes', 'Energy Shakes'),
    ]

    name = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='burgers')
    price = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    image_url = models.CharField(max_length=500, default='assets/images/burger.jpg')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} (₹{self.price})"


class TerritoryCity(models.Model):
    STATUS_CHOICES = [
        ('AVAILABLE NOW', 'AVAILABLE NOW'),
        ('TERRITORY BOOKED', 'TERRITORY BOOKED'),
        ('STORES LIVE', 'STORES LIVE'),
    ]

    name = models.CharField(max_length=100)
    state = models.CharField(max_length=50, default='UP')
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='AVAILABLE NOW')
    population = models.CharField(max_length=50, blank=True, null=True)
    daily_orders = models.CharField(max_length=50, blank=True, null=True)
    min_area_sqft = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.state}) - {self.status}"


class MediaAsset(models.Model):
    TYPE_CHOICES = [
        ('image', 'Photo'),
        ('video', 'Video'),
    ]

    title = models.CharField(max_length=200)
    media_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='image')
    url = models.CharField(max_length=500, default='assets/images/store_bg.jpg')
    category = models.CharField(max_length=50, default='interiors')

    def __str__(self):
        return f"{self.title} [{self.category}]"


class ExecutiveTeamMember(models.Model):
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    bio = models.TextField()
    photo_url = models.CharField(max_length=500, default='assets/images/logo.jpg')

    def __str__(self):
        return f"{self.name} - {self.role}"


class Testimonial(models.Model):
    name = models.CharField(max_length=150)
    location = models.CharField(max_length=150)
    net_margin = models.CharField(max_length=50, default='32% Net Margin')
    quote = models.TextField()

    def __str__(self):
        return f"{self.name} ({self.location})"


class BlogInsight(models.Model):
    title = models.CharField(max_length=250)
    category_tag = models.CharField(max_length=100, default='INDUSTRY INSIGHTS')
    teaser = models.TextField()
    author = models.CharField(max_length=100, default='Grillista Corporate Research')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
