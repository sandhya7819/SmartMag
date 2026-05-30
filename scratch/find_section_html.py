import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for the second or subsequent occurrences of "DMS Reveals Key MENA Travel Trends Post-Covid"
matches = [m.start() for m in re.finditer("DMS Reveals Key MENA Travel Trends Post-Covid", html)]
print("Found matches at:", matches)
for idx, m in enumerate(matches):
    print(f"\n--- MATCH {idx+1} ---")
    print(html[max(0, m-500):m+500])
