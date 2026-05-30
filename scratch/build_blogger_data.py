import json
import re

json_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\blogger_parsed_posts.json"
ts_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\lib\bloggerData.ts"

with open(json_path, "r", encoding="utf-8") as f:
    posts = json.load(f)

def clean_str(s):
    if not s:
        return ""
    # Replace smart quotes and apostrophes
    s = s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    # Replace unicode entities
    s = s.replace("&amp;", "&").replace("&#8217;", "'").replace("&#8211;", "-").replace("&#038;", "&")
    # Normalize multiple spaces
    s = re.sub(r'\s+', ' ', s)
    return s.strip().lower()

# Help find posts by prefix or title matches
def find_post(title_partial):
    target = clean_str(title_partial)
    for p in posts:
        p_title = clean_str(p["title"])
        if target in p_title or p_title in target:
            # Clean up escape characters or smart quotes
            p_copy = dict(p)
            p_copy["url"] = "/blogger"
            # Normalize title inside post
            p_copy["title"] = p_copy["title"].replace("&#8217;", "'").replace("&#8211;", "–").replace("&#038;", "&").replace("&amp;", "&")
            return p_copy
    print(f"WARNING: Post not found for '{title_partial}'")
    return None

def find_posts(titles_list):
    res = []
    for t in titles_list:
        found = find_post(t)
        if found:
            res.append(found)
    return res

# Define categories
top_bar_titles = [
    "DMS Reveals Key MENA Travel Trends Post-Covid",
    "Veterinarian Reveals the Five Dog Breeds He'd Never Choose",
    "A Healthy Road to Weight Loss: The Most Effective Diet for You",
    "T-Mobile Seeks Early Access to 2.5 GHz from Auction 108"
]

hero_title = "Courts Have Blocked a Number of The Anti-LGBTQ Laws"

hero_grid_titles = [
    "Chinese Mobile Phone Industry to Gain New Market Share",
    "These Latest Demonstrations are Different",
    "No More Compulsory Fine for Not Wearing Masks in Public",
    "List of Celebrities Taking Part in 2023 Line-up",
    "Study Tracks New Source for Radio Emissions from Black Hole Core"
]

trending_titles = [
    "Review: Effects of Online Relationships Culture",
    "Is a 'Soft Launch' Right for Your Relationship?",
    "Is Adopting a Raw Food Diet Good For You?"
]

fitness_titles = [
    "Exercise, Dieting and Other Weight Loss Myths Debunked by Fitness Expert",
    "Is Breakfast the Best Time of the Day to Eat a Big Meal",
    "5 Tips to Prioritize Exercise in a Busy Schedule",
    "How to Improve Heart Health: Diet, Vitamins, Exercise, and More"
]

celebrity_title = "Daring Looks Celebrities Wore to Paris Fashion Week this Year"

celebrity_grid_titles = [
    "Paris Fashion Week: The Contemporary Shopping in Accra",
    "Dior's Summer 2023 Collection Brings 16th Century",
    "Review: Vogue's Fashion Week Show this Year"
]

relationships_titles = [
    "Emotional Infidelity: The Flirtation Undermines Couples",
    "Review: The Best Online Flower Delivery Service",
    "Reasons You Sabotage Intimate Relationships",
    "Reasons for Arguments in a Relationship",
    "Relationships: A Marriage Counsellor's Advice for a Happy Marriage",
    "Tips to Manage Relationship in the Modern Era of Dating",
    "Dos and Don'ts of a Healthy Relationship"
]

food_title = "Mediterranean Diet 101: Food List, Health Benefits & Meal Plan"

food_grid_titles = [
    "Why You Should Not Over-Cook Frozen Food",
    "10 Foods That can Work Wonders for Your Liver",
    "Study looks at why late-night eating increases obesity risk",
    "How to Choose Healthy Foods as You Age"
]

finance_title = "Bitcoin, Ethereum Escape Broader Market Slide"

finance_grid_titles = [
    "Elon Musk Appoints Airbnb Co-Founder to Tesla's Board",
    "HSBC Explores $9bn Sale of Canadian Business",
    "Bitcoin in Crosshairs as EU Goes After Non-Green Crypto",
    "EU Officials Warned of Risk Over Issuing Financial Warning"
]

pets_title = "Considering Adopting a Dog? Here's How Much Dog Owners Spend on Pet Care"

pets_grid_titles = [
    "Is Pet Insurance Worth It? What to Consider Before You Buy",
    "Pet care: Tips to Take Care of Your Dog's Feet",
    "Petco Unwraps One-Stop Shop to Help Pets and Pet",
    "Pet Care: Tips to Take Care of Your Cat's eyes",
    "Tips to Take Care of Larger Breeds of Dogs",
    "Simple Ways to Reduce Pet Care Expenses and Save Money",
    "Pet Care Tips: Toxic Foods to Avoid Feeding Your Dog",
    "Pet Care Tips: Protect Your Dog from Worms",
    "5 Grooming Tools a Dog Parent Must Have",
    "Develop a Relationship with Your Pet Bird"
]

culture_title = "Artist Resigns from Project Amid Claims of Cultural Appropriation"

culture_grid_titles = [
    "Where to Travel for Art & Culture 2023",
    "An Amazing Culture-Filled Day Awaits at Sharjah",
    "Phoenix Fall Festivals 2023"
]

decor_title = "23 Fall Home Décor Finds Under $50 to Bring Autumn into Your Home"

decor_grid_titles = [
    "Study Room Décor Ideas That Will Set the Mood for Focused Studies",
    "How to Use Vintage Elements In Your Home",
    "Home Décor Tips to Champion Contemporary Interiors"
]

