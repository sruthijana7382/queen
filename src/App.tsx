import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Star, ShoppingBag, ArrowRight, Github, Twitter, Instagram, Heart, Share2, User, Bell, Globe, Play, Camera, Scan, MapPin, LogIn, LogOut, ChevronLeft, ChevronRight, Plus, Trash2, Minus, CheckCircle2, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from './data/products';
import { Product, CartItem, User as UserType, Review, DeliveryOption } from './types';
import { cn } from './lib/utils';

// --- Constants ---

const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    id: 'standard',
    name: 'Standard Delivery',
    price: 0,
    estimatedDays: '3-5 Business Days',
    description: 'Reliable shipping for your everyday needs.'
  },
  {
    id: 'fast',
    name: 'Fast Delivery',
    price: 150,
    estimatedDays: '1-2 Business Days',
    description: 'Priority shipping for urgent orders.'
  },
  {
    id: 'express',
    name: 'Express Delivery',
    price: 300,
    estimatedDays: 'Today',
    description: 'Get your items delivered within hours.'
  }
];

// --- Components ---

const Navbar = ({ 
  cartCount, 
  onCartClick, 
  onWishlistClick,
  onNotificationsClick,
  searchQuery, 
  setSearchQuery, 
  wishlistCount,
  user,
  onAccountClick,
  notifications,
  language,
  setLanguage
}: { 
  cartCount: number; 
  onCartClick: () => void;
  onWishlistClick: () => void;
  onNotificationsClick: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  wishlistCount: number;
  user: UserType | null;
  onAccountClick: () => void;
  notifications: number;
  language: 'EN' | 'HI';
  setLanguage: (l: 'EN' | 'HI') => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-black flex items-center gap-2">
              <img 
                src="https://marketplace.canva.com/EAGR4J_-jYM/2/0/1600w/canva-colorful-abstract-online-shop-free-logo-zxo07UzxTDw.jpg" 
                alt="SHOPEASY Logo" 
                className="w-10 h-10 object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
              <span>SHOPEASY</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => handleNavClick('products')}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Shop
              </button>
              <button 
                onClick={() => handleNavClick('categories')}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Categories
              </button>
              <button 
                onClick={() => handleNavClick('deals')}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Deals
              </button>
              <button 
                onClick={() => handleNavClick('big-million-days')}
                className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
              >
                <Star className="w-4 h-4 fill-current" />
                Big Million Days
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'EN' ? "Search products..." : "उत्पाद खोजें..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-orange-500 w-48 lg:w-64 transition-all"
              />
            </div>

            <button 
              onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
              className="p-2 text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold">{language}</span>
            </button>

            <div className="relative">
              <button 
                onClick={onNotificationsClick}
                className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                    {notifications}
                  </span>
                )}
              </button>
            </div>

            <button 
              onClick={onWishlistClick}
              className="relative p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-black transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>

            {user ? (
              <button 
                onClick={onAccountClick}
                className="flex items-center gap-2 p-1 pl-2 pr-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <div className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold hidden lg:block">{user.name}</span>
              </button>
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-orange-600 transition-all text-sm font-bold shadow-lg shadow-black/10"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:block">Sign In</span>
              </button>
            )}

            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-xl text-sm"
                />
              </div>
              <div className="flex flex-col gap-4 font-medium">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Categories</Link>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Deals</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onBuyNow: (p: Product) => void;
  isLiked: boolean;
  onToggleLike: (id: number) => void;
  onClick: (p: Product) => void;
  key?: React.Key;
}

