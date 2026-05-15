import { Link } from "react-router-dom";
import { useAuth } from "../store/authStore"; // Assuming you have this from earlier!

function Home() {
  const user = useAuth((state) => state.currentUser);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-slate-50">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Share Your Voice with <br />
          <span className="text-blue-600 inline-block mt-2">The World</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto mb-10">
          A dynamic platform for readers and writers. Discover trending articles, publish your own stories, and connect with a community of thinkers.
        </p>

        {/* Dynamic Call to Action Buttons */}
        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          {!user ? (
            <>
              <Link 
                to="/register" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
              >
                Get Started for Free
              </Link>
              <Link 
                to="/login" 
                className="bg-white text-slate-700 border border-slate-300 px-8 py-3 rounded-full font-semibold text-lg hover:bg-slate-100 transition shadow-sm"
              >
                Sign In
              </Link>
            </>
          ) : (
            <Link 
              // Directs them to their specific dashboard based on role
              to={user.role === "AUTHOR" ? "/authordashboard" : user.role === "ADMIN" ? "/admindashboard" : "/userdashboard"} 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
            >
              Go to My Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Feature Highlight Section */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Read</h3>
              <p className="text-slate-500">Explore hundreds of articles across various tech and lifestyle categories.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Write</h3>
              <p className="text-slate-500">Use our intuitive author dashboard to draft, edit, and publish your content.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Engage</h3>
              <p className="text-slate-500">Join the conversation by leaving comments and interacting with authors.</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;