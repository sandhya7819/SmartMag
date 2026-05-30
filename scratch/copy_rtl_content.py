import shutil

src = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\195\content.md"
dest = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\rtl_content.md"

shutil.copy(src, dest)
print("Copied successfully to scratch/rtl_content.md")
