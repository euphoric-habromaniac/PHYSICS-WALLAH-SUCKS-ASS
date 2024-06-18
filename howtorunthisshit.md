# Running the "PHYSICS WALLAH SUCKS ASS" Program

## Load the Extension in Brave

1. **Open Extensions Page:**
   - Open Brave and navigate to `brave://extensions/`.

2. **Enable Developer Mode:**
   - Toggle the "Developer mode" switch on the top right of the Extensions page.

3. **Load Unpacked Extension:**
   - Click on "Load unpacked" in the top left corner of the Extensions page.
   - Select the `extension` directory located within your project directory (`C:\Projects\PHYSICS_WALLAH_SUCKS_ASS\extension`).

---

## Start the Flask Server

1. **Open Command Prompt:**
   - Press `Win + R`, type `cmd`, and press Enter to open Command Prompt.

2. **Navigate to Project Directory:**
   - Use the `cd` command to navigate to your project directory where `app.py` is located:
     ```
     cd C:\Projects\PHYSICS_WALLAH_SUCKS_ASS
     ```

3. **Run the Flask Server:**
   - Start the Flask server by executing the following command:
     ```
     python app.py
     ```
   - This will start the server on `http://localhost:5000`.

---

## Test the Setup

1. **Visit `pw.live`:**
   - Open a new tab in Brave and navigate to `pw.live`.

2. **Check Mono Audio Enablement:**
   - Play an audio or video on the `pw.live` site to ensure mono audio is enabled.
   - The extension should automatically enable mono audio when audio is detected.

3. **Navigate to Other Sites:**
   - Visit different websites outside of `pw.live` to verify that the mono audio setting is disabled.
   - The extension should disable mono audio when leaving `pw.live`.

---

## Troubleshooting Tips

- **Console Errors:**
  - Open Brave Developer Tools (`F12` or right-click and select "Inspect") and check the console for any errors related to the extension or content scripts.

- **Flask Server Output:**
  - Monitor the Command Prompt where Flask is running (`python app.py`) for any errors or output related to requests made to the server.

- **Permissions and Manifest:**
  - Ensure that the permissions specified in `manifest.json` are correct and match the required permissions for the extension to function properly.
