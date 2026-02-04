const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// Task 1: Toggle theme between "light" and "dark"
settings.theme = (settings.theme === "light") ? "dark" : "light"
console.log(settings)

// Task 2: Turn autoSave to true
settings.autoSave = true
console.log(settings)

// Task 3: Remove the notifications setting
delete settings.notifications
console.log(settings)

// Task 4: Freeze the settings object so it cannot be modified
Object.freeze(settings)
// Test modification (will not work)
settings.language = "fr" 
console.log(settings)