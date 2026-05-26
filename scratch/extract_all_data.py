import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's extract all articles.
articles = []
article_matches = re.finditer(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', html, re.DOTALL)

for match in article_matches:
    cls = match.group(1)
    content = match.group(2)
    
    # Extract title
    title_match = re.search(r'title="([^"]+)"', content)
    if not title_match:
        title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', content)
    title = title_match.group(1).strip() if title_match else ""
    if not title:
        title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', content, re.DOTALL)
        if title_match:
            title = re.sub('<[^<]+?>', '', title_match.group(1)).strip()
            
    # Clean title entities
    if title:
        title = title.replace('&#8216;', "'").replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&")
        title = title.replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"')
        title = title.replace('\ufffd', "–")
        # Replace the literal replacement character if it exists
        title = re.sub(r'[\uFFFD\u2013\u2014]', '–', title)
        title = re.sub(r'\s+', ' ', title).strip()
    else:
        continue
    
    # Extract category
    cat_match = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', content)
    cat = cat_match.group(1).strip() if cat_match else ""
    if cat:
        cat = cat.replace('&amp;', "&").strip()
    
    # Extract image src/bgsrc
    img_match = re.search(r'data-bgsrc="([^"]+)"', content)
    if not img_match:
        img_match = re.search(r'src="([^"]+)"', content)
    img = img_match.group(1) if img_match else ""
    
    # Extract excerpt
    excerpt_match = re.search(r'<div class="excerpt">(.*?)</div>', content, re.DOTALL)
    if excerpt_match:
        excerpt = re.sub('<[^<]+?>', '', excerpt_match.group(1)).replace('’', "'").replace('‘', "'").replace('&hellip;', '...').strip()
    else:
        excerpt = ""
        
    # Extract date
    date_match = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', content)
    date = date_match.group(1).strip() if date_match else ""
    
    # Review details (rating, percentage)
    rating_match = re.search(r'<div class="review [^>]*>.*?<span>(.*?)</span>', content, re.DOTALL)
    rating = rating_match.group(1).strip() if rating_match else ""
    
    articles.append({
        "class": cls,
        "title": title,
        "category": cat,
        "image": img,
        "date": date,
        "excerpt": excerpt,
        "rating": rating
    })

# Deduplicate
unique_articles = {}
for art in articles:
    key = art["title"].lower()
    if key not in unique_articles or (art["image"] and not unique_articles[key]["image"]):
        unique_articles[key] = art

# We will create groups of articles corresponding to the sections:
sections_data = {
    "heroMain": "Apple's Beats Studio Pro Headphones Listed in FCC Database Ahead of Launch",
    "heroRight": [
        "Teenage Girl Finds Mom's Debit Card, Spends $64,000 on Mobile Games",
        "From Chaucer to Chocolates: How Valentine's Day Gifts have Changed Over the Centuries"
    ],
    "lifestyleMain": "Students Get Ready to Showcase Musical Talent at Singing Festival",
    "lifestyleList": [
        "World Music Day 2023: What Is It and Why Do We Celebrate It?",
        "Top Luxury Ideas for a High-End Home Exterior Decoration",
        "How Does Your Gut Microbiome Impact Your Overall Health?",
        "The Best Gifts for Women to Receive for Mother's Day and Beyond",
        "Family Connections: A Source of Strength in Challenging Times"
    ],
    "lifestyleSidebar": [
        "Greece Tourism Receipts on Record Breaking Track for 2023",
        "UAE's Travel and Tourism Industry Created Thousands of Jobs in 2022",
        "Best Destinations for Adventure Travel Enthusiasts"
    ],
    "editorsPicks": [
        "Yoga Can Fix All Lifestyle Issues: Man Who Quit Job To Teach Yoga",
        "Family Relations Matter More Than Love When it Comes to Health",
        "iPhone 15 Tipped to Steal 4 Key Features of iPhone 14 Pro Models",
        "Dubai Sees Tourism Surge as 'Diversified Approach' Helps it Tap New Markets",
        "Don't Let Pet Allergies Get in the Way of Your Relationships"
    ],
    "travelMain": [
        "6 Dietary Changes That Can Help Prevent The Risk of Cancer",
        "New Program to Move Potential MND Drugs into Clinical Trials Faster"
    ],
    "travelList": [
        "100 Funny Birthday Wishes to Make Them Laugh on Their Big Day",
        "Singer Hints he May Never Go on a Tour as Calls Experience 'Isolating'",
        "Simple Ways to Care for Each Other During the COVID-19",
        "6 Tropical Plants to Get the Jungle Look at Home"
    ],
    "travelSidebarHot": [
        "Top 5 Reasons Why Group Travel Is Beneficial For Young Friends",
        "Maximizing the Benefits of Supplements for an Active Lifestyle",
        "1 in 3 Can't Get Through Meal Without Looking at Phone, Survey Finds",
        "Scientists Think They've Found The Cause of Morning Sickness",
        "Discover Travel Hotspots Worldwide: Most Popular Cities Unveiled",
        "13 Gift Ideas That Your Girlfriend Will Appreciate As Birthday Surprises"
    ],
    "travelSidebarWorkouts": [
        "France Lays Out Strategy to Combat 'Overtourism'",
        "Finland Introduces World's First Phone-Free Island Destination",
        "Strange and Unusual Tourist Destinations Around the World",
        "How the Lack of Russian Tourists has Impacted Countries Across Europe"
    ],
    "latestMain": [
        "Veterinarians Recommend Animal Heat Pads to Save on Energy Bills",
        "Freedom Or Fragility: A Photographer's Techniques Comparison",
        "Best Stock Trading Platforms of June 2023: $0 Commissions and More",
        "Fruits On a Keto Diet: What to Eat and What to Skip on Your Low-Ccarb Diet",
        "Asus to Unveil Autumn 2023 Accessories Collection in International Festival",
        "Jellyfish Stings Are Increasing In Los Cabos – Here Is How You Can Stay Safe"
    ],
    "latestSidebarPicks": [
        "Top 5 Reasons Why Group Travel Is Beneficial For Young Friends",
        "Maximizing the Benefits of Supplements for an Active Lifestyle",
        "1 in 3 Can't Get Through Meal Without Looking at Phone, Survey Finds"
    ],
    "latestSidebarPopular": [
        "UAE's Travel and Tourism Industry Created Thousands of Jobs in 2022",
        "Best Destinations for Adventure Travel Enthusiasts",
        "Students Get Ready to Showcase Musical Talent at Singing Festival"
    ]
}

def lookup(title):
    t_clean = title.lower().strip()
    
    # Try exact match
    if t_clean in unique_articles:
        return unique_articles[t_clean]
        
    # Try normalization-based match (replace all non-alphanumeric with spaces)
    def normalize(s):
        return re.sub(r'[^a-z0-9]', '', s.lower())
        
    norm_clean = normalize(title)
    for k, v in unique_articles.items():
        if normalize(k) == norm_clean:
            return v
            
    # Try substring match on normalized
    for k, v in unique_articles.items():
        if norm_clean in normalize(k) or normalize(k) in norm_clean:
            return v
            
    print(f"Fallback for {title}")
    return {
        "title": title,
        "category": "Lifestyle",
        "image": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800",
        "date": "Jan 12, 2021",
        "excerpt": "To understand the new smart watched and other pro devices of recent focus, we should...",
        "rating": ""
    }

final_data = {}
for k, val in sections_data.items():
    if isinstance(val, list):
        final_data[k] = [lookup(t) for t in val]
    else:
        final_data[k] = lookup(val)

# Save to ts file
ts_content = """// SmartLife Demo Data
export interface SmartLifePost {
  title: string;
  category?: string;
  date?: string;
  image?: string;
  excerpt?: string;
  rating?: string;
}
"""

for k, val in final_data.items():
    if isinstance(val, list):
        ts_content += f"\\nexport const {k}: SmartLifePost[] = {json.dumps(val, indent=2)};\\n"
    else:
        ts_content += f"\\nexport const {k}: SmartLifePost = {json.dumps(val, indent=2)};\\n"

# wait, we should replace escaped double backslashes
ts_content = ts_content.replace('\\n', '\n')

with open("lib/smartLifeData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Created lib/smartLifeData.ts successfully!")
