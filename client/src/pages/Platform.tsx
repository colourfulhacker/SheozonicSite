import PlatformExcellence from "@/components/sections/PlatformExcellence";

export default function Platform() {
  return (
    <div className="min-h-screen pt-24 gradient-innovation relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 to-purple-50/85"></div>
      <div className="absolute top-10 left-20 w-64 h-64 gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 gradient-accent rounded-full opacity-15 blur-2xl animate-bounce" style={{animationDelay: '2.5s'}}></div>
      <div className="relative z-10">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-full text-white font-bold text-lg mb-8 shadow-xl animate-pulse">
                🚀 🇮🇳 Platform Excellence Hub
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-white">
                Platform <span className="text-gradient-indian">Excellence</span> 🎆
              </h1>
              <p className="text-2xl font-bold max-w-5xl mx-auto text-white">
                🔥 <strong>Transforming logistics challenges into competitive advantages!</strong> Experience how 
                Sheozonic revolutionizes every aspect of modern shipping with breakthrough innovation! 🤖⚡🇮🇳
              </p>
            </div>
          </div>
        </section>
        <PlatformExcellence />
      </div>
    </div>
  );
}
