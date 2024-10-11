<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React + Vite Getting Started</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }

        h1, h2 {
            color: #333;
        }

        pre {
            background-color: #e2e2e2;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }

        code {
            color: #d6336c;
        }
    </style>
</head>
<body>
    <h1>React + Vite</h1>
    <h2>Getting Started</h2>

    <p>Follow the steps below to set up and start your Vite + React project.</p>

    <h2>Prerequisites</h2>
    <p>Make sure you have Node.js installed. You can verify the installation by running:</p>
    <pre><code>node -v</code></pre>
    <pre><code>npm -v</code></pre>

    <h2>Step 1: Create a New Vite + React Project</h2>
    <p>If you don’t have Vite installed globally, you can install it via npm:</p>
    <pre><code>npm create vite@latest</code></pre>
    <p>You'll be prompted to provide the project name and choose a template. Select <strong>React</strong> from the list:</p>
    <pre><code>
✔ Project name: … my-vite-react-app
✔ Select a framework: › React
✔ Select a variant: › JavaScript or TypeScript
    </code></pre>

    <p>Navigate to the project directory:</p>
    <pre><code>cd my-vite-react-app</code></pre>

    <h2>Step 2: Install Dependencies</h2>
    <p>Once inside the project folder, install the necessary dependencies by running:</p>
    <pre><code>npm install</code></pre>

    <h2>Step 3: Start the Development Server</h2>
    <p>You can now start the development server using:</p>
    <pre><code>npm run dev</code></pre>
    <p>This will start the app at <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a> by default. Open your browser and go to this URL to see the app in action.</p>

    <h2>Step 4: Building for Production</h2>
    <p>To create a production build, run the following command:</p>
    <pre><code>npm run build</code></pre>
    <p>The production-ready files will be generated inside the <code>dist/</code> folder.</p>

    <h2>Step 5: Previewing the Production Build</h2>
    <p>To preview the production build locally:</p>
    <pre><code>npm run preview</code></pre>
    <p>This will start a local static server to preview your app at <a href="http://localhost:4173/" target="_blank">http://localhost:4173/</a>.</p>

    <h2>Custom Configuration (Optional)</h2>
    <p>You can customize Vite by editing the <code>vite.config.js</code> or <code>vite.config.ts</code> file depending on your setup.</p>

    <p>For more configuration options, check the <a href="https://vitejs.dev/config/" target="_blank">Vite Documentation</a>.</p>
</body>
</html>
