# OneSpxc DartPad — starter

A responsive yellow/black Dart playground UI with editable source, Run, console, and a preview panel.

## Deploy on Vercel
1. Upload these files to a GitHub repository.
2. Import the repository in Vercel.
3. Choose **Other** as framework preset.
4. Leave Build Command and Output Directory empty/default for this static site.
5. Deploy.

## Important technical status
This is a **frontend prototype**, not a full DartPad clone yet. Run parses a small supported subset of source text (`const`/`final`/`var` string values and literal `print()` calls) and updates the mock preview. It does not compile arbitrary Dart or Flutter code.

For a real Flutter live preview, connect a sandboxed backend/build worker with Flutter SDK, dependencies, execution time/memory limits, and safe isolation. A normal static Vercel deployment alone does not compile arbitrary Flutter projects.
