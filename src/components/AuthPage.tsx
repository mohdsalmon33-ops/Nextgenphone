import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { Mail, Lock, User as UserIcon, Eye, EyeOff, Smartphone, Tag, Zap, ArrowRight, Check } from 'lucide-react';

export const AuthPage = () => {
  const { login, register, addToast } = useStore();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: 'demo@nexgen.com',
    password: 'demo',
    confirmPassword: '',
    agreed: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Switch to empty for demo if it's signup
  useEffect(() => {
    if (!isLogin) {
      setFormData(prev => ({...prev, email: '', password: ''}));
    } else {
      setFormData(prev => ({...prev, email: 'demo@nexgen.com', password: 'demo'}));
    }
  }, [isLogin]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 0) score += 1; // Weak
    if (pass.length >= 8) score += 1; // Fair
    if ( pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) score += 1; // Strong
    if (score === 3 && /[^A-Za-z0-9]/.test(pass)) score += 1; // Very Strong
    return score; // 0 to 4
  };

  const strengthLabels = ['Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  const strengthColors = ['bg-red-500', 'bg-red-500', 'bg-orange-500', 'bg-green-500', 'bg-blue-500'];
  const passStrength = getPasswordStrength(formData.password);

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8 && !isLogin) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!isLogin) {
      if (!formData.name.trim()) newErrors.name = "Full name is required";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
      if (!formData.agreed) newErrors.agreed = "You must agree to the Terms & Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (showForgot) {
      if (!validateEmail(formData.email)) {
        setErrors({ email: "Valid email required for reset link" });
        return;
      }
      addToast("Password reset link sent to your email", "success");
      setShowForgot(false);
      return;
    }

    if (handleValidate()) {
      if (isLogin) {
        // demo shortcut logic
        if (formData.email === 'demo@nexgen.com' && formData.password === 'demo') {
          login({ name: 'Demo User', email: formData.email });
        } else {
          // Check actual login
          const success = login({ name: '', email: formData.email, password: formData.password });
          if (!success) {
            setErrors({ form: 'Invalid email or password' });
          }
        }
      } else {
        const success = register({ name: formData.name, email: formData.email, password: formData.password });
        if (!success) {
          setErrors({ form: 'Email is already registered' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#02040a] text-white overflow-hidden selection:bg-violet-500/30">
      
      {/* Left Panel (60%) */}
      <div className="hidden lg:flex lg:w-[60%] relative flex-col justify-center p-16 overflow-hidden">
        {/* Background Blobs/Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

        {/* Animated Phone Silhouettes */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-[600px] border-8 border-white/5 rounded-[3rem] shadow-2xl rotate-12 backdrop-blur-sm animate-[pulse_4s_ease-in-out_infinite] pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-white/5 rounded-b-2xl"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="font-heading text-6xl font-extrabold mb-4 tracking-tighter">
            <span className="text-glow">NexGen</span> Phones
          </h1>
          <p className="text-2xl font-medium text-slate-300 mb-12">Your next phone is one tap away</p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-lg">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-violet-400">
                <Smartphone className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold">40+ Premium Phones</span>
            </div>
            <div className="flex items-center space-x-4 text-lg">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-400">
                <Tag className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold">Exclusive Deals</span>
            </div>
            <div className="flex items-center space-x-4 text-lg">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-yellow-400">
                <Zap className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel (40%) */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-6 sm:p-12 relative z-10 glass-light border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        <div className="w-full max-w-md glass p-8 sm:p-10 relative overflow-hidden backdrop-blur-2xl">
          {/* Subtle gradient overlay top edge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500"></div>

          {showForgot ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-heading text-3xl font-bold mb-2">Reset Password</h2>
              <p className="text-sm text-slate-400 mb-8">Enter your email to receive a secure reset link.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all font-medium placeholder:text-slate-500"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.email}</p>}
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="w-full py-4 btn-glow rounded-xl text-lg tracking-wide uppercase font-extrabold flex items-center justify-center">
                    Send Link <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <button type="button" onClick={() => setShowForgot(false)} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                    Back to Login
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex mb-8 pb-4 border-b border-white/10 relative">
                <button 
                  onClick={() => { setIsLogin(true); setErrors({}); }} 
                  className={`flex-1 text-center font-heading font-bold text-lg pb-4 transition-colors ${isLogin ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => { setIsLogin(false); setErrors({}); }} 
                  className={`flex-1 text-center font-heading font-bold text-lg pb-4 transition-colors ${!isLogin ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Sign Up
                </button>
                {/* Active Indicator */}
                <div className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 w-1/2 transition-transform duration-300 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}></div>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-heading text-3xl font-bold mb-8">
                  {isLogin ? 'Welcome Back 👋' : 'Create Account 🚀'}
                </h2>

                {errors.form && <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm font-medium text-center">{errors.form}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name (Sign Up only) */}
                  {!isLogin && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all font-medium placeholder:text-slate-500`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.name}</p>}
                    </div>
                  )}

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all font-medium placeholder:text-slate-500`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`w-full pl-12 pr-12 py-3 bg-white/5 border ${errors.password ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all font-medium placeholder:text-slate-500`}
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                    {errors.password && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.password}</p>}
                  </div>

                  {/* Password Strength Meter (Sign Up only) */}
                  {!isLogin && formData.password.length > 0 && (
                     <div className="space-y-1 mt-1">
                        <div className="flex gap-1 h-1.5 w-full">
                           <div className={`flex-1 rounded-full transition-all duration-300 ${passStrength >= 1 ? strengthColors[passStrength] : 'bg-white/10'}`}></div>
                           <div className={`flex-1 rounded-full transition-all duration-300 ${passStrength >= 2 ? strengthColors[passStrength] : 'bg-white/10'}`}></div>
                           <div className={`flex-1 rounded-full transition-all duration-300 ${passStrength >= 3 ? strengthColors[passStrength] : 'bg-white/10'}`}></div>
                           <div className={`flex-1 rounded-full transition-all duration-300 ${passStrength >= 4 ? strengthColors[passStrength] : 'bg-white/10'}`}></div>
                        </div>
                        <p className={`text-xs font-medium text-right ${strengthColors[passStrength].replace('bg-', 'text-')}`}>
                          {strengthLabels[passStrength]}
                        </p>
                     </div>
                  )}

                  {/* Confirm Password (Sign Up only) */}
                  {!isLogin && (
                    <div className="relative mt-2">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className={`w-full pl-12 pr-12 py-3 bg-white/5 border ${errors.confirmPassword ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all font-medium placeholder:text-slate-500`}
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                      {errors.confirmPassword && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.confirmPassword}</p>}
                    </div>
                  )}

                  {/* Extra Options */}
                  <div className="flex justify-between items-center text-sm pt-2">
                    {isLogin ? (
                      <>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center text-transparent group-hover:border-violet-500 transition-colors">
                            <input type="checkbox" className="hidden" />
                            <Check className="h-3 w-3 hover:text-white" />
                          </div>
                          <span className="text-slate-300 group-hover:text-white transition-colors">Remember Me</span>
                        </label>
                        <button type="button" onClick={() => setShowForgot(true)} className="text-violet-400 font-bold hover:text-violet-300 transition-colors">Forgot Password?</button>
                      </>
                    ) : (
                      <label className="flex items-center space-x-2 cursor-pointer group w-full">
                        <div className={`w-4 h-4 shrink-0 rounded border ${errors.agreed ? 'border-red-500/50' : 'border-white/20'} flex items-center justify-center text-transparent transition-colors ${formData.agreed ? 'bg-violet-500 border-violet-500 text-white' : ''}`}>
                          <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={formData.agreed} 
                            onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                          />
                          {formData.agreed && <Check className="h-3 w-3" />}
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors">
                          I agree to <a href="#" className="text-violet-400 hover:underline">Terms & Conditions</a>
                        </span>
                      </label>
                    )}
                  </div>
                  {!isLogin && errors.agreed && <p className="text-red-400 text-xs mt-0">{errors.agreed}</p>}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button type="submit" className="w-full py-4 btn-glow rounded-xl text-lg tracking-wide uppercase font-extrabold flex items-center justify-center">
                      {isLogin ? 'Login' : 'Create Account'} <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink-0 mx-4 text-xs text-slate-500 uppercase tracking-widest font-medium">Or continue with</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>

                  {/* Google Login (UI Only) */}
                  <button type="button" className="w-full py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold flex items-center justify-center transition-colors">
                    <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>

                  {/* Bottom Toggle */}
                  <div className="text-center mt-6">
                    <button 
                      type="button" 
                      onClick={() => { setIsLogin(!isLogin); setErrors({}); }} 
                      className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <span className="text-violet-400 font-bold ml-1">{isLogin ? "Sign Up" : "Login"}</span>
                    </button>
                  </div>
                  
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