travel_title = "Catch Last Of The Summer Sun On Idyllic Greek Island Santorini This Year"

travel_grid_titles = [
    "Know More About The Travel and Tourism Industry",
    "EU flights are 25% Up on Pre-COVID Levels",
    "Trends in Tourism Amid Travel Rebound Worldwide",
    "Singapore Has Been Ranked as the Fifth-Richest City"
]

whats_hot_titles = [
    "Bitcoin, Ethereum Escape Broader Market Slide",
    "Elon Musk Appoints Airbnb Co-Founder to Tesla's Board",
    "HSBC Explores $9bn Sale of Canadian Business"
]

our_picks_titles = [
    "DMS Reveals Key MENA Travel Trends Post-Covid",
    "Veterinarian Reveals the Five Dog Breeds He'd Never Choose",
    "A Healthy Road to Weight Loss: The Most Effective Diet for You"
]

# Mega menu
mega_menu_fitness = [
    "Exercise, Dieting and Other Weight Loss Myths Debunked by Fitness Expert",
    "Is Breakfast the Best Time of the Day to Eat a Big Meal",
    "5 Tips to Prioritize Exercise in a Busy Schedule",
    "How to Improve Heart Health: Diet, Vitamins, Exercise, and More"
]

mega_menu_finance = [
    "Bitcoin, Ethereum Escape Broader Market Slide",
    "Elon Musk Appoints Airbnb Co-Founder to Tesla's Board",
    "HSBC Explores $9bn Sale of Canadian Business",
    "Bitcoin in Crosshairs as EU Goes After Non-Green Crypto"
]

mega_menu_culture = [
    "Artist Resigns from Project Amid Claims of Cultural Appropriation",
    "Where to Travel for Art & Culture 2023",
    "An Amazing Culture-Filled Day Awaits at Sharjah",
    "Phoenix Fall Festivals 2023"
]

# Compile data
data = {
    "horizontalTopBarPosts": find_posts(top_bar_titles),
    "heroPost": find_post(hero_title),
    "heroGridPosts": find_posts(hero_grid_titles),
    "trendingPosts": find_posts(trending_titles),
    "fitnessPosts": find_posts(fitness_titles),
    "celebrityPost": find_post(celebrity_title),
    "celebrityGridPosts": find_posts(celebrity_grid_titles),
    "relationshipsPosts": find_posts(relationships_titles),
    "foodPost": find_post(food_title),
    "foodGridPosts": find_posts(food_grid_titles),
    "financePost": find_post(finance_title),
    "financeGridPosts": find_posts(finance_grid_titles),
    "petsPost": find_post(pets_title),
    "petsGridPosts": find_posts(pets_grid_titles),
    "culturePost": find_post(culture_title),
    "cultureGridPosts": find_posts(culture_grid_titles),
    "decorPost": find_post(decor_title),
    "decorGridPosts": find_posts(decor_grid_titles),
    "travelPost": find_post(travel_title),
    "travelGridPosts": find_posts(travel_grid_titles),
    "whatsHotPosts": find_posts(whats_hot_titles),
    "ourPicksPosts": find_posts(our_picks_titles),
    "megaMenuHealthFitness": find_posts(mega_menu_fitness),
    "megaMenuHealthFinance": find_posts(mega_menu_finance),
    "megaMenuHealthCulture": find_posts(mega_menu_culture)
}

# Add some category labels to data if missing
for k, val in data.items():
    if isinstance(val, list):
        for item in val:
            if not item.get("cat"):
                if "fitness" in k.lower(): item["cat"] = "Fitness"
                elif "finance" in k.lower(): item["cat"] = "Finance"
                elif "culture" in k.lower(): item["cat"] = "Culture"
                elif "decor" in k.lower(): item["cat"] = "Home Décor"
                elif "travel" in k.lower(): item["cat"] = "Travel"
                elif "food" in k.lower(): item["cat"] = "Food"
                elif "pets" in k.lower(): item["cat"] = "Pets & Care"
                elif "relationship" in k.lower(): item["cat"] = "Relationships"
                elif "celebrity" in k.lower(): item["cat"] = "Celebrity"
                else: item["cat"] = "General"
    elif isinstance(val, dict):
        if not val.get("cat"):
            if "fitness" in k.lower(): val["cat"] = "Fitness"
            elif "finance" in k.lower(): val["cat"] = "Finance"
            elif "culture" in k.lower(): val["cat"] = "Culture"
            elif "decor" in k.lower(): val["cat"] = "Home Décor"
            elif "travel" in k.lower(): val["cat"] = "Travel"
            elif "food" in k.lower(): val["cat"] = "Food"
            elif "pets" in k.lower(): val["cat"] = "Pets & Care"
            elif "relationship" in k.lower(): val["cat"] = "Relationships"
            elif "celebrity" in k.lower(): val["cat"] = "Celebrity"
            else: val["cat"] = "General"

# Write out the typescript file
output_str = """export interface Post {
  title: string;
  url: string;
  img: string;
  date: string;
  author?: string;
  cat?: string;
  excerpt?: string;
  isVideo?: boolean;
  isAudio?: boolean;
  isGallery?: boolean;
  rating?: string;
  views?: string;
}
"""

for key, val in data.items():
    if isinstance(val, list):
        output_str += f"\nexport const {key}: Post[] = {json.dumps(val, indent=2)};\n"
    else:
        output_str += f"\nexport const {key}: Post = {json.dumps(val, indent=2)};\n"

with open(ts_path, "w", encoding="utf-8") as f:
    f.write(output_str)

print("TypeScript file created successfully.")
