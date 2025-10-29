export default function Footer() {
return (
      <footer className="bg-gray-950 text-white pt-16 pb-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-medium mb-4 underline decoration-1 underline-offset-6">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Documents</a></li>
                <li><a href="#" className="hover:text-white transition">Resources</a></li>
                <li><a href="#" className="hover:text-white transition">Blogs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4  underline decoration-1 underline-offset-6">Social Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>

            <div>
              <img className="w-80 h-40" src="footer_logo.svg" alt="logo" />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Services</a>
            </div>
          </div>
        </div>
      </footer>
  );
}