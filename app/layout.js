export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    )
  }