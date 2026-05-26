import os
import re
from html.parser import HTMLParser

html_path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\82f72c81-11af-4de5-9072-11d5d5502fdc\.system_generated\steps\101\content.md"
out_path = r"C:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\extracted.txt"

# Try reading with different encodings
content = ""
for encoding in ["utf-8", "utf-16", "utf-16-le", "utf-16-be", "latin-1"]:
    try:
        with open(html_path, "r", encoding=encoding) as f:
            content = f.read()
            if "html" in content.lower():
                break
    except Exception as e:
        continue

if not content:
    print("Could not read the file with any common encoding.")
    exit(1)

# Extract HTML content
if "---" in content:
    html_content = content.split("---", 1)[1]
else:
    html_content = content

class SimpleHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.in_menu = False
        self.menu_depth = 0
        self.in_article = False
        self.current_article = {}
        self.in_heading = False
        self.in_meta = False
        self.heading_tag = None
        self.tag_stack = []
        self.articles = []
        self.menu_items = []
        self.footer_links = []
        self.in_footer = False
        self.in_widget = False
        self.widget_title = ""
        self.in_widget_title = False
        self.menu_stack = []
        self.out_lines = []

    def log(self, text):
        self.out_lines.append(text)

    def handle_starttag(self, tag, attrs):
        self.tag_stack.append(tag)
        attrs_dict = dict(attrs)
        
        if tag == "title":
            self.in_title = True
            
        # Main menu
        if tag == "ul" and attrs_dict.get("id") == "menu-main-menu":
            self.in_menu = True
            self.menu_depth += 1
        elif self.in_menu and tag == "ul":
            self.menu_depth += 1
            
        # Footer
        if tag == "footer":
            self.in_footer = True
            
        # Widgets in footer or sidebars
        if "widget" in attrs_dict.get("class", ""):
            self.in_widget = True
            self.widget_title = ""
            
        if self.in_widget and tag in ["h5", "h4", "h3", "h2"] and ("heading" in attrs_dict.get("class", "") or "widget-title" in attrs_dict.get("class", "")):
            self.in_widget_title = True

        # Articles
        if tag == "article":
            self.in_article = True
            self.current_article = {
                "class": attrs_dict.get("class", ""),
                "title": "",
                "date": "",
                "category": "",
                "img": ""
            }
            
        if self.in_article:
            if tag == "a" and "image-link" in attrs_dict.get("class", ""):
                self.current_article["title_attr"] = attrs_dict.get("title", "")
            if tag == "span" and "img" in attrs_dict.get("class", ""):
                self.current_article["img"] = attrs_dict.get("data-bgsrc") or attrs_dict.get("style", "")
            if tag == "img":
                self.current_article["img"] = attrs_dict.get("src") or attrs_dict.get("data-src")
            if tag in ["h2", "h3", "h4", "h5"] and ("title" in attrs_dict.get("class", "") or "heading" in attrs_dict.get("class", "")):
                self.in_heading = True
                self.heading_tag = tag
            if tag == "span" and "meta-item" in attrs_dict.get("class", ""):
                self.in_meta = True
            if tag == "time":
                self.in_meta = True
                
        # Link in footer widget
        if self.in_widget and tag == "a":
            self.footer_links.append({"widget": self.widget_title, "text": "", "href": attrs_dict.get("href", "")})

    def handle_endtag(self, tag):
        if self.tag_stack:
            self.tag_stack.pop()
            
        if tag == "title":
            self.in_title = False
            
        if tag == "ul" and self.in_menu:
            self.menu_depth -= 1
            if self.menu_depth == 0:
                self.in_menu = False
                
        if tag == "footer":
            self.in_footer = False
            
        if tag == "article" and self.in_article:
            self.in_article = False
            self.articles.append(self.current_article)
            self.current_article = {}
            
        if self.in_heading and tag == self.heading_tag:
            self.in_heading = False
            self.heading_tag = None
            
        if tag in ["span", "time"] and self.in_meta:
            self.in_meta = False
            
        if self.in_widget_title and tag in ["h5", "h4", "h3", "h2"]:
            self.in_widget_title = False
            
        if tag == "div" and self.in_widget:
            # We don't track div nestedness strictly, but this is fine
            pass

    def handle_data(self, data):
        data_clean = data.strip()
        if not data_clean:
            return
            
        if self.in_title:
            self.log(f"Page Title: {data_clean}")
            
        if self.in_menu:
            indent = "  " * (self.menu_depth - 1)
            self.log(f"MENU: {indent}- {data_clean}")
            
        if self.in_widget_title:
            self.widget_title = data_clean
            self.log(f"\nWidget Title: {data_clean}")
            
        if self.in_widget and self.tag_stack and self.tag_stack[-1] == "a" and self.footer_links:
            self.footer_links[-1]["text"] = (self.footer_links[-1]["text"] + " " + data_clean).strip()
            
        if self.in_article:
            if self.in_heading:
                self.current_article["title"] = (self.current_article.get("title", "") + " " + data_clean).strip()
            elif self.in_meta:
                if self.tag_stack and (self.tag_stack[-1] == "time" or "date" in self.tag_stack[-1]):
                    self.current_article["date"] = data_clean
                else:
                    self.current_article["category"] = data_clean

parser = SimpleHTMLParser()
parser.feed(html_content)

parser.log(f"\nTotal articles found: {len(parser.articles)}")
for i, art in enumerate(parser.articles):
    t = art.get("title") or art.get("title_attr") or "No Title"
    c = art.get("category") or "No Category"
    d = art.get("date") or "No Date"
    img = art.get("img") or "No Image"
    parser.log(f"Article {i+1}: [{c}] {t} (Date: {d})")
    parser.log(f"  Img: {img}")

parser.log("\n--- Widget Links Details ---")
for link in parser.footer_links:
    parser.log(f"Widget '{link['widget']}': {link['text']} -> {link['href']}")

# Write output to file in UTF-8
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(parser.out_lines))

print(f"Extraction completed. Wrote results to {out_path}")
