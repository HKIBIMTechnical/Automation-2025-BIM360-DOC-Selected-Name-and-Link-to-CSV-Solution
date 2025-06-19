# Automation-2025-BIM360-DOC-Selected-Name-and-Link-to-CSV-Solution

## Author

Andy Zhu

## Overview

This script automates the extraction of document names and their corresponding share links from the BIM 360 Docs web interface. It collects the names and links displayed in the share modal and exports them as a CSV file for easy reference and sharing.

## How It Works

- The script locates the share link modal in the BIM 360 Docs web page.
- It extracts the document names and their share links from the modal.
- The extracted data is formatted as CSV.
- A download of the CSV file is automatically triggered in your browser.

## Usage Instructions

1. **Open the Share Link Modal**
   - In BIM 360 Docs, open the modal that displays the share links for documents (usually by clicking a "Share" button).
2. **Run the Script**
   - Open your browser's Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
   - Go to the `Console` tab.
   - Copy and paste the contents of `Automation-2025-BIM360-DOC-Selected-Name-and-Link-to-CSV-Solution.js` into the console and press `Enter`.
3. **Download the CSV**
   - The script will automatically generate and download a `data.csv` file containing the document names and their share links.

## File Structure

- `Automation-2025-BIM360-DOC-Selected-Name-and-Link-to-CSV-Solution.js`: The main script to be run in the browser console.

## Notes

- This script is intended for use in the browser console on the BIM 360 Docs web application.
- Make sure the share link modal is open and visible before running the script.
- The script does not require any external dependencies.

## Disclaimer

This script is provided as-is for automation purposes. Use it responsibly and ensure compliance with your organization's data policies.
