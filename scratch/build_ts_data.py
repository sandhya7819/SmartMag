import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\6a4d7df6-5304-45ab-9322-eff7dbfbfde4\.system_generated\steps\49\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# First, let's extract ALL article blocks and map their titles to images, categories, dates, excerpts, etc.
article_blocks = re.findall(r'<article\s+class="[^"]+"[^>]*>(.*?)</article>', html, re.DOTALL)
title_to_post = {}

for block in article_blocks:
    title = ""
    # Extract title
    title_m = re.search(r'title="([^"]+)"', block)
    if not title_m:
        title_m = re.search(r'<a href="[^"]+">([^<]+)</a>', block)
    if not title_m:
        title_m = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', block, re.DOTALL)
        
    if title_m:
        title = title_m.group(1)
        title = re.sub(r'<[^<]+?>', '', title).strip()
        title = title.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('’', "'").replace('‘', "'").strip()
    else:
        continue
        
    # Extract image
    img = ""
    img_m = re.search(r'data-bgsrc="([^"]+)"', block)
    if not img_m:
        img_m = re.search(r'src="([^"]+)"', block)
    if img_m:
        img = img_m.group(1)
        
    # Extract category
    cat = ""
    cat_m = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', block)
    if cat_m:
        cat = cat_m.group(1).replace('&amp;', "&").strip()
        
    # Extract date
    date = ""
    date_m = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', block)
    if date_m:
        date = date_m.group(1).strip()
        
    # Extract excerpt
    ex = ""
    ex_m = re.search(r'<div class="excerpt">(.*?)</div>', block, re.DOTALL)
    if ex_m:
        ex = re.sub('<[^<]+?>', '', ex_m.group(1)).replace('’', "'").replace('‘', "'").replace('&hellip;', '...').strip()
        
    # Save (prefer full records)
    key = title.lower()
    if key not in title_to_post or (img and not title_to_post[key]["image"]):
        title_to_post[key] = {
            "title": title,
            "image": img,
            "category": cat,
            "date": date if date else "Jul 18, 2024",
            "excerpt": ex if ex else "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation."
        }

print(f"Total unique posts mapped: {len(title_to_post)}")

