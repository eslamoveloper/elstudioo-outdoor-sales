import { Play, Phone, MessageCircle, Video, Award, Sparkles, ChevronRight, Film, Camera, Clapperboard, Radio } from 'lucide-react'

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
    title: 'Show Your Way to Booth',
    videoUrl: 'https://vimeo.com/showcase/events-media-production?video=798508463',
    thumbnail: 'https://i.vimeocdn.com/video/1579579463-d8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8'
  }

  const eventsCategories = [
    {
      id: 'events',
      title: 'تصوير ومونتاج الـ Events',
      titleEn: 'Events Media Production',
      url: 'https://vimeo.com/showcase/events-media-production',
      icon: <Camera className="w-8 h-8" />,
      description: 'تغطية شاملة للفعاليات والمؤتمرات بأعلى جودة'
    },
    {
      id: 'livestream',
      title: 'الـ Live Stream للـ Events',
      titleEn: 'Live Stream for Events',
      url: 'https://vimeo.com/showcase/livestream-for-events',
      icon: <Radio className="w-8 h-8" />,
      description: 'بث مباشر احترافي للفعاليات والمؤتمرات'
    }
  ]

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

      {/* Featured Events Section - Show Your Way to Booth */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-orange-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-xl rounded-full border border-orange-500/20 mb-6">
              <Camera className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">FEATURED SHOWCASE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Show Your Way to Booth
            </h2>
            <p className="text-gray-400 text-lg">
              تغطية احترافية للفعاليات والمعارض
            </p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <a 
              href={featuredShowcase.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 group-hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-orange-900/20 to-pink-900/20 flex items-center justify-center relative overflow-hidden">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="relative z-10 w-24 h-24 bg-orange-500/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-400 transition-all duration-300 shadow-2xl">
                  <Play className="w-12 h-12 text-white ml-1" fill="white" />
                </div>
                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-orange-500/0 group-hover:border-orange-500/30 rounded-3xl transition-all duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {featuredShowcase.title}
                </h3>
                <p className="text-gray-400">
                  شاهد كيف نوثق طريقك إلى البوث بأسلوب سينمائي احترافي
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Events & Live Stream Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 backdrop-blur-xl rounded-full border border-red-500/20 mb-6">
              <Radio className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-sm font-medium">تخصصنا</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Events & Live Stream
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              تغطية شاملة للفعاليات والمؤتمرات مع خدمات البث المباشر الاحترافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eventsCategories.map((category) => (
              <a
                key={category.id}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl rounded-3xl p-10 border border-white/10 h-full group-hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-3 text-right group-hover:text-orange-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-lg text-orange-400 mb-4 text-right font-medium">
                      {category.titleEn}
                    </p>
                    <p className="text-base text-gray-400 text-right leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-end gap-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                      <span className="text-sm font-medium">مشاهدة الأعمال</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
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
                <a href="tel:+201150037441" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all">
                  +20 115 003 7441
                </a>
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
