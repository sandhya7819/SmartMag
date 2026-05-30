import os

files = [
    r"c:\Users\SK-0010\WEBSITE-TEMPLATES\components\NewsMagHeader.tsx",
    r"c:\Users\SK-0010\WEBSITE-TEMPLATES\components\NewsMagFooter.tsx",
    r"c:\Users\SK-0010\WEBSITE-TEMPLATES\app\news-mag\page.tsx"
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace the colors
        updated = content.replace("#007aff", "#2ab391")
        updated = updated.replace("[#007aff]", "[#2ab391]")
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(updated)
            
        print(f"Updated colors in {filepath}")
    else:
        print(f"File not found: {filepath}")