sections_mapping = {
    "breakingNews": [
        "Russian Military Objectives and Capacity in Ukraine Through 2024",
        "A 16th Finance Commission Sets Up Advisory Panel",
        "Greece Extends Naval Drills That Deter Russian Oil Transfers",
        "Ukraine After 2 Years of War: How the Conflict Has Affected Civilians",
        "IPO Market Grinds to a Halt Amid Ukraine Invasion Volatility"
    ],
    "heroMain": "High-Profile Chinese Business Delegation Meets Planning Minister to Attract Chinese Investments",
    "heroRight": [
        "Premier Andrew Furey Says Crews are Holding Back Fire Near Labrador City",
        "The John McCain Trap Looms for Nikki Haley in New Hampshire",
        "Ukraine’s Soldier Crisis a Major Challenge for Country’s Defense"
    ],
    "threeColCol1": [
        "Why Taiwan's Earthquake Caused Damage – but Not the Devastation Seen Elsewhere",
        "Thailand Welcomes Tourists with New Vientiane-Bangkok Train Service",
        "Dancing May Be Better than Other Exercise for Improving Mental Health",
        "New Musical Director to Help Keep Saddleworth Singing for Pleasure"
    ],
    "threeColCol2": "EU Economy will Grow and Inflation Decline Further, New Forecast Says",
    "threeColCol3": "Protesters Rally All Over World To Demand Putin End War in Ukraine",
    "handPickedMain": "Review: Why Boris Johnson is Not Expected to Join Campaign Trail in Final Weeks",
    "handPickedList": [
        "Former Monroe County Family Court Judge Michael John has Died", # Note fixed typo in Monroe
        "How GoMining is Revolutionizing Bitcoin Mining Through NFTs",
        "Analysis: How Russia, Ukraine's Militaries Stack Up & Effect on Economy",
        "From LBJ to Biden: How the Economy Performed Under Each President",
        "Study Identifies Atmospheric & Economic Drivers of Global Air Pollution",
        "US Flight Cancellations Fall to Lowest Rate in At Least Decade"
    ],
    "sportsMain": "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
    "sportsGrid": [
        "Can Wisconsin Clinch the Big Ten West this Weekend",
        "100 Women Race in Hamilton to Win Back a World Record for 1-Mile Relay",
        "Royal Challengers Bangalore Announce Faf du Plessis as New Captain",
        "Cycling and Para-Cycling: Where to Position Yourself to Enjoy the Race?",
        "Tokyo Officials Plan For a Safe Olympic Games Without Quarantines"
    ],
    "moreNews": [
        "China's Fosun to Sell German Private Bank to ABN Amro for $730m",
        "Sipp Entering Selected Stock 1000 & Superbike Cup Races",
        "Crude Oil Prices Steady Amid Falling US & China Concerns",
        "Progress Continues On 3D Scanner Rollout At Dublin Airport",
        "China Doesn't Need Expensive Super-Satellites to Track US Warships",
        "How Britain Has Changed 1 Year After Queen Elizabeth's Death",
        "An Influx of Chinese Tourists Is Coming to a Country Near You",
        "Elon Musk's Plan to Put a Million Earthlings on Mars in 20 Years"
    ],
    "featuredVideos": [
        "Bills' Josh Allen Finishes Second in NFL Most Valuable Player Voting",
        "Our Memories of COVID-19 are Biased – and Why it Matters",
        "Daring Looks Celebrities Wore to Paris Fashion Week this Year",
        "Can Cash-Strapped Barcelona Afford to Keep Messi in The Team?"
    ],
    "sponsoredAds": [
        "These Knee Braces Help With Arthritis Pain, Swelling, and Post-Surgery Recovery",
        "How to Keep Your Pets Safe During the Solar Eclipse 2024",
        "World Music Day 2023: What Is It and Why Do We Celebrate It?",
        "Social Anxiety and COVID-19: Signs, Impact, and How to Cope"
    ],
    "businessEconomyMain": "IMF Warns Italy on High Public Debt and Urges Swift Fiscal Reforms",
    "businessEconomyList": [
        "Europe's Economic Pain Drags on With Zero Growth at The End of Last Year",
        "Shell Joins Chase for 'Big Prize' Off South Africa's West Coast",
        "Top ECB Official Sounds Alarm on Rising Risks from Shadow Banking",
        "Qantas Settles Flight Cancellation Lawsuit with $66 Million Penalty",
        "United Economy Vs Basic Economy: What You Need To Know",
        "Implications of San Francisco Govts' Green-Light Nation's First City-Run Public Bank",
        "Shells' Shocked! Ex-Employees Steal Gas Oil, Open Barber Shop & Sushi Joint",
        "Maersk CEO Vincent Clerc Speaks to 'Massive Impact' of the Red Sea Situation",
        "Bitcoin Boom or Crypto Winter? Some New Technical Levels to Watch"
    ],
    "eastAsiaMain": "Bank of China Halts Payments With Sanctioned Russian Lenders – Kommersant",
    "eastAsiaList": [
        "National Panda Day 2024. Why it is celebrated on March 16",
        "The 15 Most Futuristic Cities in China Look Straight Out of Sci-Fi",
        "How Lunar New Year is Being Celebrated by Asian Communities",
        "Fancy Sushi Opens in Berlin at Former Site of The Boss Grill",
        "In a First, Rare Mandarin Ducklings Hatch at Assam State Zoo",
        "China Cracks Down on Attempts to Mark 35 Years Since Tiananmen Massacre",
        "Unveiling Mysteries: 7 Unusual Discoveries About the Great Wall of China"
    ],
    "missedList": [
        "How Retailers, Pharmacy Technology Companies are Redefining the Modern Healthcare",
        "How to feel more confident at social gatherings, Expert Advice",
        "AI Threatens to Push Human Fashion Models Out of the Picture",
        "Watch Weightlifting at Paris 2024 – Follow the Olympic Games"
    ],
    "techMain": "Bill Gates is Going Nuclear: How His Latest Project Could Power U.S. Homes and AI",
    "techList": [
        "T-Mobile Leaves AT&T and Verizon in the Dust in Latest Speed Test",
        "Hologram Breakthrough – New Technology Transforms Ordinary 2D Images",
        "Why Are iPhones More Expensive Than Android Phones?",
        "Meta's VR Game Publisher is Now Called 'Oculus Publishing'",
        "Get this 4K HD Dual-Camera Drone with WiFi for $75",
        "Special Discount: Get 47% off of a Samsung Galaxy Watch 6 for Prime Day",
        "AI Health Coaches Are Coming Soon to a Device Near You",
        "Dawntrail Graphics Settings for Nvidia RTX 2060 and RTX 2060 Super",
        "The Best Camera for Photography 2024: Top Picks for Every Budget"
    ],
    "healthMain": "Mushrooms May Help Regulate Your Blood Sugar, Plus 7 Other Benefits",
    "healthList": [
        "Researchers Discover Enzymes that Open New Path to Universal Donor Blood",
        "This Startup Raised $5.2 Million To Develop Blood Tests For Cancer",
        "DNA From Beethoven's Hair Reveals a Surprise Some 200 Years Later",
        "World's Tiniest Fanged Frogs Lay Their Eggs on Leaves and Guard Them",
        "Wasting Away to Health: Unexpected Benefits of Muscle Loss in Infection",
        "AI-Enhanced Blood Test May Detect Parkinson's Years Before Onset",
        "New Lab Test to Detect Persistent HIV Strains in Africa May Aid Cure"
    ],
    "lifestyleMain": "Dubai-Based Yacht Company is Offering Socially-Distanced Luxury",
    "lifestyleList": [
        "Most Extravagant and Elaborate Concert Stages in Music History",
        "Tourism Board Appoints New Regional Director to Boost Tourism",
        "After Years of Obsessive Learning, Music is Silent – and I'm Happy",
        "Family Relationship: Why Is It Important And How To Build It?",
        "Does Using a Walking Pad Really Do Anything to Your Fitness?"
    ],
    "ukraineMain": "Russian Military Objectives and Capacity in Ukraine Through 2024",
    "ukraineList": [
        "A 16th Finance Commission Sets Up Advisory Panel",
        "Greece Extends Naval Drills That Deter Russian Oil Transfers",
        "Ukraine After 2 Years of War: How the Conflict Has Affected Civilians",
        "IPO Market Grinds to a Halt Amid Ukraine Invasion Volatility",
        "Russia-Ukraine War Putin Condemns Attack on Key Crimean Bridge",
        "52 Nations Condemn Russia's UN 'Multilateral Cooperation' Meeting",
        "Europeans Alarmed by Trump VP Pick Vance's Opposition to Ukraine Aid"
    ],
    "newsRoundup": [
        "Russian Satellite Breaks up in Space, Forces ISS Astronauts to Shelter",
        "Charlotte Hornets Makes Career-high 34 Points in Loss to Utah Jazz",
        "White House Urged to Double Check Microsoft isn't Funneling AI",
        "11 Full-Size Liquids You Can Actually Take Through Airport Security",
        "A Night of Sustainable Seafood Culture from the Japanese Kitchen",
        "Bird Flu Virus Survived Milk Pasteurization In Lab Tests, Finds Study",
        "Novel Blood Test Provides Insights Into the Role of Epstein-Barr Virus",
        "Health Workers Threaten to Quit Over Shortage of Protective Kit"
    ]
}

