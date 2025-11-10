import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { DashboardLayout } from './components/DashboardLayout';
import { UXDiagram } from './components/UXDiagram';
import { Button } from './components/ui/button';
import { LayoutDashboard, FileText } from 'lucide-react';

export default function App() {
  const [showDiagram, setShowDiagram] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    role: string;
  } | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock authentication - in production, this would call your backend
    setCurrentUser({
      name: 'John Doe',
      email: email,
      role: 'Admin'
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  // Show diagram view
  if (showDiagram) {
    return (
      <div className="relative">
        <div className="fixed top-4 right-4 z-50">
          <Button 
            onClick={() => setShowDiagram(false)}
            className="shadow-lg"
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            View Live CRM
          </Button>
        </div>
        <UXDiagram />
      </div>
    );
  }

  // Show actual CRM
  return (
    <div className="relative">
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => setShowDiagram(true)}
          variant="outline"
          className="shadow-lg bg-white"
        >
          <FileText className="w-4 h-4 mr-2" />
          View UX Diagram
        </Button>
      </div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <DashboardLayout user={currentUser!} onLogout={handleLogout} />
      )}
    </div>
  );
}
