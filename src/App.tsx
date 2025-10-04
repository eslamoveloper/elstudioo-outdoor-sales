import { Play, Phone, MessageCircle, Video, Award, Sparkles, ChevronRight, Film, Camera, Clapperboard, Radio, Globe, Check, Tag, TrendingDown, X } from 'lucide-react'

function App() {

  const videoCategories = [
    {
      id: 'podcasts',
      title: 'تصوير ومونتاج البودكاست',
      titleEn: 'Podcast Production',
      url: 'https://vimeo.com/showcase/elstudioo-podcasts',
      icon: <Video className="w-6 h-6" />,
      description: 'إنتاج احترافي للبودكاست بأعلى جودة'
    },
    {
      id: 'courses',
      title: 'تصوير ومونتاج الكورسات',
      titleEn: 'Course Production',
      url: 'https://vimeo.com/showcase/courses-yallastep-production',
      icon: <Award className="w-6 h-6" />,
      description: 'محتوى تعليمي احترافي وجذاب'
    },
    {
      id: 'smartboard',
      title: 'التصوير والمونتاج على الاسمارت بورد',
      titleEn: 'Smartboard & Lightboard',
      url: 'https://vimeo.com/showcase/smartboard-lightboard',
      icon: <Sparkles className="w-6 h-6" />,
      description: 'تقنيات حديثة للعروض التقديمية'
    },
    {
      id: 'social',
      title: 'فيديوهات السوشيال ميديا',
      titleEn: 'Social Media Videos',
      url: 'https://vimeo.com/showcase/social-media-ys',
      icon: <Play className="w-6 h-6" />,
      description: 'محتوى مميز لمنصات التواصل الاجتماعي'
    },
    {
      id: 'reels',
      title: 'تصوير ومونتاج الـ Reels',
      titleEn: 'Reels Production',
      url: 'https://vimeo.com/showcase/reels-ysproduction',
      icon: <Video className="w-6 h-6" />,
      description: 'ريلز احترافي يجذب الانتباه'
    }
  ]

  const featuredShowcase = {
    title: 'تصوير طريقك إلى البوث',
    titleEn: 'Show Your Way to Booth',
    videoUrl: 'https://vimeo.com/showcase/events-media-production?video=798508463',
    thumbnail: 'https://i.vimeocdn.com/video/1579579463-d8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8',
    price: 1950,
    discountPrice: 1500,
    savings: 450
  }

  const eventsPackages = [
    {
      id: 'package1',
      title: 'باقة التوثيق الأساسية',
      subtitle: 'وثق حضورك في الايفنت بالفيديو',
      titleEn: 'Basic Documentation Package',
      url: 'https://vimeo.com/showcase/events-media-production',
      icon: <Camera className="w-8 h-8" />,
      description: '3 فيديوهات للبوث + فيديو مقابلة واحد',
      descriptionEn: '3 videos for booth + 1 video interview',
      features: ['3 فيديوهات احترافية', 'فيديو مقابلة واحد', 'مونتاج احترافي'],
      price: 2950,
      discountPrice: 2500,
      savings: 450,
      comboPrice: 3500,
      comboOriginal: 4000,
      comboSavings: 500
    },
    {
      id: 'package2',
      title: 'باقة التوثيق المتكاملة',
      subtitle: 'وثق حضورك صورة وفيديو - اجعل حضورك مستمر بعد انتهاء الايفنت',
      titleEn: 'Complete Documentation Package',
      url: 'https://vimeo.com/showcase/events-media-production',
      icon: <Video className="w-8 h-8" />,
      description: '3 فيديوهات + فيديو مقابلة + 5 ستوريز 15 ثانية + 10 صور احترافية',
      descriptionEn: '3 videos + 1 interview + 5 stories (15 sec) + 10 professional photos',
      features: ['3 فيديوهات احترافية', 'فيديو مقابلة واحد', '5 ستوريز (15 ثانية)', '10 صور احترافية', 'مونتاج وتحرير كامل'],
      price: 3750,
      discountPrice: 3500,
      savings: 250,
      comboPrice: 4500,
      comboOriginal: 5000,
      comboSavings: 500,
      popular: true
    }
  ]

  const livestreamService = {
    id: 'livestream',
    title: 'الـ Live Stream للـ Events',
    titleEn: 'Live Stream for Events',
    url: 'https://vimeo.com/showcase/livestream-for-events',
    icon: <Radio className="w-8 h-8" />,
    description: 'بث مباشر احترافي للفعاليات والمؤتمرات'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/201150037441', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+201150037441'
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Cinematic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Logo/Brand */}
          <div className="mb-8 inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Film className="w-6 h-6 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wider">MEDIA PRODUCTION</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
              elstudioo
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
            Your Creative Media Production Partner
          </p>
          
          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
            <Camera className="w-8 h-8 text-purple-400 animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <ChevronRight className="w-6 h-6 text-purple-400 mx-auto rotate-90" />
          </div>
        </div>
      </div>

      {/* Events Photography Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-orange-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-xl rounded-full border border-orange-500/20 mb-6">
              <Camera className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">تخصصنا</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              التصوير الفوتوغرافي والفيديو للفعاليات
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              تغطية شاملة للفعاليات والمؤتمرات مع خدمات البث المباشر الاحترافية
            </p>
          </div>

          {/* Pricing Packages - Vertical Stack */}
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            
            {/* Show Your Way to Booth - With Pricing */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-orange-500/50 transition-all duration-300">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left: Video Preview */}
                    <a 
                      href={featuredShowcase.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="w-16 h-16 text-orange-400" />
                      </div>
                    </a>
                    
                    {/* Center: Content */}
                    <div className="flex-1 text-right">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                        {featuredShowcase.title}
                      </h3>
                      <p className="text-lg text-orange-400 mb-2 font-medium">
                        {featuredShowcase.titleEn}
                      </p>
                      <p className="text-base text-gray-400 leading-relaxed mb-4">
                        شاهد كيف نوثق طريقك إلى البوث بأسلوب سينمائي احترافي
                      </p>
                      <a 
                        href={featuredShowcase.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                      >
                        <span>مشاهدة نماذج الأعمال</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Right: Pricing */}
                    <div className="flex-shrink-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/30 min-w-[280px]">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full mb-4">
                          <TrendingDown className="w-4 h-4 text-red-400" />
                          <span className="text-red-400 text-sm font-bold">وفر {featuredShowcase.savings} جنيه</span>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-gray-400 text-sm mb-1">السعر الأصلي</p>
                          <p className="text-gray-500 text-2xl line-through">{featuredShowcase.price} EGP</p>
                        </div>
                        
                        <div className="mb-6">
                          <p className="text-orange-400 text-sm mb-1">السعر بعد الخصم</p>
                          <p className="text-white text-5xl font-black">{featuredShowcase.discountPrice}</p>
                          <p className="text-orange-400 text-xl font-bold">EGP</p>
                        </div>

                        <button
                          onClick={handleWhatsApp}
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                        >
                          احجز الآن
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Events Packages */}
            {eventsPackages.map((pkg) => (
              <div key={pkg.id} className="relative group">
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-6 py-2 rounded-full text-sm shadow-lg">
                      ⭐ الأكثر طلباً
                    </div>
                  </div>
                )}
                
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-orange-500/50 transition-all duration-300">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Left: Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {pkg.icon}
                        </div>
                      </div>
                      
                      {/* Center: Content */}
                      <div className="flex-1 text-right">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                          {pkg.title}
                        </h3>
                        {pkg.subtitle && (
                          <p className="text-base text-purple-300 mb-3 font-medium">
                            {pkg.subtitle}
                          </p>
                        )}
                        <p className="text-lg text-orange-400 mb-4 font-medium">
                          {pkg.titleEn}
                        </p>
                        <p className="text-base text-gray-400 mb-6 leading-relaxed">
                          {pkg.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <a 
                          href={pkg.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                        >
                          <span>مشاهدة نماذج الأعمال</span>
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Right: Pricing */}
                      <div className="flex-shrink-0 space-y-4 min-w-[280px]">
                        {/* Regular Package Price */}
                        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/30">
                          <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full mb-4">
                              <Tag className="w-4 h-4 text-red-400" />
                              <span className="text-red-400 text-sm font-bold">وفر {pkg.savings} جنيه</span>
                            </div>
                            
                            <div className="mb-3">
                              <p className="text-gray-500 text-xl line-through">{pkg.price} EGP</p>
                            </div>
                            
                            <div className="mb-4">
                              <p className="text-white text-4xl font-black">{pkg.discountPrice}</p>
                              <p className="text-orange-400 text-lg font-bold">EGP</p>
                            </div>

                            <button
                              onClick={handleWhatsApp}
                              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300"
                            >
                              احجز الباقة
                            </button>
                          </div>
                        </div>

                        {/* Combo Deal */}
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border-2 border-green-500/50 relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            عرض خاص 🔥
                          </div>
                          
                          <div className="text-center mt-4">
                            <p className="text-green-400 text-sm font-bold mb-2">مع تصوير طريقك إلى البوث</p>
                            
                            <div className="inline-flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full mb-3">
                              <TrendingDown className="w-4 h-4 text-green-400" />
                              <span className="text-green-400 text-sm font-bold">وفر {pkg.comboSavings} جنيه</span>
                            </div>
                            
                            <div className="mb-2">
                              <p className="text-gray-500 text-lg line-through">{pkg.comboOriginal} EGP</p>
                            </div>
                            
                            <div className="mb-4">
                              <p className="text-white text-4xl font-black">{pkg.comboPrice}</p>
                              <p className="text-green-400 text-lg font-bold">EGP</p>
                            </div>

                            <button
                              onClick={handleWhatsApp}
                              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                              احجز العرض الخاص
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Live Stream Service */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <a
                href={livestreamService.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl rounded-3xl p-12 border border-white/10 group-hover:border-red-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-pink-600/0 group-hover:from-red-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {livestreamService.icon}
                  </div>
                  
                  <div className="flex-1 text-right">
                    <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {livestreamService.title}
                    </h3>
                    <p className="text-xl text-red-400 mb-4 font-medium">
                      {livestreamService.titleEn}
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {livestreamService.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      اتصل بنا للحصول على عرض سعر مخصص
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-red-400 group-hover:text-red-300 transition-colors flex-shrink-0">
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Pricing Comparison Table */}
          <div className="max-w-7xl mx-auto mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                قارن بين الباقات
              </h3>
              <p className="text-gray-400 text-lg">
                اختر الباقة المناسبة لاحتياجاتك
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10">
                
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-white/10 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
                  <div className="text-right">
                    <h4 className="text-white font-bold text-lg">المميزات</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="text-orange-400 font-bold text-lg mb-1">تصوير طريقك إلى البوث</h4>
                    <p className="text-2xl font-black text-white">1500 <span className="text-sm text-gray-400">EGP</span></p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-orange-400 font-bold text-lg mb-1">باقة التوثيق الأساسية</h4>
                    <p className="text-2xl font-black text-white">2500 <span className="text-sm text-gray-400">EGP</span></p>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">الأفضل</span>
                    </div>
                    <h4 className="text-orange-400 font-bold text-lg mb-1">باقة التوثيق المتكاملة</h4>
                    <p className="text-2xl font-black text-white">3500 <span className="text-sm text-gray-400">EGP</span></p>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-white/5">
                  {/* Feature 1 */}
                  <div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                    <div className="text-right text-gray-300">فيديو توثيق الطريق للبوث</div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                    <div className="text-right text-gray-300">3 فيديوهات احترافية</div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                    <div className="text-right text-gray-300">فيديو مقابلة واحد</div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                  </div>

                  {/* Feature 5 */}
                  <div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                    <div className="text-right text-gray-300">5 ستوريز (15 ثانية)</div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                  </div>

                  {/* Feature 6 */}
                  <div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                    <div className="text-right text-gray-300">10 صور احترافية</div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex justify-center">
                      <X className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                  </div>

                  {/* Feature 7 */}
                  <div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                    <div className="text-right text-gray-300">مونتاج احترافي</div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                  </div>

                  {/* Feature 8 */}
                  <div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors">
                    <div className="text-right text-gray-300">تسليم سريع</div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex justify-center">
                      <Check className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                </div>

                {/* Combo Deals Footer */}
                <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-t-2 border-green-500/30">
                  <div className="text-center mb-4">
                    <h4 className="text-green-400 font-bold text-xl mb-2">🔥 عروض الباقات المجمعة</h4>
                    <p className="text-gray-400 text-sm">وفر أكثر عند الجمع بين الباقات</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/40 rounded-xl p-4 border border-green-500/30">
                      <p className="text-white font-bold mb-2">تصوير طريقك + الباقة الأساسية</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-500 line-through text-sm">4000 EGP</span>
                          <span className="text-green-400 font-black text-2xl ml-2">3500 EGP</span>
                        </div>
                        <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">وفر 500</span>
                      </div>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4 border border-green-500/30">
                      <p className="text-white font-bold mb-2">تصوير طريقك + الباقة المتكاملة</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-500 line-through text-sm">5000 EGP</span>
                          <span className="text-green-400 font-black text-2xl ml-2">4500 EGP</span>
                        </div>
                        <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">وفر 500</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Footer */}
                <div className="p-6 text-center bg-gradient-to-r from-orange-500/5 to-purple-500/5">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-12 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
                  >
                    احجز باقتك الآن عبر واتساب
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-xl rounded-full border border-purple-500/20 mb-6">
              <Clapperboard className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">من نحن</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              قصتنا
            </h2>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-black/60 backdrop-blur-2xl rounded-3xl p-8 md:p-16 border border-white/10">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center font-light">
                <span className="text-purple-400 font-semibold">elstudioo</span> هو استوديو إنتاج إعلامي متخصص في تقديم حلول إبداعية متكاملة للمحتوى المرئي. 
                نجمع بين الخبرة الفنية والتقنيات الحديثة لإنتاج محتوى استثنائي يلبي احتياجات عملائنا ويتجاوز توقعاتهم.
                نؤمن بأن كل مشروع هو فرصة لخلق تجربة بصرية فريدة تترك أثراً دائماً.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 backdrop-blur-xl rounded-full border border-pink-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-pink-300 text-sm font-medium">خدماتنا</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              ما نقدمه
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              حلول إنتاج متكاملة تغطي جميع احتياجاتك الإعلامية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">إنتاج الفيديو</h3>
                <p className="text-gray-400 leading-relaxed">
                  تصوير ومونتاج احترافي لجميع أنواع المحتوى المرئي بأحدث التقنيات والمعدات
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">المحتوى التعليمي</h3>
                <p className="text-gray-400 leading-relaxed">
                  إنتاج كورسات وبودكاست تعليمية بجودة عالية وأسلوب جذاب يضمن التفاعل
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full hover:border-pink-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">السوشيال ميديا</h3>
                <p className="text-gray-400 leading-relaxed">
                  محتوى مميز للسوشيال ميديا و Reels يجذب الجمهور ويزيد التفاعل والمبيعات
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcases Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 mb-6">
              <Play className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">معرض الأعمال</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              أمثلة من أعمالنا
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              شاهد نماذج من مشاريعنا المتنوعة في مختلف المجالات
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoCategories.map((category, index) => (
              <a
                key={category.id}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full group-hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="text-sm font-medium">مشاهدة</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 text-right group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-purple-400 mb-3 text-right font-medium">
                      {category.titleEn}
                    </p>
                    <p className="text-sm text-gray-400 text-right leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-xl rounded-full border border-green-500/20 mb-6">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">تواصل معنا</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              ابدأ مشروعك معنا
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على عرض سعر مخصص لمشروعك
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-2xl rounded-3xl p-8 md:p-16 border border-white/10">
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <button
                  onClick={handleWhatsApp}
                  className="group/btn relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/50 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <MessageCircle className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                    <span className="text-lg">تواصل عبر واتساب</span>
                  </div>
                </button>
                
                <button
                  onClick={handleCall}
                  className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/50 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Phone className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                    <span className="text-lg">اتصل بنا</span>
                  </div>
                </button>
              </div>

              <div className="text-center pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-2">رقم الهاتف</p>
                <a href="tel:+201150037441" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all block mb-8">
                  +20 115 003 7441
                </a>

                {/* Website Link */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-base mb-4">
                    للمزيد من التفاصيل والمعلومات يرجى زيارة موقعنا
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    For more details and information, please visit our website
                  </p>
                  <a 
                    href="https://elstudioo.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 border border-purple-500/30 hover:border-purple-400/50"
                  >
                    <Globe className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform" />
                    <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">elstudioo.com</span>
                    <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Film className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                elstudioo
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 elstudioo - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