def find_article(title):
    t_clean = title.strip()
    key = t_clean.lower()
    
    # Try direct key match
    if key in title_to_post:
        return title_to_post[key]
        
    # Try substring match
    for k, post in title_to_post.items():
        if key in k or k in key:
            return post
            
    # Try looking for similar words
    words = key.split()
    if len(words) > 3:
        phrase = " ".join(words[:3])
        for k, post in title_to_post.items():
            if phrase in k:
                return post

    # Fallback
    print("Fallback for:", title)
    return {
        "title": title,
        "image": "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800",
        "category": "News",
        "date": "Jul 18, 2024",
        "excerpt": "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement."
    }

out_data = {}

for key, val in sections_mapping.items():
    if isinstance(val, str):
        out_data[key] = find_article(val)
    elif isinstance(val, list):
        out_data[key] = [find_article(t) for t in val]

# Let's output this into a typescript format
ts_code = "export const NO_BASE = \"https://smartmag.theme-sphere.com/new-one24/wp-content/uploads/sites/56/\";\n"
ts_code += "export const NO_LOGO = `${NO_BASE}2024/07/logo-NewsOne24.png`;\n"
ts_code += "export const NO_LOGO_RETINA = `${NO_BASE}2024/07/logo-NewsOne24@2x.png`;\n"
ts_code += "export const NO_LOGO_MOBILE = `${NO_BASE}2024/09/logo-NewsOne24-1@15x.png`;\n\n"

ts_code += "export type NoPost = {\n  title: string;\n  category?: string;\n  date?: string;\n  image?: string;\n  excerpt?: string;\n  author?: string;\n};\n\n"

for key, data in out_data.items():
    if isinstance(data, dict):
        ts_code += f"export const {key}: NoPost = {json.dumps(data, indent=2)};\n\n"
    elif isinstance(data, list):
        ts_code += f"export const {key}: NoPost[] = {json.dumps(data, indent=2)};\n\n"

output_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\lib\newsOne24Data.ts"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_code)

print("TypeScript file created successfully at:", output_path)