const LoginPage = ({ onLogin }: { onLogin: (user: UserType) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      id: 'u1',
      name: email.split('@')[0],
      email: email,
      avatar: 'https://i.pravatar.cc/150?u=u1'
    });
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-gray-100"
      >
        <div className="p-8 sm:p-12">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Sign in to your account to continue</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
              <input 
                type="password" 
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-black/10 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account? <button className="text-orange-600 font-bold hover:underline">Create one</button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CheckoutPage = ({ 
  cart, 
  user, 
  selectedDelivery, 
  language,
  onPlaceOrder,
  onUpdateUser
}: { 
  cart: CartItem[], 
  user: UserType | null, 
  selectedDelivery: DeliveryOption,
  language: 'EN' | 'HI',
  onPlaceOrder: () => void,
  onUpdateUser: (user: UserType) => void
}) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + (selectedDelivery?.price || 0);
  const navigate = useNavigate();
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'CARD' | 'UPI'>('COD');
  const [upiMethod, setUpiMethod] = useState<'Google Pay' | 'PhonePe' | 'Paytm' | 'Other'>('Google Pay');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '' });
  const [upiId, setUpiId] = useState('');

  const handlePlaceOrder = () => {
    if (!user || !user.address) return;
    
    // Basic validation for payment methods
    if (paymentMethod === 'CARD' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc)) {
      alert('Please enter valid card details');
      return;
    }
    if (paymentMethod === 'UPI' && upiMethod === 'Other' && !upiId.includes('@')) {
      alert('Please enter a valid UPI ID');
      return;
    }

    onPlaceOrder();
    navigate('/order-success');
  };

  const handleSaveAddress = () => {
    if (user && newAddress.trim()) {
      onUpdateUser({ ...user, address: newAddress.trim() });
      setIsAddingAddress(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Add some items to your cart to checkout.</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-6 px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-all"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Shipping Information */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange-600" />
              Shipping Details
            </h2>
            {user ? (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="font-bold text-gray-900">{user.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{user.email}</p>
                  <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                    {user.address || "No address added yet. Please add your address to place order."}
                  </p>
                </div>
                
                {isAddingAddress ? (
                  <div className="space-y-3">
                    <textarea 
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      placeholder="Enter your full delivery address..."
                      rows={3}
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <button 
                        onClick={handleSaveAddress}
                        className="px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-orange-600 transition-all"
                      >
                        Save Address
                      </button>
                      <button 
                        onClick={() => setIsAddingAddress(false)}
                        className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold hover:bg-gray-200 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={() => setIsAddingAddress(true)}
                    className="text-orange-600 text-sm font-bold hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    {user.address ? 'Change Address' : 'Add Delivery Address'}
                  </button>
                )}
              </div>
            ) : (
              <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                <p className="text-orange-800 font-medium mb-4">Please sign in to complete your purchase</p>
                <button 
                  onClick={() => navigate('/login')}
                  className="px-6 py-2 bg-orange-600 text-white rounded-full text-sm font-bold hover:bg-orange-700 transition-all"
                >
                  Sign In
                </button>
              </div>
            )}
          </section>

          {/* Delivery Method */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-orange-600" />
              Delivery Method
            </h2>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-900">{selectedDelivery.name}</p>
                <p className="text-gray-500 text-xs mt-1">{selectedDelivery.estimatedDays}</p>
              </div>
              <span className="font-bold text-orange-600">
                {selectedDelivery.price === 0 ? 'FREE' : `₹${selectedDelivery.price}`}
              </span>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-orange-600" />
              Payment Method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <button 
                onClick={() => setPaymentMethod('COD')}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all text-left",
                  paymentMethod === 'COD' ? "border-orange-600 bg-orange-50" : "border-gray-100 hover:border-gray-200"
                )}
              >
                <p className="font-bold text-sm">COD</p>
                <p className="text-[10px] text-gray-500 mt-1">Cash on Delivery</p>
              </button>
              <button 
                onClick={() => setPaymentMethod('CARD')}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all text-left",
                  paymentMethod === 'CARD' ? "border-orange-600 bg-orange-50" : "border-gray-100 hover:border-gray-200"
                )}
              >
                <p className="font-bold text-sm flex items-center gap-1">
                  <CreditCard className="w-3 h-3" /> Card
                </p>
                <p className="text-[10px] text-gray-500 mt-1">Credit/Debit Card</p>
              </button>
              <button 
                onClick={() => setPaymentMethod('UPI')}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all text-left",
                  paymentMethod === 'UPI' ? "border-orange-600 bg-orange-50" : "border-gray-100 hover:border-gray-200"
                )}
              >
                <p className="font-bold text-sm">UPI</p>
                <p className="text-[10px] text-gray-500 mt-1">Google Pay, PhonePe</p>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {paymentMethod === 'CARD' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Card Number</label>
                    <input 
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Expiry Date</label>
                      <input 
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">CVC</label>
                      <input 
                        type="text"
                        placeholder="123"
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {paymentMethod === 'UPI' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Google Pay', 'PhonePe', 'Paytm', 'Other'].map((method) => (
                      <button
                        key={method}
                        onClick={() => setUpiMethod(method as any)}
                        className={cn(
                          "px-3 py-2 rounded-xl border text-xs font-bold transition-all",
                          upiMethod === method ? "border-orange-600 bg-orange-50 text-orange-600" : "border-gray-100 hover:border-gray-200"
                        )}
                      >
                        {method}
                      </button>
                    ))}
                  </div>

                  {upiMethod === 'Other' ? (
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">UPI ID</label>
                      <input 
                        type="text"
                        placeholder="username@bank"
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </div>
                  ) : (
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                      <p className="text-xs text-gray-600">You will be redirected to your {upiMethod} app to complete the payment.</p>
                    </div>
                  )}
                  <p className="text-[10px] text-gray-400">Securely pay using your preferred UPI application.</p>
                </motion.div>
              )}

              {paymentMethod === 'COD' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-blue-50 rounded-2xl border border-blue-100 overflow-hidden"
                >
                  <p className="text-xs text-blue-800 leading-relaxed">
                    You can pay via Cash, UPI, or Card at the time of delivery. Please ensure someone is available to receive the order.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-24 h-fit">
          <section className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-xl font-bold mb-8">Order Summary</h2>
            <div className="space-y-6 mb-8 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-white/10 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">Qty: {item.quantity}</p>
                    <p className="text-sm font-bold text-orange-500 mt-1">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Delivery</span>
                <span>{selectedDelivery.price === 0 ? 'FREE' : `₹${selectedDelivery.price}`}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/10">
                <span>Total</span>
                <span className="text-orange-500">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button 
              disabled={!user || !user.address}
              onClick={handlePlaceOrder}
              className="w-full mt-8 py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              Place Order
            </button>
            {!user && <p className="text-[10px] text-center text-gray-500 mt-4">Please sign in to place order</p>}
            {user && !user.address && <p className="text-[10px] text-center text-gray-500 mt-4">Please add delivery address to place order</p>}
          </section>
        </div>
      </div>
    </div>
  );
};

