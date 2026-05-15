import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 tracking-wide">BlogApp</h2>
            <p className="mt-2 text-slate-400 text-sm">
              Empowering creators and readers to share ideas, stories, and knowledge with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-slate-200">Quick Links</h3>
            <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/login" className="text-slate-400 hover:text-blue-400 transition-colors">Login</Link>
            <Link to="/register" className="text-slate-400 hover:text-blue-400 transition-colors">Register</Link>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Connect</h3>
            <p className="text-slate-400 text-sm mb-2">Have questions? Reach out to us.</p>
            <a href="mailto:support@blogapp.com" className="text-blue-400 hover:underline">
              support@blogapp.com
            </a>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-500">
          © {currentYear} BlogApp Capstone Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;