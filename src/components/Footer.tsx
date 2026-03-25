import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Summer Xu</h2>
            <p className="text-gray-400">Digital Marketing & CRM Expert</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
            <a href="mailto:xufanjie95@hotmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              xufanjie95@hotmail.com
            </a>
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2" />
              15021431995
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Summer Xu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
