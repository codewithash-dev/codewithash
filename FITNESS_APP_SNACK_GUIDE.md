# Fitness App - Expo Snack Setup Guide

## Step-by-Step Instructions

### Step 1: Open Your Snack
1. Go to: https://snack.expo.dev/@codewithash-dev/fitness-app
2. Make sure you're logged in to save your changes

### Step 2: Create Folder Structure
In the Snack file explorer, create these folders by clicking the "+" icon:
- `app/` (this is required for expo-router)
- `components/`
  - `carousel/`
  - `exercises/`
- `hooks/`
- `services/`
- `utils/`
- `constants/`
- `types/`
- `assets/images/`
  - `bodyParts/`
  - `slides/`

### Step 3: Copy Files

#### A. Copy Component Files
Copy these files from `projects/fitness-app/components/` to Snack:

**components/carousel/ImageSlider.tsx**
- Already exists in your project

**components/exercises/BodyParts.tsx**
- Already exists in your project

**components/exercises/ExerciseCard.tsx**
- Already exists in your project

**components/exercises/ExerciseList.tsx**
- Already exists in your project

#### B. Copy Hook Files
**hooks/useExercises.ts**
- Copy from `projects/fitness-app/hooks/useExercises.ts`

#### C. Copy Service Files
**services/exerciseService.ts**
- Copy from `projects/fitness-app/services/exerciseService.ts`

#### D. Copy Constants Files (CREATE THESE - see below)
You need to create these files in Snack:

**constants/theme.ts** - See file content below
**constants/bodyParts.ts** - See file content below

#### E. Copy Types Files (CREATE THIS - see below)
**types/exercise.ts** - See file content below

#### F. Copy Assets
Upload images from `projects/fitness-app/assets/images/`:
- All files from `bodyParts/` folder
- All files from `slides/` folder

In Snack, click the "+" icon in the assets folder and upload each image.

### Step 4: Create App Entry Point Files

Create these files in the `app/` folder:

**app/_layout.tsx** - See file content below
**app/index.tsx** - See file content below

### Step 5: Update package.json Dependencies

In Snack, click on `package.json` and make sure these dependencies are included:
```json
{
  "dependencies": {
    "@react-native-async-storage/async-storage": "1.23.1",
    "expo": "~52.0.0",
    "expo-asset": "~11.0.5",
    "expo-constants": "~17.0.0",
    "expo-font": "~13.0.4",
    "expo-linear-gradient": "~14.0.0",
    "expo-linking": "~7.0.0",
    "expo-router": "~4.0.0",
    "expo-status-bar": "~2.0.0",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-native": "0.76.9",
    "react-native-gesture-handler": "~2.20.0",
    "react-native-reanimated": "~3.16.0",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "4.4.0",
    "react-native-web": "~0.19.13"
  }
}
```

### Step 6: Add API Keys (Important!)
In `constants/bodyParts.ts`, you'll need to add your RapidAPI key:
- Replace `YOUR_RAPIDAPI_KEY` with your actual RapidAPI key
- Get it from: https://rapidapi.com/

### Step 7: Save and Test
1. Click "Save" in Snack
2. Wait for it to compile
3. Check the preview on the right side
4. If there are errors, check the console

---

## Files You Need to Create in Snack

See the separate files I'll create for you with the exact code to copy.
