###Steps
    1. Install Tailwind CSS IntelliSense from Extensions
    2. Create new folder and generate package.json
    3. Run "npm install tailwindcss @tailwindcss/cli"
    4. Create "style.css" file and add "@import "tailwindcss"" in it
    5. Run the watch command "npx @tailwindcss/cli -i ./style.css -o ./output.css --watch"
    6. Create HTML files and add <link href = "./output.css" rel = "stylesheet"> in head
