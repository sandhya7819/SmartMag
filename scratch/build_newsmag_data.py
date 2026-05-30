import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\345\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Parse all articles to build a dictionary of unique posts
articles = []
article_matches = re.finditer(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', html, re.DOTALL)

def clean_html(text):
    text = re.sub('<[^<]+?>', '', text)
    text = text.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"')
    text = text.replace('&#8216;', "'").replace('&#038;', "&").replace('&quot;', '"').strip()
    return text

for match in article_matches:
    cls = match.group(1)
    content = match.group(2)
    
    title_match = re.search(r'title="([^"]+)"', content)
    if not title_match:
        title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', content)
    if not title_match:
        title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', content, re.DOTALL)
        
    title = clean_html(title_match.group(1)) if title_match else ""
    if not title:
        continue
        
    cat_match = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', content)
    cat = clean_html(cat_match.group(1)) if cat_match else ""
    
    img_match = re.search(r'data-bgsrc="([^"]+)"', content)
    if not img_match:
        img_match = re.search(r'src="([^"]+)"', content)
    img = img_match.group(1) if img_match else ""
    
    excerpt_match = re.search(r'<div class="excerpt">(.*?)</div>', content, re.DOTALL)
    if excerpt_match:
        excerpt = clean_html(excerpt_match.group(1)).replace('&hellip;', '...')
    else:
        excerpt = ""
        
    date_match = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', content)
    date = date_match.group(1).strip() if date_match else ""
    
    review_match = re.search(r'<div class="review [^>]*>.*?<span>(.*?)</span>', content, re.DOTALL)
    rating = review_match.group(1).strip() if review_match else ""
    
    # check if points review or percent review
    is_points = "points" in cls or "review-radial" in content
    
    articles.append({
        "title": title,
        "category": cat,
        "image": img,
        "date": date,
        "excerpt": excerpt,
        "rating": rating,
        "is_points": is_points
    })

# Deduplicate
unique_articles = {}
for art in articles:
    key = art["title"].lower().strip()
    if key not in unique_articles or (art["image"] and not unique_articles[key]["image"]):
        unique_articles[key] = art

# Section structure configuration
sections_config = {
    "whatsHot": [
        "COVID Horror: Six Pictures Show Reality of Coronavirus Outbreak",
        "Royal Guards Collapse in a Heat Wave During Military Parade Rehearsal",
        "Scientists Calculated How Much Exercise You Need to 'Offset' a Day of Sitting"
    ],
    "techMegaMenu": [
        "Review: OpenAI Admits GPT-4's 'Lazy' Behavior: What You Need to Know",
        "Review: Xiaomi Redmi 13C: Small Upgrades, Big Value",
        "Tips To Get The Most Out Of Your New Nvidia RTX 2060",
        "Fortnite Refer a Friend 3.0: Play Together & Earn Rewards!",
        "Meta's AlbedoGAN Advances Realistic 3D Face Generation"
    ],
    "lifestyleMegaMenu": [
        "Scientists Calculated How Much Exercise You Need to 'Offset' a Day of Sitting",
        "Try These 8 Unique Ideas To Make Your Girls Trip Fun And Exciting",
        "Travel Demand Fuels a Boom in Asia Pacific — Hotel Rooms",
        "World Music Day 2023: What Is It and Why Do We Celebrate It?",
        "Women`s World Boxing: 4 Women Boxers Reached Semi Finals 2024"
    ],
    "heroMain": "Xiaomi Redmi Note 13 Series Official Teaser; Countdown to the Launch Begins",
    "featuredNow": [
        "Ways by Which Your Partner Impacts Your Life: Therapist Explains",
        "Moody's Cuts China Credit Outlook to Negative on Rising Debt",
        "Mobile Calls Associated With Risk of High Blood Pressure",
        "Average Mobile Data Usage Now Exceeds 10GB Per Month"
    ],
    "latestMain": "COVID Horror: Six Pictures Show Reality of Coronavirus Outbreak",
    "latestList": [
        "Royal Guards Collapse in a Heat Wave During Military Parade Rehearsal",
        "Scientists Calculated How Much Exercise You Need to 'Offset' a Day of Sitting",
        "Review: OpenAI Admits GPT-4's 'Lazy' Behavior: What You Need to Know"
    ],
    "topPosts": [
        "The Best Gifts for Women to Receive for Mother's Day and Beyond",
        "Review: 7 Future Fashion Trends Shaping the Future of Fashion",
        "Xiaomi Phones Can Now Add Extra Storage With Some Magic"
    ],
    "worldNewsMain": "EURO 2024 Conference: Trade Ministers Ready Deal to Lower China Dependence",
    "worldNewsList": [
        "Global Banking Crisis Fears and Slowdown Approaching in 2024",
        "Coalition Calls for “Bolder Action” to Make New Residential Buildings Safer",
        "The 10 Best Formula 1 Drivers Ever: Hamilton, Senna & More",
        "Out in the World: LGBTQ News from Europe and Asia"
    ],
    "worldNewsBottom": "Fashion Face Masks That Have Matching Shirts, Dresses, and Accessories",
    "healthLeftMain": "Jogging for Women: Tips on How to Get Started and Enjoy It",
    "healthLeftList": [
        "We Tested 13 Orange Juices To Find The Best Ones For Breakfast",
        "General Information About At-Home OTC COVID-19 Diagnostic Tests",
        "Why Can't Patients Use Mobile Phones in NHS Hospital Wards?"
    ],
    "healthRightMain": "Why Breakfast is the Most Important Meal of The Day to Shed Extra Kilos?",
    "healthRightList": [
        "A 5-Move Workout to Help You Build Total-Body Strength at Home",
        "Misleading Posts About 'E. Coli Bacteria in Covid Vaccines' Spread Online",
        "Pfizer and BioNTech Face 2023 Revenue Hits Amid Covid Product Write-Offs"
    ],
    "sportsMain": "Lionel Messi Selected as US Soccer Hall of Fame Popular Finalists 2024",
    "sportsList": [
        "Inside the Numbers: The NFLs Have Fared With the No. 2 Draft Pick",
        "Most Likely Big-Name Players to be Moved at the Deadline",
        "Ricardo Ferreira Switches Soccer Allegiance to Canada",
        "MotoAmerica: Marcopolo Entering Selected Stock 1000"
    ],
    "trendingPosts": [
        "Spread of Corona Increases in China, Take a Look at the Report",
        "Called After 13-Year-Old Children Get \"Excessively Drunk\" At Party",
        "The 30 Hottest Models in the World Today (Updated 2023)",
        "Best Stock Trading Platforms of June 2023: $0 Commissions and More",
        "Street Fighter 6 E-Sports Games to Kick Off at Boulevard Riyadh city",
        "Why are Fashion Retailers All Suddenly Selling Perfume?",
        "Double Olympic Champion 'Not Ashamed of Being Different'",
        "How Can Blockchain Technology Revolutionize ATM Security?"
    ],
    "footerPicks": [
        "COVID Horror: Six Pictures Show Reality of Coronavirus Outbreak",
        "Royal Guards Collapse in a Heat Wave During Military Parade Rehearsal",
        "Scientists Calculated How Much Exercise You Need to 'Offset' a Day of Sitting"
    ],
    "footerPopular": [
        "World Music Day 2023: What Is It and Why Do We Celebrate It?",
        "Rumor Roundup: War Games teams, Randy Orton return, CM Punk Speculation",
        "Tokyo Officials Plan For a Safe Olympic Games Without Quarantines"
    ]
}

def lookup(title):
    t_clean = title.lower().strip()
    if t_clean in unique_articles:
        return unique_articles[t_clean]
        
    def normalize(s):
        return re.sub(r'[^a-z0-9]', '', s.lower())
        
    norm_clean = normalize(title)
    for k, v in unique_articles.items():
        if normalize(k) == norm_clean:
            return v
            
    for k, v in unique_articles.items():
        if norm_clean in normalize(k) or normalize(k) in norm_clean:
            return v
            
    # Default fallbacks
    return {
        "title": title,
        "category": "News",
        "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800",
        "date": "Jan 12, 2021",
        "excerpt": "A detailed look at the latest updates and announcements around the world...",
        "rating": "",
        "is_points": False
    }

final_data = {}
for k, val in sections_config.items():
    if isinstance(val, list):
        final_data[k] = [lookup(t) for t in val]
    else:
        final_data[k] = lookup(val)

# Generate TS code
ts_content = """// SmartMag NewsMag Demo Data
export interface NewsMagPost {
  title: string;
  category?: string;
  date?: string;
  image?: string;
  excerpt?: string;
  rating?: string;
  is_points?: boolean;
}

export const socialFollowers = [
  { service: "facebook", label: "Facebook", count: "1.1K", color: "bg-[#3b5998]" },
  { service: "twitter", label: "X (Twitter)", count: "68.9K", color: "bg-[#1da1f2]" },
  { service: "pinterest", label: "Pinterest", count: "10.7K", color: "bg-[#bd081c]" },
  { service: "instagram", label: "Instagram", count: "46.4K", color: "bg-[#c13584]" },
  { service: "youtube", label: "YouTube", count: "105K", color: "bg-[#ff0000]" },
  { service: "whatsapp", label: "WhatsApp", count: "", color: "bg-[#25d366]" }
];
"""

for k, val in final_data.items():
    if isinstance(val, list):
        ts_content += f"\nexport const {k}: NewsMagPost[] = {json.dumps(val, indent=2)};\n"
    else:
        ts_content += f"\nexport const {k}: NewsMagPost = {json.dumps(val, indent=2)};\n"

with open(r"c:\Users\SK-0010\WEBSITE-TEMPLATES\lib\newsmagData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Created lib/newsmagData.ts successfully!")
