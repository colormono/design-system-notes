function Layout({ children }) {
  return (
    <div className="antialiased bg-gray-100 text-gray-900 min-h-screen">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
