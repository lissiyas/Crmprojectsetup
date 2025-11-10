import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  LogIn, 
  LayoutDashboard, 
  Users, 
  Mail, 
  MessageSquare, 
  CreditCard, 
  Settings,
  ArrowRight,
  Inbox,
  BarChart3,
  FileText,
  TrendingUp,
  Zap,
  Gift,
  UserPlus,
  Plus,
  Eye,
  Send,
  Calendar,
  DollarSign
} from 'lucide-react';

export function UXDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-2">CRM Pro - UX Flow Diagram</h1>
          <p className="text-gray-600">Complete user experience map and navigation structure</p>
        </div>

        {/* Login Entry Point */}
        <div className="flex justify-center mb-8">
          <Card className="w-80 bg-blue-600 text-white border-blue-700">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/20 rounded-lg">
                  <LogIn className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Login Page</h3>
              <p className="text-sm text-blue-100">Entry point - Authentication</p>
              <div className="mt-4 text-xs text-blue-100">
                Email & Password
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mb-8">
          <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
        </div>

        {/* Main Dashboard Layout */}
        <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <LayoutDashboard className="w-6 h-6" />
              Main Dashboard Layout
            </CardTitle>
            <p className="text-center text-purple-100 text-sm">Sidebar navigation + Main content area</p>
          </CardHeader>
        </Card>

        <div className="flex justify-center mb-4">
          <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
        </div>

        {/* Main Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard Home */}
          <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-green-600" />
                Dashboard Home
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Stats Cards</div>
                    <div className="text-xs text-gray-500">Customers, Emails, Revenue, Growth</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Recent Activity</div>
                    <div className="text-xs text-gray-500">Timeline of latest actions</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customers Page */}
          <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Customers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Eye className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Customer Table</div>
                    <div className="text-xs text-gray-500">Name, company, contact, status, value</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Plus className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Add Customer Dialog</div>
                    <div className="text-xs text-gray-500">Name, email, phone, company</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Search & Filter</div>
                    <div className="text-xs text-gray-500">Real-time search</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Page - Complex */}
          <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow lg:col-span-1">
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                Email & Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <Badge variant="secondary" className="w-full justify-start">
                  <Inbox className="w-3 h-3 mr-2" />
                  Inbox Tab
                </Badge>
                <div className="pl-6 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Folders (Inbox, Starred, Sent, Archive, Trash)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Email list & details
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Compose dialog
                  </div>
                </div>

                <Badge variant="secondary" className="w-full justify-start">
                  <BarChart3 className="w-3 h-3 mr-2" />
                  Campaigns Tab
                </Badge>
                <div className="pl-6 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Zap className="w-3 h-3 text-blue-500" />
                    Follow-up Campaigns
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Gift className="w-3 h-3 text-purple-500" />
                    Promotional Campaigns
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Users className="w-3 h-3 text-green-500" />
                    Group/Newsletter
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <FileText className="w-3 h-3 text-orange-500" />
                    Custom Campaigns
                  </div>
                </div>

                <Badge variant="secondary" className="w-full justify-start">
                  <FileText className="w-3 h-3 mr-2" />
                  Templates Tab
                </Badge>
                <div className="pl-6 space-y-1 text-xs text-gray-600">
                  <div>Pre-built email templates</div>
                  <div>Create new template</div>
                </div>

                <Badge variant="secondary" className="w-full justify-start">
                  <TrendingUp className="w-3 h-3 mr-2" />
                  Analytics Tab
                </Badge>
                <div className="pl-6 space-y-1 text-xs text-gray-600">
                  <div>Campaign performance</div>
                  <div>Open/click rates</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Page */}
          <Card className="border-2 border-yellow-200 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-yellow-600" />
                Chat
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Contact List</div>
                    <div className="text-xs text-gray-500">Online status, unread badges</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Chat Window</div>
                    <div className="text-xs text-gray-500">Real-time messaging interface</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Send className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Message Input</div>
                    <div className="text-xs text-gray-500">Send messages</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Page */}
          <Card className="border-2 border-orange-200 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-orange-50">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-orange-600" />
                Billing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Revenue Stats</div>
                    <div className="text-xs text-gray-500">Total, pending, subscriptions</div>
                  </div>
                </div>
                <Badge variant="secondary" className="w-full justify-start text-xs">
                  Invoices Tab
                </Badge>
                <div className="pl-6 space-y-1 text-xs text-gray-600">
                  <div>Invoice table</div>
                  <div>Create invoice dialog</div>
                  <div>View/download actions</div>
                </div>
                <Badge variant="secondary" className="w-full justify-start text-xs">
                  Subscriptions Tab
                </Badge>
                <div className="pl-6 space-y-1 text-xs text-gray-600">
                  <div>Active subscriptions</div>
                  <div>Manage billing plans</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card className="border-2 border-red-200 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-red-600" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Eye className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>User Table</div>
                    <div className="text-xs text-gray-500">Name, email, role, status, activity</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <UserPlus className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>Add User Dialog</div>
                    <div className="text-xs text-gray-500">Name, email, role, password</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="text-sm">
                    <div>User Statistics</div>
                    <div className="text-xs text-gray-500">Total, active, admins</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features Summary */}
        <Card className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <CardHeader>
            <CardTitle className="text-center">System-wide Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="mb-2">Navigation</h4>
                <p className="text-sm text-gray-600">
                  Persistent sidebar with 6 main sections, mobile responsive with hamburger menu
                </p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h4 className="mb-2">Dialogs & Modals</h4>
                <p className="text-sm text-gray-600">
                  Create/edit forms in overlay dialogs, prevents page navigation during data entry
                </p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h4 className="mb-2">Real-time Updates</h4>
                <p className="text-sm text-gray-600">
                  Live search, status badges, activity feeds, and notification counters
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Flow Paths */}
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-center">Common User Flows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="p-3 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    New Customer Onboarding
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1 pl-6">
                    <div>1. Add customer (Customers page)</div>
                    <div>2. Set up follow-up campaign (Email page)</div>
                    <div>3. Send welcome message (Chat page)</div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Email Campaign Launch
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1 pl-6">
                    <div>1. Create template (Templates tab)</div>
                    <div>2. Set up campaign (Campaigns tab)</div>
                    <div>3. Schedule/send (Campaign form)</div>
                    <div>4. Monitor results (Analytics tab)</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-white rounded-lg border-l-4 border-orange-500">
                  <h4 className="mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Invoice Management
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1 pl-6">
                    <div>1. Create invoice (Billing page)</div>
                    <div>2. Send to customer (Email integration)</div>
                    <div>3. Track payment status (Invoices tab)</div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border-l-4 border-red-500">
                  <h4 className="mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Team Management
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1 pl-6">
                    <div>1. Add team member (Users page)</div>
                    <div>2. Assign role & permissions</div>
                    <div>3. Monitor activity & status</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-8">
          <p>CRM Pro - Complete Customer Relationship Management System</p>
          <p className="mt-1">6 Main Pages • 4 Email Sub-sections • Multi-tab Interfaces • Real-time Updates</p>
        </div>
      </div>
    </div>
  );
}
