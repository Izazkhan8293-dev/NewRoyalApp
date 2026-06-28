# New Royal Electricals — Mobile App

WebView app for https://newroyalele.vercel.app
Built with Expo + React Native

---

## Prerequisites

Install these on your PC before starting:

1. **Node.js** (v18 or above) → https://nodejs.org
2. **Expo CLI** → run: `npm install -g expo-cli`
3. **EAS CLI** → run: `npm install -g eas-cli`
4. **Expo account** (free) → https://expo.dev/signup

---

## Step 1 — Install dependencies

Open a terminal inside this folder and run:

```
npm install
```

---

## Step 2 — Add your app icon & splash image

Replace these files in the `assets/` folder:

| File | Size | Purpose |
|---|---|---|
| `icon.png` | 1024 × 1024 px | App icon (Play Store + App Store) |
| `adaptive-icon.png` | 1024 × 1024 px | Android adaptive icon foreground |
| `splash.png` | 1284 × 2778 px | Splash/loading screen |
| `favicon.png` | 48 × 48 px | Web favicon (optional) |

**Tip:** Use your New Royal Electricals logo (⚡ yellow bolt on black background) for the icon.
Placeholder PNG files are included — replace them before building.

---

## Step 3 — Test on your phone (optional)

```
npx expo start
```

Scan the QR code with the **Expo Go** app on your phone (available on Play Store / App Store).

---

## Step 4 — Log in to EAS

```
eas login
```

Enter your Expo account credentials.

---

## Step 5 — Build for Android (Play Store)

```
npm run build:android
```

This uploads to Expo's build servers and gives you a download link for the `.aab` file.
Upload this `.aab` file to Google Play Console.

**Google Play Console:** https://play.google.com/console
- One-time fee: $25 USD
- Review time: 1–3 days

---

## Step 6 — Build for iOS (App Store)

```
npm run build:ios
```

You need an **Apple Developer account** ($99 USD/year):
https://developer.apple.com/programs/

The `.ipa` file is submitted via **App Store Connect**:
https://appstoreconnect.apple.com

---

## App Store Listing Checklist

### Google Play Store
- [ ] App name: New Royal Electricals & Hardware
- [ ] Short description (80 chars): Electrical, hardware & paint supplies from Pennadam. Est. 1970.
- [ ] Full description (4000 chars max): See below
- [ ] Category: Shopping
- [ ] Screenshots: 2–8 phone screenshots
- [ ] Feature graphic: 1024 × 500 px banner
- [ ] Content rating: Complete the questionnaire (choose "Everyone")
- [ ] Privacy Policy URL: https://newroyalele.vercel.app/privacy

### Apple App Store
- [ ] App name: New Royal Electricals
- [ ] Subtitle (30 chars): Hardware & Paint Store
- [ ] Category: Shopping
- [ ] Screenshots: 3+ per device size
- [ ] Privacy Policy URL: https://newroyalele.vercel.app/privacy
- [ ] Age rating: 4+

---

## Suggested App Store Description

```
New Royal Electricals & Hardware — Pennadam's most trusted electrical,
hardware, and paint supply store since 1970.

Browse our full catalogue:
• Electrical switches, sockets, MCBs, cables & wiring accessories
• LED lighting — Philips, Crompton, Norwood LED
• Ceiling fans, exhaust fans, water pumps & motors (CRI, Laxmi)
• Birla Opus paints — authorised dealer, all sizes 50ml to 20L
• PVC / UPVC pipes, GI fittings, hardware & tools
• Safety products & PPE

Features:
✓ Full product catalogue with prices
✓ GST-compliant invoicing (GSTIN: 33AACFN4722E1ZR)
✓ UPI, Cash, Card & Net Banking accepted
✓ Contact & directions to our store

📍 92, Main Road, Pennadam – 606 105, Tamil Nadu
📞 94431 82381 / 99448 64347
🕐 Mon–Sat: 8:00 AM – 8:00 PM
```

---

## Project Structure

```
NewRoyalApp/
├── App.js              ← Main app file (WebView)
├── app.json            ← Expo config (name, icons, permissions)
├── eas.json            ← Build config for Play Store / App Store
├── package.json        ← Dependencies
├── babel.config.js     ← Babel config
└── assets/
    ├── icon.png        ← Replace with your logo (1024×1024)
    ├── adaptive-icon.png ← Android adaptive icon (1024×1024)
    ├── splash.png      ← Splash screen (1284×2778)
    └── favicon.png     ← Web favicon (48×48)
```

---

## Support

For Expo/EAS issues: https://docs.expo.dev
For Play Store issues: https://support.google.com/googleplay/android-developer
For App Store issues: https://developer.apple.com/support/

---

Built for New Royal Electricals & Hardware, Pennadam — Est. 1970
