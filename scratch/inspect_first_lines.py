import os

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\450\content.md"
output_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\inspected_lines.txt"

if os.path.exists(path):
    with open(path, "r", encoding="utf-8") as f:
        lines = [f.readline() for _ in range(100)]
    
    with open(output_path, "w", encoding="utf-8") as f_out:
        f_out.writelines(lines)
    print("Successfully wrote first 100 lines to inspected_lines.txt")
else:
    print(f"File not found at {path}")
