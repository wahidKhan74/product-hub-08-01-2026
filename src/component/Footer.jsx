export default function Footer() {

  const enableFooter = false;
  let footerText = "";
  if (!enableFooter) {
    footerText = <footer className="footer">
        <p>Footer is disabled.</p>
    </footer>;
  } else {
    footerText = <footer className="footer">
        <p>&copy; 2024 Product Hub. All rights reserved.</p>
    </footer>;
  }
  return (
    <>
      {footerText}
    </>
  )
}