const HeroSlider = ({ language }: { language: 'EN' | 'HI' }) => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
      title: language === 'EN' ? 'UPGRADE YOUR' : 'अपना बदलें',
      subtitle: language === 'EN' ? 'LIFESTYLE.' : 'जीवनशैली।',
      badge: language === 'EN' ? 'NEW COLLECTION 2026' : 'नया कलेक्शन 2026',
      description: language === 'EN' 
        ? 'Discover our curated selection of premium electronics, accessories, and home essentials.'
        : 'प्रीमियम इलेक्ट्रॉनिक्स, एक्सेसरीज और घरेलू आवश्यक वस्तुओं के हमारे क्यूरेटेड चयन की खोज करें।'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80",
      title: language === 'EN' ? 'PREMIUM' : 'प्रीमियम',
      subtitle: language === 'EN' ? 'GADGETS.' : 'गैजेट्स।',
      badge: language === 'EN' ? 'TECH SALE' : 'टेक सेल',
      description: language === 'EN'
        ? 'Experience the future of technology with our latest gadget collection.'
        : 'हमारे नवीनतम गैजेट संग्रह के साथ प्रौद्योगिकी के भविष्य का अनुभव करें।'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80",
      title: language === 'EN' ? 'PURE' : 'शुद्ध',
      subtitle: language === 'EN' ? 'SOUND.' : 'ध्वनि।',
      badge: language === 'EN' ? 'AUDIO PRO' : 'ऑडियो प्रो',
      description: language === 'EN'
        ? 'Immerse yourself in high-fidelity audio with our professional headphones.'
        : 'हमारे पेशेवर हेडफ़ोन के साथ उच्च-निष्ठा ऑडियो में डूब जाएं।'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1445205170230-053b830c6050?w=1920&q=80",
      title: language === 'EN' ? 'TRENDY' : 'ट्रेंडी',
      subtitle: language === 'EN' ? 'FASHION.' : 'फैशन।',
      badge: language === 'EN' ? 'SEASONAL SALE' : 'मौसमी सेल',
      description: language === 'EN'
        ? 'Stay ahead of the trend with our latest fashion and apparel collection.'
        : 'हमारे नवीनतम फैशन और परिधान संग्रह के साथ चलन से आगे रहें।'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80",
      title: language === 'EN' ? 'BIG MILLION' : 'बिग मिलियन',
      subtitle: language === 'EN' ? 'DAYS SALE.' : 'डेज़ सेल।',
      badge: language === 'EN' ? 'ANY ITEM ₹199' : 'कोई भी आइटम ₹199',
      description: language === 'EN'
        ? 'Unbelievable deals on your favorite accessories. Grab them before they are gone!'
        : 'आपके पसंदीदा एक्सेसरीज पर अविश्वसनीय डील। खत्म होने से पहले उन्हें पकड़ें!'
    }
  ];

  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[current].image} 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
            {slides[current].badge}
          </span>
          <h1 className="text-5xl lg:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
            {slides[current].title}<br />
            <span className="text-orange-500">{slides[current].subtitle}</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-lg">
            {slides[current].description}
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2 group"
            >
              {language === 'EN' ? 'Shop Now' : 'अभी खरीदारी करें'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-2 items-center ml-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    current === idx ? "bg-orange-500 w-6" : "bg-white/30"
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8"
      >
        <CheckCircle2 className="w-12 h-12 text-green-600" />
      </motion.div>
      <h1 className="text-4xl font-black tracking-tighter mb-4">ORDER PLACED!</h1>
      <p className="text-gray-500 max-w-md mb-10">
        Thank you for your purchase. Your order has been received and is being processed.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl shadow-black/10"
      >
        Continue Shopping
      </button>
    </div>
  );
};

