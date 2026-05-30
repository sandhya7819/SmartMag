import os

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"
print("Exists:", os.path.exists(path))
if os.path.exists(path):
    print("Size:", os.path.getsize(path))
else:
    # Let's list the parent folders to find where it is
    parent = os.path.dirname(os.path.dirname(os.path.dirname(path)))
    print("Parent folder contents:", os.listdir(parent) if os.path.exists(parent) else "no parent")
