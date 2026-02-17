# Fixing the Login Credentials Expo Snack

Follow these steps to fix the errors in your Snack at [snack.expo.dev/@codewithash-dev/login-credentials](https://snack.expo.dev/@codewithash-dev/login-credentials).

## 1. Fix App.js (removes react-native-paper & AssetExample errors)

Your current App.js imports `react-native-paper` and `AssetExample` which cause "Unable to resolve module" errors.

**Option A – Use the fixed version (recommended):**
- Open `App.snack-fixed.js` in this folder
- Copy its entire contents
- In Snack, open `App.js` and replace everything with the copied content
- Save

**Option B – Delete App.js (if using expo-router):**
- If your Snack uses expo-router with `app/` folder and tabs, you can delete `App.js` entirely
- Ensure `package.json` has `"main": "expo-router/entry"`

## 2. Fix package.json

In your Snack's `package.json`:
- Set `"main": "expo-router/entry"` (for expo-router projects)
- Update `"expo-router": "~6.0.23"` (recommended for SDK 54)
- Update `"expo-crypto": "~15.0.8"` if Snack warns about it

## 3. Add Supabase environment variables in Snack

1. In Snack, open the **Environment** or **Secrets** panel (usually in the left sidebar or under a settings icon)
2. Add:
   - `EXPO_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon/public key

Without these, the app will show an error when it tries to connect to Supabase.

## 4. index.tsx path check

If `index.tsx` imports from `../../components/CredentialCard` and `../../lib/supabase`, ensure your Snack has:
- `components/CredentialCard.tsx` at the project root
- `lib/supabase.ts` at the project root
- `index.tsx` inside `app/tabs/` (so `../../` resolves to the root)

## Summary

| File        | Fix                                                                 |
|------------|---------------------------------------------------------------------|
| App.js     | Replace with `App.snack-fixed.js` content (or delete if using router) |
| package.json | `main: "expo-router/entry"`, `expo-router: "~6.0.23"`             |
| supabase.ts | Add env vars in Snack Environment panel                            |