const Scanner = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6">
      <div className="relative w-full max-w-sm aspect-square border-2 border-orange-500 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-scan" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera className="w-12 h-12 text-white/50" />
        </div>
      </div>
      <p className="text-white mt-8 text-center font-medium">Align barcode or QR code within the frame</p>
      <button 
        onClick={onClose}
        className="mt-12 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all"
      >
        Close Scanner
      </button>
    </div>
  );
};

const AccountModal = ({ user, onLogout, onClose, onUpdateAddress }: { 
  user: UserType, 
  onLogout: () => void, 
  onClose: () => void,
  onUpdateAddress: (address: string) => void
}) => {
  const [address, setAddress] = useState(user.address || '');

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl h-[80vh] flex flex-col"
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold">My Account</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl font-bold">
              {user.name[0].toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              Delivery Address
            </h4>
            <textarea 
              className="w-full px-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-orange-500 transition-all h-24 resize-none"
              placeholder="Enter your full delivery address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button 
              onClick={() => onUpdateAddress(address)}
              className="px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-all"
            >
              Save Address
            </button>
          </div>
        </div>
        <div className="p-6 border-t border-gray-100">
          <button 
            onClick={onLogout}
            className="w-full py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart, onBuyNow, isLiked, onToggleLike, onClick }: ProductCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = product.images || [product.image];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: `Check out this ${product.title} on Shopeasy!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col"
    >
      <div 
        className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
        onClick={() => onClick(product)}
      >
        {showVideo && product.videoUrl ? (
          <video 
            src={product.videoUrl} 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={images[currentImageIndex]} 
                alt={`${product.title} - ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </AnimatePresence>

            {images.length > 1 && isHovered && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all shadow-md z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all shadow-md z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all",
                        i === currentImageIndex ? "bg-orange-600 w-3" : "bg-white/60"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discountPercentage && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
              {product.discountPercentage}% OFF
            </span>
          )}
          {product.videoUrl && (
            <button 
              onClick={() => setShowVideo(!showVideo)}
              className="p-2 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full shadow-sm hover:bg-orange-600 hover:text-white transition-all"
            >
              <Play className={cn("w-4 h-4", showVideo && "fill-current")} />
            </button>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button 
            onClick={() => onToggleLike(product.id)}
            className={cn(
              "p-2 rounded-full shadow-sm transition-all active:scale-90",
              isLiked ? "bg-red-500 text-white" : "bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500"
            )}
          >
            <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
          </button>
          <button 
            onClick={handleShare}
            className="p-2 bg-white/90 backdrop-blur-sm text-gray-400 hover:text-orange-600 rounded-full shadow-sm transition-all active:scale-90"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
            <span className="text-xs font-medium text-gray-600">{product.rating.rate} ({product.rating.count})</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{product.brand}</span>
        </div>

        <h3 
          className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-orange-600 transition-colors cursor-pointer"
          onClick={() => onClick(product)}
        >
          {product.title}
        </h3>

        {product.colors && (
          <div className="flex gap-1 mb-3">
            {product.colors.map(color => (
              <div 
                key={color} 
                className="w-3 h-3 rounded-full border border-gray-200" 
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        )}

        <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10">
          {product.description}
        </p>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => onAddToCart(product)}
              className="bg-gray-100 text-black px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors active:scale-95"
            >
              Add to Cart
            </button>
            <button 
              onClick={() => onBuyNow(product)}
              className="bg-orange-600 text-white px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 transition-colors active:scale-95"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove,
  language = 'EN',
  selectedDelivery,
  onSelectDelivery,
  deliveryOptions = []
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[]; 
  onUpdateQuantity: (id: number, delta: number) => void; 
  onRemove: (id: number) => void;
  language?: 'EN' | 'HI';
  selectedDelivery?: DeliveryOption;
  onSelectDelivery?: (option: DeliveryOption) => void;
  deliveryOptions?: DeliveryOption[];
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + (selectedDelivery?.price || 0);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {language === 'EN' ? `Your Cart (${items.length})` : `आपकी कार्ट (${items.length})`}
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      {language === 'EN' ? 'Your cart is empty' : 'आपकी कार्ट खाली है'}
                    </h3>
                    <p className="text-gray-500">
                      {language === 'EN' ? "Looks like you haven't added anything yet." : "ऐसा लगता है कि आपने अभी तक कुछ नहीं जोड़ा है।"}
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
                  >
                    {language === 'EN' ? 'Start Shopping' : 'खरीदारी शुरू करें'}
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm line-clamp-1">{item.title}</h4>
                          <p className="text-orange-600 font-bold text-sm mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="px-2 py-1 hover:bg-gray-50 text-gray-500"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 text-sm font-medium border-x border-gray-200">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="px-2 py-1 hover:bg-gray-50 text-gray-500"
                              >
                                +
                              </button>
                            </div>
                            <button 
                              onClick={() => onRemove(item.id)}
                              className="text-xs text-red-500 font-medium hover:underline"
                            >
                              {language === 'EN' ? 'Remove' : 'हटाएं'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Options Section */}
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                      {language === 'EN' ? 'Delivery Options' : 'वितरण विकल्प'}
                    </h3>
                    <div className="space-y-3">
                      {deliveryOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => onSelectDelivery?.(option)}
                          className={cn(
                            "w-full p-4 rounded-xl border-2 text-left transition-all",
                            selectedDelivery?.id === option.id
                              ? "border-orange-600 bg-orange-50"
                              : "border-gray-100 hover:border-gray-200"
                          )}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-sm">{option.name}</span>
                            <span className="font-bold text-sm text-orange-600">
                              {option.price === 0 ? (language === 'EN' ? 'FREE' : 'मुफ्त') : `₹${option.price}`}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mb-1">{option.estimatedDays}</p>
                          <p className="text-[10px] text-gray-400 leading-tight">{option.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{language === 'EN' ? 'Subtotal' : 'उप-योग'}</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{language === 'EN' ? 'Delivery' : 'वितरण'}</span>
                    <span>{selectedDelivery?.price === 0 ? (language === 'EN' ? 'FREE' : 'मुफ्त') : `₹${selectedDelivery?.price}`}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="font-bold text-gray-900">{language === 'EN' ? 'Total' : 'कुल'}</span>
                    <span className="text-2xl font-bold text-gray-900">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    onClose();
                    navigate('/checkout');
                  }}
                  className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group"
                >
                  {language === 'EN' ? 'Checkout Now' : 'अभी चेकआउट करें'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  {language === 'EN' ? 'Shipping and taxes calculated at checkout' : 'शिपिंग और करों की गणना चेकआउट पर की जाती है'}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProductDetailModal = ({ product, onClose, onAddToCart, onBuyNow, isLiked, onToggleLike, onAddReview, language }: { 
  product: Product; 
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  onBuyNow: (p: Product) => void;
  isLiked: boolean;
  onToggleLike: (id: number) => void;
  onAddReview: (productId: number, review: Review) => void;
  language: 'EN' | 'HI';
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images || [product.image];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-800 hover:bg-white transition-all shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left: Image Slider */}
        <div className="w-full md:w-1/2 bg-gray-50 relative aspect-square md:aspect-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={product.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all shadow-xl z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all shadow-xl z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all shadow-sm",
                      i === currentImageIndex ? "bg-orange-600 w-6" : "bg-white/60 hover:bg-white"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-black uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span className="text-sm font-bold text-gray-900">{product.rating.rate}</span>
              <span className="text-sm text-gray-400">({product.rating.count} reviews)</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
            {product.title}
          </h2>
          
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">
            Brand: {product.brand}
          </p>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-black text-orange-600">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-400 line-through font-medium">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="text-lg text-red-500 font-black">{product.discountPercentage}% OFF</span>
              </>
            )}
          </div>

          <div className="space-y-6 mb-10">
            <div>
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-3">Description</h4>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.colors && (
              <div>
                <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-3">Available Colors</h4>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <div key={color} className="group flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full border-2 border-gray-100 shadow-sm transition-transform group-hover:scale-110" style={{ backgroundColor: color.toLowerCase() }} title={color} />
                      <span className="text-[10px] font-bold text-gray-400 uppercase">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl font-black hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              ADD TO CART
            </button>
            <button 
              onClick={() => onBuyNow(product)}
              className="flex-1 px-8 py-4 bg-orange-600 text-white rounded-2xl font-black hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2"
            >
              BUY NOW
            </button>
            <button 
              onClick={() => onToggleLike(product.id)}
              className={cn(
                "p-4 rounded-2xl transition-all shadow-lg",
                isLiked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-400 hover:text-red-500"
              )}
            >
              <Heart className={cn("w-6 h-6", isLiked && "fill-current")} />
            </button>
          </div>

          {/* Reviews Section */}
          <ReviewsSection 
            product={product} 
            onAddReview={(review) => onAddReview(product.id, review)} 
            language={language} 
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ReviewsSection = ({ 
  product, 
  onAddReview, 
  language 
}: { 
  product: Product; 
  onAddReview: (review: Review) => void;
  language: 'EN' | 'HI';
}) => {
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', userName: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment || !newReview.userName) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      const review: Review = {
        id: Math.random().toString(36).substr(2, 9),
        userId: 'u' + Math.random().toString(36).substr(2, 5),
        userName: newReview.userName,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      };
      onAddReview(review);
      setNewReview({ rating: 5, comment: '', userName: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="pt-12 border-t border-gray-100">
      <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">
        {language === 'EN' ? 'Customer Reviews' : 'ग्राहक समीक्षाएं'}
      </h3>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-12 bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
        <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-4">
          {language === 'EN' ? 'Write a Review' : 'एक समीक्षा लिखें'}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder={language === 'EN' ? 'Your Name' : 'आपका नाम'}
            value={newReview.userName}
            onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
            className="px-4 py-3 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 shadow-sm"
            required
          />
          <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-sm">
            <span className="text-sm text-gray-400 font-bold uppercase tracking-tighter">Rating:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="focus:outline-none"
                >
                  <Star 
                    className={cn(
                      "w-4 h-4 transition-all",
                      star <= newReview.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
                    )} 
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <textarea
          placeholder={language === 'EN' ? 'Share your thoughts about the product...' : 'उत्पाद के बारे में अपने विचार साझा करें...'}
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          className="w-full px-4 py-3 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 shadow-sm mb-4 min-h-[100px]"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-xl font-black hover:bg-gray-800 transition-all disabled:opacity-50"
        >
          {isSubmitting ? (language === 'EN' ? 'Submitting...' : 'सबमिट कर रहा है...') : (language === 'EN' ? 'Post Review' : 'समीक्षा पोस्ट करें')}
        </button>
      </form>

      {/* Reviews List */}
      <div className="space-y-8">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className="group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-black text-sm">
                    {review.userName.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 leading-none mb-1">{review.userName}</h5>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={cn(
                            "w-3 h-3",
                            star <= review.rating ? "fill-orange-400 text-orange-400" : "text-gray-200"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{review.date}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-13">
                {review.comment}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold uppercase tracking-widest">
              {language === 'EN' ? 'No reviews yet. Be the first to review!' : 'अभी तक कोई समीक्षा नहीं। समीक्षा करने वाले पहले व्यक्ति बनें!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const WishlistDrawer = ({ isOpen, onClose, items, onRemove, onAddToCart, language }: {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (id: number) => void;
  onAddToCart: (p: Product) => void;
  language: 'EN' | 'HI';
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[80] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">
                    {language === 'EN' ? 'My Wishlist' : 'मेरी इच्छा सूची'}
                  </h2>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    {items.length} {items.length === 1 ? 'Item' : 'Items'}
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10 text-gray-200" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      {language === 'EN' ? 'Your wishlist is empty' : 'आपकी इच्छा सूची खाली है'}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {language === 'EN' ? "Save items you love to find them later." : "अपनी पसंद की वस्तुओं को बाद में खोजने के लिए सहेजें।"}
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
                  >
                    {language === 'EN' ? 'Explore Products' : 'उत्पादों का अन्वेषण करें'}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="absolute top-1 right-1 p-1.5 bg-white/90 backdrop-blur-sm rounded-full text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{item.title}</h4>
                        <p className="text-orange-600 font-black text-sm mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                        <div className="mt-auto flex items-center gap-2">
                          <button 
                            onClick={() => {
                              onAddToCart(item);
                              onRemove(item.id);
                            }}
                            className="flex-1 py-2 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-orange-600 transition-all"
                          >
                            Move to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const NotificationsDrawer = ({ isOpen, onClose, language }: {
  isOpen: boolean;
  onClose: () => void;
  language: 'EN' | 'HI';
}) => {
  const mockNotifications = [
    {
      id: 1,
      title: language === 'EN' ? 'Big Million Days is Live!' : 'बिग मिलियन डेज़ लाइव है!',
      desc: language === 'EN' ? 'Grab any accessory at just ₹199. Limited time offer!' : 'सिर्फ ₹199 में कोई भी एक्सेसरी लें। सीमित समय का ऑफर!',
      time: '2 mins ago',
      type: 'sale',
      unread: true
    },
    {
      id: 2,
      title: language === 'EN' ? 'Order Shipped' : 'ऑर्डर भेज दिया गया',
      desc: language === 'EN' ? 'Your order #ORD-7829 has been shipped and is on its way.' : 'आपका ऑर्डर #ORD-7829 भेज दिया गया है और रास्ते में है।',
      time: '1 hour ago',
      type: 'order',
      unread: true
    },
    {
      id: 3,
      title: language === 'EN' ? 'Price Drop Alert' : 'कीमत में गिरावट का अलर्ट',
      desc: language === 'EN' ? 'Premium Wireless Headphones are now 20% off!' : 'प्रीमियम वायरलेस हेडफ़ोन अब 20% छूट पर हैं!',
      time: '5 hours ago',
      type: 'alert',
      unread: false
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[80] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                  <Bell className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">
                    {language === 'EN' ? 'Notifications' : 'सूचनाएं'}
                  </h2>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    {mockNotifications.filter(n => n.unread).length} New
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-gray-50">
                {mockNotifications.map((n) => (
                  <div key={n.id} className={cn("p-6 hover:bg-gray-50 transition-colors relative", n.unread && "bg-orange-50/30")}>
                    {n.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />}
                    <div className="flex gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        n.type === 'sale' ? "bg-red-100 text-red-600" : 
                        n.type === 'order' ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                      )}>
                        {n.type === 'sale' ? <Star className="w-5 h-5" /> : 
                         n.type === 'order' ? <CheckCircle2 className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-gray-900 text-sm">{n.title}</h4>
                          <span className="text-[10px] text-gray-400 font-medium">{n.time}</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">{n.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100">
              <button className="w-full py-3 text-orange-600 font-bold text-sm hover:bg-orange-50 rounded-xl transition-colors">
                {language === 'EN' ? 'Mark all as read' : 'सभी को पढ़ा हुआ मान लें'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <img 
              src="https://marketplace.canva.com/EAGR4J_-jYM/2/0/1600w/canva-colorful-abstract-online-shop-free-logo-zxo07UzxTDw.jpg" 
              alt="SHOPEASY Logo" 
              className="w-10 h-10 object-contain rounded-lg brightness-110"
              referrerPolicy="no-referrer"
            />
            <span>SHOPEASY</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your one-stop destination for premium products. We bring quality and style right to your doorstep.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Discount</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm flex-1 focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors">Join</button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>&copy; 2026 Shopeasy Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [allProducts, setAllProducts] = useState<Product[]>(products);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBrand, setActiveBrand] = useState('All');
  const [user, setUser] = useState<UserType | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN');
  const [notifications, setNotifications] = useState(2);
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryOption>(DELIVERY_OPTIONS[0]);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const selectedProduct = useMemo(() => {
    return allProducts.find(p => p.id === selectedProductId) || null;
  }, [selectedProductId, allProducts]);

  const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];
  const brands = ['All', ...Array.from(new Set(allProducts.map(p => p.brand)))];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, activeCategory, activeBrand, allProducts]);

  const wishlistItems = useMemo(() => {
    return allProducts.filter(p => wishlist.includes(p.id));
  }, [wishlist, allProducts]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const buyNow = (product: Product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  const toggleLike = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const addReview = (productId: number, review: Review) => {
    setAllProducts(prev => prev.map(p => {
      if (p.id === productId) {
        const newReviews = [review, ...(p.reviews || [])];
        const newCount = (p.rating.count || 0) + 1;
        const newRate = Number(((p.rating.rate * (p.rating.count || 0) + review.rating) / newCount).toFixed(1));
        return {
          ...p,
          reviews: newReviews,
          rating: { rate: newRate, count: newCount }
        };
      }
      return p;
    }));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar 
          cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
          wishlistCount={wishlist.length}
          onCartClick={() => setIsCartOpen(true)}
          onWishlistClick={() => setIsWishlistOpen(true)}
          onNotificationsClick={() => setIsNotificationsOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          user={user}
          onAccountClick={() => setIsAccountOpen(true)}
          notifications={notifications}
          language={language}
          setLanguage={setLanguage}
        />

        <main>
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={setUser} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} user={user} selectedDelivery={selectedDelivery} language={language} onPlaceOrder={clearCart} onUpdateUser={setUser} />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/" element={
              <>
                <HeroSlider language={language} />

                {/* Big Million Days Section */}
                <section id="big-million-days" className="py-24 bg-red-600 text-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
                  </div>
                  
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                      <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold mb-4">
                          <Star className="w-3 h-3 fill-current" />
                          {language === 'EN' ? 'LIMITED TIME OFFER' : 'सीमित समय का ऑफर'}
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-4 uppercase leading-none">
                          {language === 'EN' ? 'BIG MILLION DAYS' : 'बिग मिलियन डेज़'}
                        </h2>
                        <p className="text-red-100 text-xl font-medium">
                          {language === 'EN' 
                            ? 'ANY ITEM AT JUST ₹199' 
                            : 'कोई भी आइटम सिर्फ ₹199 में'}
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-center">
                          <p className="text-xs font-bold text-red-200 uppercase tracking-widest mb-2">Hurry Up! Offer ends in</p>
                          <div className="flex gap-2">
                            {[ '02', '14', '45' ].map((time, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="bg-white text-red-600 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shadow-lg">
                                  {time}
                                </div>
                                {i < 2 && <span className="text-2xl font-bold">:</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {products.filter(p => p.category === 'Big Million Days').map(product => (
                        <div key={product.id} className="relative group">
                          <div className="absolute -top-3 -right-3 z-20 bg-yellow-400 text-black px-3 py-1 rounded-full text-[10px] font-black shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                            ₹199 ONLY
                          </div>
                          <ProductCard 
                            product={product} 
                            onAddToCart={addToCart}
                            onBuyNow={buyNow}
                            isLiked={wishlist.includes(product.id)}
                            onToggleLike={toggleLike}
                            onClick={(p) => setSelectedProductId(p.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Deals Section */}
                <section id="deals" className="py-24 bg-orange-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                      <div>
                        <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">
                          {language === 'EN' ? 'FLASH DEALS' : 'फ्लैश डील्स'}
                        </h2>
                        <p className="text-gray-600">
                          {language === 'EN' 
                            ? 'Limited time offers on our most popular products.'
                            : 'हमारे सबसे लोकप्रिय उत्पादों पर सीमित समय के ऑफर।'}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                          className="text-sm font-bold text-orange-600 hover:underline"
                        >
                          {language === 'EN' ? 'View All' : 'सभी देखें'}
                        </button>
                        <div className="hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          <span className="text-xs font-bold text-gray-900">ENDS IN 04:23:15</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {products.filter(p => p.discountPercentage && p.discountPercentage >= 15).slice(0, 4).map(product => (
                        <ProductCard 
                          key={product.id} 
                          product={product} 
                          onAddToCart={addToCart}
                          onBuyNow={buyNow}
                          isLiked={wishlist.includes(product.id)}
                          onToggleLike={toggleLike}
                          onClick={(p) => setSelectedProductId(p.id)}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* Products Section */}
                <section id="products" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                      <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">
                        {language === 'EN' ? 'OUR PRODUCTS' : 'हमारे उत्पाद'}
                      </h2>
                      <p className="text-gray-500 max-w-md">
                        {language === 'EN' 
                          ? 'Explore our latest arrivals and find the perfect match for your needs.'
                          : 'हमारे नवीनतम आगमन का अन्वेषण करें और अपनी आवश्यकताओं के लिए सही मेल खोजें।'}
                      </p>
                    </div>
                    
                    <div id="categories" className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                          <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                              "px-6 py-2 rounded-full text-sm font-bold transition-all",
                              activeCategory === cat 
                                ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" 
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            )}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2">Brands:</span>
                        {brands.map(brand => (
                          <button
                            key={brand}
                            onClick={() => setActiveBrand(brand)}
                            className={cn(
                              "px-3 py-1 rounded-lg text-xs font-bold transition-all",
                              activeBrand === brand 
                                ? "bg-black text-white" 
                                : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                            )}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      <AnimatePresence mode="popLayout">
                        {filteredProducts.map(product => (
                          <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={addToCart}
                            onBuyNow={buyNow}
                            isLiked={wishlist.includes(product.id)}
                            onToggleLike={toggleLike}
                            onClick={(p) => setSelectedProductId(p.id)}
                          />
                        ))}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="py-20 text-center">
                      <div className="inline-block p-6 bg-gray-100 rounded-full mb-6">
                        <Search className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">No products found</h3>
                      <p className="text-gray-500">Try adjusting your search or category filters.</p>
                      <button 
                        onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                        className="mt-6 text-orange-600 font-bold hover:underline"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </section>

                {/* Features Section */}
                <section className="bg-gray-50 py-24">
                  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-orange-600" />
                      </div>
                      <h4 className="text-xl font-bold">Fast Delivery</h4>
                      <p className="text-gray-500 text-sm">Free shipping on all orders over ₹5,000. Delivered within 2-3 business days.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                        <Star className="w-8 h-8 text-orange-600" />
                      </div>
                      <h4 className="text-xl font-bold">Premium Quality</h4>
                      <p className="text-gray-500 text-sm">Every product is hand-picked and quality-tested by our expert team.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                        <X className="w-8 h-8 text-orange-600" />
                      </div>
                      <h4 className="text-xl font-bold">Easy Returns</h4>
                      <p className="text-gray-500 text-sm">Not satisfied? Return any product within 30 days for a full refund.</p>
                    </div>
                  </div>
                </section>
              </>
            } />
          </Routes>
        </main>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          language={language}
          selectedDelivery={selectedDelivery}
          onSelectDelivery={setSelectedDelivery}
          deliveryOptions={DELIVERY_OPTIONS}
        />

        <WishlistDrawer
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          items={wishlistItems}
          onRemove={toggleLike}
          onAddToCart={addToCart}
          language={language}
        />

        <NotificationsDrawer
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
          language={language}
        />

        <AnimatePresence>
          {selectedProduct && (
            <ProductDetailModal 
              product={selectedProduct}
              onClose={() => setSelectedProductId(null)}
              onAddToCart={addToCart}
              onBuyNow={buyNow}
              isLiked={wishlist.includes(selectedProduct.id)}
              onToggleLike={toggleLike}
              onAddReview={addReview}
              language={language}
            />
          )}
          {isAccountOpen && user && (
            <AccountModal 
              user={user} 
              onClose={() => setIsAccountOpen(false)} 
              onLogout={() => {
                setUser(null);
                setIsAccountOpen(false);
              }}
              onUpdateAddress={(addr) => {
                setUser({ ...user, address: addr });
                alert('Address updated successfully!');
              }}
            />
          )}
          {isScannerOpen && (
            <Scanner onClose={() => setIsScannerOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
