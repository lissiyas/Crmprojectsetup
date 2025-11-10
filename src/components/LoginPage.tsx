import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, User, Mail, Lock, Shield, ArrowLeft } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  
  // Signup form state
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [signupErrors, setSignupErrors] = useState<{[key: string]: string}>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };
  
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {[key: string]: string} = {};

    // Validation
    if (!signupData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!signupData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!signupData.role) {
      newErrors.role = 'Please select a role';
    }
    if (!signupData.password) {
      newErrors.password = 'Password is required';
    } else if (signupData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!signupData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setSignupErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Signup successful:', signupData);
      // Auto-login after signup
      onLogin(signupData.email, signupData.password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4">
      <Card className="w-full max-w-md border-purple-100 shadow-xl">
        <CardHeader className="space-y-1 text-center">
          {showSignup && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setShowSignup(false);
                setSignupErrors({});
              }}
              className="absolute left-4 top-4 text-purple-700 hover:text-purple-900 hover:bg-purple-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-purple-900">{showSignup ? 'Create Account' : 'Welcome to CRM Pro'}</CardTitle>
          <CardDescription>
            {showSignup ? 'Sign up to get started' : 'Sign in to your account to continue'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!showSignup ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Sign In
                </Button>
              </form>
              <div className="mt-4 text-center text-sm text-gray-600">
                Demo credentials: any email and password
              </div>
              
              {/* Sign Up Section */}
              <div className="mt-6 pt-6 border-t border-purple-100">
                <p className="text-center text-slate-600 mb-4">Don't have an account?</p>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => setShowSignup(true)}
                >
                  Create New Account
                </Button>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-700">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  {signupErrors.fullName && <p className="text-red-500 text-sm">{signupErrors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-slate-700">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="you@company.com"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  {signupErrors.email && <p className="text-red-500 text-sm">{signupErrors.email}</p>}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700">
                    Company Name <span className="text-slate-400">(optional)</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Acme Inc."
                      value={signupData.company}
                      onChange={(e) => setSignupData({ ...signupData, company: e.target.value })}
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-700">Role</Label>
                  <Select
                    id="role"
                    value={signupData.role}
                    onValueChange={(value) => setSignupData({ ...signupData, role: value })}
                    className="w-full"
                  >
                    <SelectTrigger className="border-purple-200 focus:border-purple-400 focus:ring-purple-400">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                  {signupErrors.role && <p className="text-red-500 text-sm">{signupErrors.role}</p>}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-slate-700">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  {signupErrors.password && <p className="text-red-500 text-sm">{signupErrors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-slate-700">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  {signupErrors.confirmPassword && <p className="text-red-500 text-sm">{signupErrors.confirmPassword}</p>}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={signupData.agreeToTerms}
                    onCheckedChange={(checked) => 
                      setSignupData({ ...signupData, agreeToTerms: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
                    I agree to the{' '}
                    <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {signupErrors.agreeToTerms && <p className="text-red-500 text-sm">{signupErrors.agreeToTerms}</p>}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Create Account
                </Button>
              </form>
              
              {/* Back to Login */}
              <div className="mt-6 pt-6 border-t border-purple-100">
                <p className="text-center text-slate-600 mb-4">Already have an account?</p>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => {
                    setShowSignup(false);
                    setSignupErrors({});
                  }}
                >
                  Back to Sign In
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}